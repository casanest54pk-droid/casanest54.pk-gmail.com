import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} — questions about an order, a product, or anything else.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-page max-w-5xl">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Contact Us</h1>
        <p className="mt-2 max-w-lg text-ink/60">
          Have a question about an order or a product? Send us a message, or reach out directly on WhatsApp.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <ContactForm />

          <div className="flex h-fit flex-col gap-4 rounded-2xl bg-white p-6 shadow-card">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-sage-500 hover:bg-sage-600"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>

            <div className="flex items-start gap-3 text-sm text-ink/70">
              <Phone size={16} className="mt-0.5 shrink-0 text-sienna-600" />
              {siteConfig.contact.phone}
            </div>
            <div className="flex items-start gap-3 text-sm text-ink/70">
              <Mail size={16} className="mt-0.5 shrink-0 text-sienna-600" />
              {siteConfig.contact.email}
            </div>
            <div className="flex items-start gap-3 text-sm text-ink/70">
              <MapPin size={16} className="mt-0.5 shrink-0 text-sienna-600" />
              {siteConfig.contact.address}
            </div>
            <div className="flex items-start gap-3 text-sm text-ink/70">
              <Clock size={16} className="mt-0.5 shrink-0 text-sienna-600" />
              {siteConfig.contact.hours}
            </div>

            <div className="mt-2 flex gap-2 border-t border-ink/10 pt-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/60 hover:text-sienna-600">
                Facebook
              </a>
              <span className="text-ink/20">·</span>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/60 hover:text-sienna-600">
                Instagram
              </a>
              <span className="text-ink/20">·</span>
              <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/60 hover:text-sienna-600">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
