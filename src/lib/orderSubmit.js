// ============================================================================
// Order submission — NO BACKEND.
// ============================================================================
// CasaNest has no server or database of its own. When a customer places an
// order, the order object below is sent straight from the browser to
// Web3Forms (https://web3forms.com) — a free service built exactly for this:
// receiving form submissions from a static/frontend-only site and emailing
// them to you. There is nothing to host or maintain.
//
// SETUP (2 minutes):
//   1. Go to https://web3forms.com and create a free Access Key with your
//      business email.
//   2. Copy that key into .env.local as:
//         NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
//   3. Restart the dev server (or redeploy on Vercel with the same env var
//      added under Project Settings -> Environment Variables).
//
// This access key is safe to expose in frontend code — it only allows
// submitting forms to your inbox, it cannot read/delete/modify anything.
// Never put a secret API key (e.g. a database password) in frontend code.
//
// SWAPPING THE INTEGRATION:
// Every order flows through the single `submitOrder()` function below. To
// use Google Sheets (via a Google Apps Script Web App URL), Formspree,
// EmailJS or any other frontend-compatible service instead, this is the
// only function you need to change — nothing else in the app needs to know.
// ============================================================================

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitOrder(order) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const itemsSummary = order.items
    .map(
      (item) =>
        `${item.name} x${item.quantity} — ${item.price * item.quantity}`
    )
    .join("\n");

  const payload = {
    access_key: accessKey,
    subject: `New CasaNest Order — ${order.orderId}`,
    from_name: "CasaNest Website",
    order_id: order.orderId,
    customer_name: order.customerName,
    phone: order.phone,
    email: order.email || "not provided",
    city: order.city,
    address: order.address,
    notes: order.notes || "none",
    payment_method: order.paymentMethod,
    subtotal: order.subtotal,
    delivery_fee: order.deliveryFee,
    total: order.total,
    items: itemsSummary,
    created_at: order.createdAt,
  };

  // Guard: if no access key has been configured yet, don't silently pretend
  // the order was sent — fail loudly so it's obvious during development.
  if (!accessKey || accessKey === "your-web3forms-access-key-here") {
    console.warn(
      "[CasaNest] NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not configured. " +
        "Order was NOT sent anywhere. See src/lib/orderSubmit.js for setup steps."
    );
    return {
      ok: false,
      simulated: true,
      message:
        "Order integration is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local.",
    };
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok || data.success === false) {
      return { ok: false, message: data.message || "Order submission failed." };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, message: err.message || "Network error." };
  }
}
