"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import SearchModal from "./SearchModal";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/shop#categories" },
  { label: "New Arrivals", href: "/shop?filter=new" },
  { label: "Best Sellers", href: "/shop?filter=bestsellers" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const { count: wishCount } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-linen/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="rounded-full p-2 hover:bg-linen-200 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <Link href="/" className="font-display text-2xl tracking-tight text-ink">
          Casa<span className="text-sienna-500">Nest</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="btn-ghost relative">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="rounded-full p-2.5 hover:bg-linen-200"
          >
            <Search size={20} />
          </button>
          <Link href="/wishlist" aria-label="Wishlist" className="relative rounded-full p-2.5 hover:bg-linen-200">
            <Heart size={20} />
            {wishCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-sienna-500 text-[10px] font-medium text-white animate-pop">
                {wishCount}
              </span>
            )}
          </Link>
          <button onClick={openDrawer} aria-label="Cart" className="relative rounded-full p-2.5 hover:bg-linen-200">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-sienna-500 text-[10px] font-medium text-white animate-pop">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[95] bg-ink/40 animate-fade-in lg:hidden" onClick={() => setMobileOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-72 flex-col gap-1 bg-white p-5 shadow-premium"
            style={{ animation: "fade-up 0.25s ease-out" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-xl">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="rounded-full p-1.5 hover:bg-linen-200">
                <X size={20} />
              </button>
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ink hover:bg-linen-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-ink/10 pt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-base text-ink hover:bg-linen-200 block">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
