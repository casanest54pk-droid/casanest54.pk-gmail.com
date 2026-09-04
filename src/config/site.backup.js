// ============================================================================
// CasaNest — Central Site Configuration
// Edit values in this file to update brand info across the ENTIRE website.
// Nothing here is a secret — it is safe to expose in the browser.
// ============================================================================

export const siteConfig = {
  name: "CasaNest",
  tagline: "Beautiful finds for every corner of your home",
  description:
    "CasaNest is Pakistan's home for smart, stylish and useful everyday products — kitchen tools, home organization, gadgets and lifestyle finds delivered nationwide with Cash on Delivery.",

  // Used for SEO metadata, canonical URLs and sitemap.xml.
  // Replace with your real production domain before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.casanest.pk",

  currency: "PKR",
  currencySymbol: "Rs.",

  // Flat delivery fee charged on every order. Change it here — nowhere else.
  deliveryFee: 200,
  freeDeliveryThreshold: 3000, // orders at/above this subtotal ship free

  announcement: "✨ Free Delivery on Orders Above Rs. 3,000 — Cash on Delivery Available",

  contact: {
    email: "hello@casanest.pk",
    phone: "+92 300 1234567",
    whatsapp: "923001234567", // digits only, country code first, no +/spaces
    address: "Gulberg III, Lahore, Punjab, Pakistan",
    hours: "Mon – Sat, 10:00 AM – 7:00 PM",
  },

  social: {
    facebook: "https://facebook.com/casanest.pk",
    instagram: "https://instagram.com/casanest.pk",
    tiktok: "https://tiktok.com/@casanest.pk",
  },

  // Any string field here is a placeholder — replace before going live.
  business: {
    legalName: "CasaNest",
    registeredAddress: "Gulberg III, Lahore, Punjab, Pakistan",
  },
};

export const whatsappLink = (message) => {
  const text = encodeURIComponent(message || `Hi ${siteConfig.name}, I have a question.`);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
};
