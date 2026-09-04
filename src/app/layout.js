import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { RecentlyViewedProvider } from "@/context/RecentlyViewedContext";
import { ToastProvider } from "@/context/ToastContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ScrollToTop from "@/components/ScrollToTop";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = buildMetadata({});

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.tiktok],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ToastProvider>
          <CartProvider>
            <WishlistProvider>
              <RecentlyViewedProvider>
                <AnnouncementBar />
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <CartDrawer />
                <ScrollToTop />
              </RecentlyViewedProvider>
            </WishlistProvider>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
