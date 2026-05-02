// Edit these to point CTAs to your real numbers/email
export const CONTACT = {
  whatsapp: "918169887643", // ✅ correct format
  phoneDisplay: "+91 81698 87643",
  email: "Pjain4069@gmail.com",
  locations: "Mumbai • Navi Mumbai • Thane • Pune",
};

export const waLink = (msg: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
