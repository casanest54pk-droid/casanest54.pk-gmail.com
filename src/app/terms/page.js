import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for shopping at ${siteConfig.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container-page max-w-3xl">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink">Terms & Conditions</h1>
        <p className="mt-2 text-xs text-ink/45">Last updated: placeholder — update this date when you publish your final terms.</p>

        <div className="mt-6 flex flex-col gap-5 text-sm leading-relaxed text-ink/70">
          <p>
            This is placeholder terms content. Please have it reviewed against your actual business practices
            and applicable law before launch.
          </p>

          <div>
            <h2 className="font-display text-lg text-ink">Orders</h2>
            <p className="mt-1">
              By placing an order on {siteConfig.name}, you confirm that the delivery details you provide are
              accurate. Orders are confirmed by our team before dispatch; we reserve the right to cancel an
              order if details cannot be verified.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Pricing</h2>
            <p className="mt-1">
              All prices are listed in {siteConfig.currency} and are subject to change without prior notice.
              The price at the time of order confirmation applies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Payment</h2>
            <p className="mt-1">Currently, orders are payable via Cash on Delivery only.</p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Product Information</h2>
            <p className="mt-1">
              We aim to describe every product accurately, including images, specifications and pricing.
              Minor variations in color or packaging may occur.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Contact</h2>
            <p className="mt-1">
              Questions about these terms can be sent to {siteConfig.contact.email}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
