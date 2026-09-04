import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Returns & Exchange",
  description: `${siteConfig.name}'s returns and exchange policy.`,
  path: "/returns",
});

export default function ReturnsPage() {
  return (
    <div className="section">
      <div className="container-page max-w-3xl">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Returns & Exchange", path: "/returns" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink">Returns & Exchange Policy</h1>

        <div className="mt-6 flex flex-col gap-5 text-sm leading-relaxed text-ink/70">
          <p>
            This is placeholder policy text — please review and adjust it to match your actual return process
            before launch, including any legal requirements that apply to your business.
          </p>

          <div>
            <h2 className="font-display text-lg text-ink">Return Window</h2>
            <p className="mt-1">
              If you're not satisfied with your order, you may request a return within 3 days of delivery,
              provided the product is unused, undamaged and in its original packaging.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">How to Request a Return</h2>
            <p className="mt-1">
              Contact us at {siteConfig.contact.phone} or {siteConfig.contact.email} with your order reference
              number and reason for return. Our team will guide you through the next steps.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Non-Returnable Items</h2>
            <p className="mt-1">
              Personal care and hygiene items may not be eligible for return once opened, for health and safety
              reasons.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Refunds</h2>
            <p className="mt-1">
              Approved returns are refunded or exchanged after the item is received and inspected. Since orders
              are paid via Cash on Delivery, refunds are typically issued via bank transfer or store credit —
              confirm your preferred method when you contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
