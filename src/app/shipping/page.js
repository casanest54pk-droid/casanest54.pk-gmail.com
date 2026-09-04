import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Shipping Information",
  description: `Delivery times, coverage and charges for ${siteConfig.name} orders across Pakistan.`,
  path: "/shipping",
});

export default function ShippingPage() {
  return (
    <div className="section">
      <div className="container-page max-w-3xl">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Shipping Information", path: "/shipping" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink">Shipping Information</h1>

        <div className="prose-content mt-6 flex flex-col gap-5 text-sm leading-relaxed text-ink/70">
          <p>
            We currently deliver nationwide across Pakistan through trusted courier partners. Below is a general
            guide — replace these placeholders with your actual shipping terms before launch.
          </p>

          <div>
            <h2 className="font-display text-lg text-ink">Delivery Timeframes</h2>
            <p className="mt-1">
              Orders are typically processed within 24–48 hours and delivered within 3–5 business days for
              major cities, and up to 7 business days for remote areas.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Delivery Charges</h2>
            <p className="mt-1">
              A flat delivery fee of {siteConfig.currencySymbol} {siteConfig.deliveryFee} applies to orders
              below {siteConfig.currencySymbol} {siteConfig.freeDeliveryThreshold.toLocaleString()}. Orders at or
              above that amount qualify for free delivery.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Order Tracking</h2>
            <p className="mt-1">
              Once your order is dispatched, our team will share tracking details over WhatsApp or phone call.
              For any questions about an order in transit, contact us at {siteConfig.contact.phone}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Cash on Delivery</h2>
            <p className="mt-1">
              All orders can be paid for in cash at the time of delivery — no advance payment required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
