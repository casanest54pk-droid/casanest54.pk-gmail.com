// ============================================================================
// CasaNest â€” Central Site Configuration
// Edit values in this file to update brand info across the ENTIRE website.
// Nothing here is a secret â€” it is safe to expose in the browser.
// ============================================================================

export const siteConfig = {
  name: "CasaNest",
  tagline: "Beautiful finds for every corner of your home",
  description:
    "CasaNest is Pakistan's home for smart, stylish and useful everyday products â€” kitchen tools, home organization, gadgets and lifestyle finds delivered nationwide with Cash on Delivery.",

  // Used for SEO metadata, canonical URLs and sitemap.xml.
  // Replace with your real production domain before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://casanest54.vercel.app",

  currency: "PKR",
  currencySymbol: "Rs.",

  // Flat delivery fee charged on every order. Change it here â€” nowhere else.
  deliveryFee: 200,
  freeDeliveryThreshold: 3000, // orders at/above this subtotal ship free

  announcement: "âœ¨ Free Delivery on Orders Above Rs. 3,000 â€” Cash on Delivery Available",

  contact: {
    email: "casanest54.pk@gmail.com",
    phone: "",
    whatsapp: "", // WhatsApp not connected yet
    address: "",
    hours: "Mon â€“ Sat, 10:00 AM â€“ 7:00 PM",
  },

  social: {
    facebook: "https://www.facebook.com/share/1ETcmZVKD3/",
    instagram: "https://www.instagram.com/casanest45/",
    tiktok: "",
  },

  // Any string field here is a placeholder â€” replace before going live.
  business: {
    legalName: "CasaNest",
    registeredAddress: "",
  },
};




