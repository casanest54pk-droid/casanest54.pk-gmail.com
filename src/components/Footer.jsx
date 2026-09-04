import Link from "next/link";
import { Facebook, Instagram, Truck, Banknote, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/shop#categories" },
  { label: "New Arrivals", href: "/shop?filter=new" },
  { label: "Best Sellers", href: "/shop?filter=bestsellers" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const careLinks = [
  { label: "Shipping Information", href: "/shipping" },
  { label: "Returns & Exchange", href: "/returns" },
  { label: "FAQs", href: "/faq" },
  { label: "Order Tracking", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82c-.86-.85-1.42-1.94-1.6-3.16h-3.15v13.2a2.6 2.6 0 1 1-1.86-2.49V10.2a5.83 5.83 0 1 0 5.01 5.77V9.2a7.1 7.1 0 0 0 4.16 1.33V7.4a3.9 3.9 0 0 1-2.56-1.58Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="border-b border-ink/10 bg-linen-100">
        <div className="container-page grid grid-cols-1 gap-4 py-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
              <Truck size={16} />
            </div>
            <p className="text-sm text-ink/70">Nationwide delivery, 2–5 business days</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
              <Banknote size={16} />
            </div>
            <p className="text-sm text-ink/70">Cash on Delivery on every order</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
              <ShieldCheck size={16} />
            </div>
            <p className="text-sm text-ink/70">Secure, hassle-free ordering</p>
          </div>
        </div>
      </div>

      <div className="container-page grid grid-cols-2 gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="font-display text-2xl text-ink">
            Casa<span className="text-sienna-500">Nest</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink/60">{siteConfig.description}</p>
          <div className="mt-4 flex items-center gap-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CasaNest on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-linen-200 text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-sienna-500 hover:text-white"
            >
              <Facebook size={16} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CasaNest on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-linen-200 text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-sienna-500 hover:text-white"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm text-ink">Quick Links</p>
          <ul className="mt-3 flex flex-col gap-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-ink/60 hover:text-sienna-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm text-ink">Customer Care</p>
          <ul className="mt-3 flex flex-col gap-2">
            {careLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-ink/60 hover:text-sienna-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm text-ink">Get in Touch</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/60">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 py-5">
        <p className="container-page text-center text-xs text-ink/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

