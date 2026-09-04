"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag, Trash2, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import FreeDeliveryProgress from "./FreeDeliveryProgress";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, increment, decrement, removeItem, subtotal, deliveryFee, total } =
    useCart();

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[95] flex justify-end bg-ink/40" onClick={closeDrawer} role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
        style={{ animation: "fade-up 0.25s ease-out" }}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="font-display text-lg">Your Cart ({items.length})</h2>
          <button onClick={closeDrawer} aria-label="Close cart" className="rounded-full p-1.5 hover:bg-linen-200">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag size={40} className="text-ink/20" />
            <p className="font-display text-lg text-ink">Your cart is empty</p>
            <p className="text-sm text-ink/60">Looks like you haven't added anything yet.</p>
            <button onClick={closeDrawer} className="btn-primary mt-2">
              <Link href="/shop">Start Shopping</Link>
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-linen-200">
                      {item.image && <Image src={item.image} alt={item.name} fill className="object-cover" />}
                    </div>
                    <div className="flex flex-1 flex-col">
                      <Link href={`/product/${item.slug}`} onClick={closeDrawer} className="line-clamp-2 text-sm font-medium text-ink hover:text-sienna-600">
                        {item.name}
                      </Link>
                      <span className="mt-0.5 text-sm text-ink/60">{formatPrice(item.price)}</span>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-ink/15">
                          <button onClick={() => decrement(item.id)} aria-label="Decrease quantity" className="flex h-7 w-7 items-center justify-center">
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center text-xs font-medium">{item.quantity}</span>
                          <button onClick={() => increment(item.id)} aria-label="Increase quantity" className="flex h-7 w-7 items-center justify-center">
                            <Plus size={12} />
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`} className="text-ink/40 hover:text-sienna-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-ink/10 px-5 py-4">
              <div className="mb-3">
                <FreeDeliveryProgress subtotal={subtotal} />
              </div>
              <div className="flex justify-between text-sm text-ink/70">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="mt-1 flex justify-between text-sm text-ink/70">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-dashed border-ink/15 pt-2 font-display text-lg">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Link href="/checkout" onClick={closeDrawer} className="btn-primary mt-4 w-full">
                Checkout
              </Link>
              <Link href="/cart" onClick={closeDrawer} className="btn-ghost mt-2 w-full">
                View Full Cart
              </Link>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-ink/45">
                <ShieldCheck size={13} className="shrink-0" /> Secure checkout · Cash on Delivery available
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
