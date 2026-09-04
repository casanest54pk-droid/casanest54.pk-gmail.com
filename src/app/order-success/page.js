"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Banknote,
  MapPin,
  ArrowRight,
  Home,
  PackageCheck,
  PackageOpen,
  Truck,
  Sparkles,
} from "lucide-react";
import { formatPrice } from "@/lib/format";
import { siteConfig } from "@/config/site";

const LAST_ORDER_KEY = "casanest_last_order_v1";

const TIMELINE = [
  { icon: PackageCheck, label: "Order received" },
  { icon: PackageOpen, label: "Order being prepared" },
  { icon: Truck, label: "Order dispatched" },
  { icon: Home, label: "Delivered to your door" },
];

// A handful of small, tasteful confetti pieces in the brand palette.
// Pure CSS animation, no libraries — fires once on mount.
const CONFETTI = [
  { left: "18%", delay: "0ms", color: "bg-sienna-500" },
  { left: "32%", delay: "90ms", color: "bg-brass-500" },
  { left: "48%", delay: "40ms", color: "bg-sage-500" },
  { left: "62%", delay: "150ms", color: "bg-sienna-400" },
  { left: "76%", delay: "60ms", color: "bg-brass-500" },
  { left: "88%", delay: "120ms", color: "bg-sage-400" },
];

export default function OrderSuccessPage() {
  const [order, setOrder] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(LAST_ORDER_KEY);
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
    setLoaded(true);
    // Fire the confetti burst once, briefly, after the checkmark lands.
    const t = setTimeout(() => setShowConfetti(true), 250);
    return () => clearTimeout(t);
  }, []);

  if (!loaded) return null;

  if (!order) {
    return (
      <div className="container-page section text-center">
        <p className="font-display text-2xl text-ink">No recent order found</p>
        <p className="mt-2 text-sm text-ink/55">Your order details may have expired from this session.</p>
        <Link href="/shop" className="btn-primary mt-5 inline-flex">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container-page max-w-2xl">
        <div className="relative flex flex-col items-center text-center">
          {/* Confetti burst */}
          {showConfetti && (
            <div className="pointer-events-none absolute -top-2 left-0 right-0 h-24 overflow-hidden" aria-hidden="true">
              {CONFETTI.map((c, i) => (
                <span
                  key={i}
                  className={`absolute top-0 h-2 w-2 rounded-sm ${c.color} animate-confetti-fall`}
                  style={{ left: c.left, animationDelay: c.delay }}
                />
              ))}
            </div>
          )}

          {/* Checkmark badge with a soft expanding ring */}
          <div className="relative flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 animate-ring-grow rounded-full bg-sage-400" aria-hidden="true" />
            <div className="animate-check-pop relative flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-sage-600">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
                <path
                  d="M7 12.5l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="success-check-circle"
                  pathLength="48"
                />
              </svg>
            </div>
          </div>

          <p className="mt-5 flex items-center gap-1.5 font-display text-3xl text-ink">
            <Sparkles size={22} className="text-brass-500" /> Order Confirmed!
          </p>
          <p className="mt-3 max-w-md text-sm text-ink/65 sm:text-base">
            Thank you for shopping with CasaNest, {order.customerName} ❤️
          </p>
          <p className="mt-1 text-sm text-ink/55">
            Your order <span className="font-medium text-ink">#{order.orderId}</span> has been received
            successfully.
          </p>
        </div>

        {/* Order Total / Payment / Delivery — quick-glance stat cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="card-premium flex flex-col gap-1 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink/45">Order Total</p>
            <p className="font-display text-2xl text-ink">{formatPrice(order.total)}</p>
          </div>
          <div className="card-premium flex flex-col gap-1 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink/45">Payment</p>
            <p className="mt-1 flex items-center justify-center gap-1.5 font-display text-base text-ink">
              <Banknote size={16} className="text-sage-600" /> Cash on Delivery
            </p>
          </div>
          <div className="card-premium flex flex-col gap-1 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink/45">Delivery</p>
            <p className="mt-1 font-display text-base text-ink">Usually 2–5 business days</p>
          </div>
        </div>

        {/* What happens next timeline */}
        <div className="card-premium mt-6 p-6">
          <h2 className="font-display text-lg text-ink">What happens next?</h2>
          <div className="mt-5 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {TIMELINE.map(({ icon: Icon, label }, i) => (
              <div key={label} className="relative flex flex-col items-center gap-2 text-center">
                {i < TIMELINE.length - 1 && (
                  <span className="absolute left-1/2 top-5 hidden h-px w-full bg-sage-500/25 sm:block" aria-hidden="true" />
                )}
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  <Icon size={18} />
                </div>
                <p className="text-xs font-medium text-ink/75 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Itemized order details */}
        <div className="card-premium mt-6 p-6">
          <h2 className="font-display text-lg text-ink">Order Details</h2>
          <ul className="mt-4 flex flex-col divide-y divide-ink/10">
            {order.items.map((item) => (
              <li key={item.name} className="flex items-center justify-between py-2.5 text-sm">
                <span className="text-ink/75">
                  {item.name} <span className="text-ink/40">x{item.quantity}</span>
                </span>
                <span className="font-medium text-ink">{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-between text-sm text-ink/70">
            <span>Subtotal</span>
            <span>{formatPrice(order.subtotal)}</span>
          </div>
          <div className="mt-1 flex justify-between text-sm text-ink/70">
            <span>Delivery</span>
            <span>{order.deliveryFee === 0 ? "Free" : formatPrice(order.deliveryFee)}</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-dashed border-ink/15 pt-3 font-display text-xl">
            <span>Total</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </div>

        <div className="mt-4 flex gap-3 rounded-2xl bg-white p-5 shadow-card">
          <MapPin size={18} className="mt-0.5 shrink-0 text-sage-600" />
          <div>
            <p className="text-sm font-medium text-ink">Delivering to</p>
            <p className="mt-0.5 text-sm text-ink/60">
              {order.address}, {order.city}
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-ink/60">
          Thank you for choosing CasaNest. We're happy to have you here. ✨
        </p>

        <p className="mt-2 text-center text-xs text-ink/45">
          Questions about your order? Reach us at {siteConfig.contact.email}.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/shop" className="btn-primary">
            Continue Shopping <ArrowRight size={16} />
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
