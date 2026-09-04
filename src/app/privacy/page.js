import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container-page max-w-3xl">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink">Privacy Policy</h1>
        <p className="mt-2 text-xs text-ink/45">Last updated: placeholder — update this date when you publish your final policy.</p>

        <div className="mt-6 flex flex-col gap-5 text-sm leading-relaxed text-ink/70">
          <p>
            This is placeholder privacy policy text. Replace it with a policy reviewed for your business and
            applicable law before launch — we have not made any legal claims on your behalf here.
          </p>

          <div>
            <h2 className="font-display text-lg text-ink">Information We Collect</h2>
            <p className="mt-1">
              When you place an order, we collect the information you provide at checkout — your name, phone
              number, email (optional), delivery address and order details — solely to process and deliver
              your order.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">How We Use Your Information</h2>
            <p className="mt-1">
              Order information is used to fulfil deliveries, contact you about your order, and — if you
              subscribe — to send occasional updates about new products or offers. We do not sell your
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Third-Party Services</h2>
            <p className="mt-1">
              {siteConfig.name} uses third-party services (such as form and email delivery providers) to
              receive order and contact form submissions, since this website does not operate its own server
              or database. These providers process data only to deliver your submission to us.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-ink">Your Rights</h2>
            <p className="mt-1">
              You may contact us at {siteConfig.contact.email} at any time to ask what information we hold
              about you or to request that it be deleted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
