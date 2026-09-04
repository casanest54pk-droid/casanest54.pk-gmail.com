"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Banknote, Truck, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import Breadcrumbs from "@/components/Breadcrumbs";
import FreeDeliveryProgress from "@/components/FreeDeliveryProgress";

export default function CartPage() {
  const { items, increment, decrement, removeItem, subtotal, deliveryFee, total, hydrated } = useCart();

  if (!hydrated) {
    return <div className="container-page section text-center text-ink/50">Loading cart...</div>;
  }

  return (
    <div className="section">
      <div className="container-page">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Cart", path: "/cart" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink">Your Cart</h1>

        {items.length === 0 ? (
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-white py-20 text-center shadow-card">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linen-200">
              <ShoppingBag size={30} className="text-ink/30" />
            </div>
            <p className="font-display text-xl text-ink">Your cart is empty</p>
            <p className="text-sm text-ink/55">Browse our collection and find something you'll love.</p>
            <Link href="/shop" className="btn-primary mt-2">
              Start Shopping <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
            <ul className="flex flex-col divide-y divide-ink/10 rounded-2xl bg-white px-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-5">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-linen-200">
                    {item.image && <Image src={item.image} alt={item.name} fill className="object-cover" />}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <Link href={`/product/${item.slug}`} className="font-display text-base text-ink hover:text-sienna-600">
                      {item.name}
                    </Link>
                    <span className="mt-1 text-sm text-ink/60">{formatPrice(item.price)} each</span>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-ink/15">
                        <button onClick={() => decrement(item.id)} aria-label="Decrease quantity" className="flex h-9 w-9 items-center justify-center">
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => increment(item.id)} aria-label="Increase quantity" className="flex h-9 w-9 items-center justify-center">
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-display text-base text-ink">{formatPrice(item.price * item.quantity)}</span>
                        <button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`} className="text-ink/40 hover:text-sienna-600">
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="h-fit rounded-2xl bg-white p-6 shadow-card">
              <h2 className="font-display text-lg text-ink">Order Summary</h2>

              <div className="mt-4">
                <FreeDeliveryProgress subtotal={subtotal} />
              </div>

              <div className="mt-4 flex justify-between text-sm text-ink/70">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="mt-2 flex justify-between text-sm text-ink/70">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}</span>
              </div>
              <div className="mt-3 flex justify-between border-t border-dashed border-ink/15 pt-3 font-display text-xl">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Link href="/checkout" className="btn-primary mt-5 w-full">
                Proceed to Checkout <ArrowRight size={16} />
              </Link>
              <Link href="/shop" className="btn-ghost mt-2 w-full">
                Continue Shopping
              </Link>

              <div className="mt-5 flex flex-col gap-2 border-t border-ink/10 pt-4 text-xs text-ink/55">
                <span className="flex items-center gap-2"><Banknote size={14} className="shrink-0 text-sage-600" /> Cash on Delivery available</span>
                <span className="flex items-center gap-2"><Truck size={14} className="shrink-0 text-sage-600" /> Nationwide delivery</span>
                <span className="flex items-center gap-2"><ShieldCheck size={14} className="shrink-0 text-sage-600" /> Secure order processing</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
