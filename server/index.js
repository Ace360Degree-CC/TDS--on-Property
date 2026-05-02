import http from "node:http";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.MAIL_SERVER_PORT ?? 8787);
const HOST = process.env.MAIL_SERVER_HOST ?? "127.0.0.1";

const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? SMTP_USER;
const FROM_EMAIL = process.env.FROM_EMAIL ?? SMTP_USER;

const mobileRegex = /^[6-9]\d{9}$/;
const placeholderPattern = /(your_|example\.com)/i;

function isPlaceholder(value) {
  return !value || placeholderPattern.test(String(value).trim());
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(payload));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";

    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error("Payload too large"));
      }
    });

    req.on("end", () => {
      try {
        const parsed = raw ? JSON.parse(raw) : {};
        resolve(parsed);
      } catch {
        reject(new Error("Invalid JSON payload"));
      }
    });

    req.on("error", reject);
  });
}

function requireEnv() {
  const missing = [];
  if (isPlaceholder(SMTP_USER)) missing.push("SMTP_USER");
  if (isPlaceholder(SMTP_PASS)) missing.push("SMTP_PASS");
  if (isPlaceholder(ADMIN_EMAIL)) missing.push("ADMIN_EMAIL or SMTP_USER");

  return missing;
}

function buildAdminHtml(data) {
  return `
    <h2>New TDS Enquiry</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Mobile:</strong> ${data.mobile}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Case Type:</strong> ${data.caseType}</p>
    <p><strong>Submitted At:</strong> ${new Date().toISOString()}</p>
  `;
}

function buildUserHtml(data) {
  return `
    <p>Hi ${data.name},</p>
    <p>Thank you for contacting us for <strong>${data.service}</strong>.</p>
    <p>We have received your request and our team will get back to you shortly.</p>
    <p>Regards,<br />CA Praveen Jain Team</p>
  `;
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    sendJson(res, 404, { success: false, message: "Not found" });
    return;
  }

  if (req.method === "GET" && req.url === "/health") {
    sendJson(res, 200, { ok: true });
    return;
  }

  if (req.method !== "POST" || req.url !== "/api/tds-enquiry") {
    sendJson(res, 404, { success: false, message: "Not found" });
    return;
  }

  const missingEnv = requireEnv();
  if (missingEnv.length > 0) {
    sendJson(res, 500, {
      success: false,
      message: `Missing required env: ${missingEnv.join(", ")}`,
    });
    return;
  }

  try {
    const body = await parseBody(req);

    const name = String(body?.name ?? "").trim();
    const mobile = String(body?.mobile ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const service = String(body?.service ?? "").trim();
    const caseType = String(body?.caseType ?? "").trim();

    if (!name || name.length < 2 || name.length > 80) {
      sendJson(res, 400, { success: false, message: "Invalid name" });
      return;
    }

    if (!mobileRegex.test(mobile)) {
      sendJson(res, 400, { success: false, message: "Invalid mobile" });
      return;
    }

    if (!email || !email.includes("@")) {
      sendJson(res, 400, { success: false, message: "Invalid email" });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `New TDS Enquiry: ${service}`,
      html: buildAdminHtml({ name, mobile, email, service, caseType }),
      text: `New TDS Enquiry\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nService: ${service}\nCase Type: ${caseType}`,
    });

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: email,
      subject: "Thank you for your TDS enquiry",
      html: buildUserHtml({ name, service }),
      text: `Hi ${name},\n\nThank you for contacting us for ${service}. We have received your request and will get back to you shortly.`,
    });

    sendJson(res, 200, { success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    if (error?.code === "EAUTH" || error?.responseCode === 535) {
      sendJson(res, 500, {
        success: false,
        message: "SMTP authentication failed. Check SMTP_USER and Gmail App Password.",
      });
      return;
    }

    sendJson(res, 500, {
      success: false,
      message: "Could not send email. Please try again.",
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Mail API running at http://${HOST}:${PORT}`);
});
