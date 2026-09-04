import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = buildMetadata({
  title: "FAQs",
  description: `Answers to common questions about ordering, delivery and payment at ${siteConfig.name}.`,
  path: "/faq",
});

const FAQS = [
  {
    q: "How do I place an order?",
    a: "Simply add products to your cart, go to checkout, fill in your delivery details, and place your order. No account or payment card required.",
  },
  {
    q: "Do I need to pay in advance?",
    a: "No — all orders are Cash on Delivery. You pay in cash when your order arrives at your door.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders arrive within 3–5 business days, depending on your city. Remote areas may take a little longer.",
  },
  {
    q: "How do I track my order?",
    a: "After your order is dispatched, we'll reach out over WhatsApp or phone with tracking details.",
  },
  {
    q: "Can I return a product?",
    a: "Yes, within 3 days of delivery if it's unused and in its original packaging. See our Returns & Exchange page for full details.",
  },
  {
    q: "Do you deliver across all of Pakistan?",
    a: "We deliver nationwide to all major cities and most surrounding areas through our courier partners.",
  },
  {
    q: "How can I contact CasaNest?",
    a: `You can reach us on WhatsApp, at ${siteConfig.contact.phone}, or by email at ${siteConfig.contact.email}.`,
  },
];

export default function FaqPage() {
  return (
    <div className="section">
      <div className="container-page max-w-3xl">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQs", path: "/faq" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink">Frequently Asked Questions</h1>
        <div className="mt-8">
          <FaqAccordion faqs={FAQS} />
        </div>
      </div>
    </div>
  );
}
