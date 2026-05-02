import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  // ENV variables
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    ADMIN_EMAIL,
    FROM_EMAIL,
  } = process.env;

  // Check env config
  if (!SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
    return res.status(500).json({
      success: false,
      message: "Missing SMTP configuration",
    });
  }

  // Get request data
  const { name, mobile, email, service, caseType } = req.body || {};

  // Validation
  if (
    !name?.trim() ||
    !/^\d{10}$/.test(mobile || "") ||
    !/\S+@\S+\.\S+/.test(email || "")
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid form data",
    });
  }

  const safeName = name.trim();
  const safeEmail = email.trim();
  const safeService = service || "TDS Filing";
  const safeCaseType = caseType || "General";

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port: Number(SMTP_PORT || 587),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    // 📩 ADMIN EMAIL
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: safeEmail,
      subject: `New TDS Enquiry: ${safeService}`,
      html: `
        <h2>New TDS Enquiry</h2>
        <p><b>Name:</b> ${safeName}</p>
        <p><b>Email:</b> ${safeEmail}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Service:</b> ${safeService}</p>
        <p><b>Case Type:</b> ${safeCaseType}</p>
        <p><b>Submitted At:</b> ${new Date().toLocaleString()}</p>
      `,
    });

    // 📩 USER EMAIL
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: safeEmail,
      subject: "Thank You for Your TDS Enquiry",
      html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for contacting us regarding <b>${safeService}</b>.</p>
        <p>We have received your request and our team will get back to you shortly.</p>
        <br/>
        <p><b>CA Praveen Jain Team</b></p>
        <p>📞 +91-8169887643</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("Mail Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
}