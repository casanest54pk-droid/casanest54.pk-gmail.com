import { siteConfig } from "@/config/site";

// Consistent currency formatting used everywhere: "Rs. 1,299"
export function formatPrice(amount) {
  const rounded = Math.round(Number(amount) || 0);
  return `${siteConfig.currencySymbol} ${rounded.toLocaleString("en-PK")}`;
}

export function calcDiscountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Generates a client-side order reference like CASA-8K3F92.
// NOTE: this is a display reference only. It is generated in the browser,
// not by a secure backend/database, so it should not be treated as a
// guaranteed-unique permanent order ID. If you need guaranteed uniqueness,
// generate the ID in whichever order-processing service you connect
// (Google Sheets script, Web3Forms + Zapier, etc).
export function generateOrderRef() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `CASA-${code}`;
}
