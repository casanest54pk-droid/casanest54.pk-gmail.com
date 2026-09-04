"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Loader2, ShieldCheck, Banknote, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { generateOrderRef } from "@/lib/format";
import { submitOrder } from "@/lib/orderSubmit";
import { useToast } from "@/context/ToastContext";
import Breadcrumbs from "@/components/Breadcrumbs";

const LAST_ORDER_KEY = "casanest_last_order_v1";

export default function CheckoutPage() {
  const { items, subtotal, deliveryFee, total, clearCart, hydrated } = useCart();
  const { showToast } = useToast();
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) errs.phone = "Enter a valid phone number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email address";
    if (!form.city.trim()) errs.city = "City is required";
    if (!form.address.trim() || form.address.trim().length < 10) errs.address = "Enter your complete address";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    if (!validate()) {
      showToast("Please fix the highlighted fields", "error");
      return;
    }

    setSubmitting(true);
    const order = {
      orderId: generateOrderRef(),
      customerName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      city: form.city.trim(),
      address: form.address.trim(),
      notes: form.notes.trim(),
      items: items.map((i) => ({ name: i.name, quantity: i.quantity, price: i.price })),
      subtotal,
      deliveryFee,
      total,
      paymentMethod: "Cash on Delivery",
      createdAt: new Date().toISOString(),
    };

    const result = await submitOrder(order);
    setSubmitting(false);

    if (!result.ok && !result.simulated) {
      showToast(result.message || "Could not place order. Please try again.", "error");
      return;
    }

    try {
      sessionStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order));
    } catch {}

    clearCart();
    router.push("/order-success");
  };

  if (!hydrated) {
    return <div className="container-page section text-center text-ink/50">Loading checkout...</div>;
  }

  if (items.length === 0) {
    return (
      <div className="container-page section text-center">
        <p className="font-display text-2xl text-ink">Your cart is empty</p>
        <p className="mt-2 text-sm text-ink/55">Add something to your cart before checking out.</p>
        <Link href="/shop" className="btn-primary mt-5 inline-flex">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container-page">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Cart", path: "/cart" }, { name: "Checkout", path: "/checkout" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink">Checkout</h1>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-display text-lg text-ink">Delivery Details</h2>

            <Field label="Full Name" error={errors.fullName}>
              <input
                type="text"
                value={form.fullName}
                onChange={update("fullName")}
                placeholder="e.g. Ayesha Khan"
                className={`input ${errors.fullName ? "input-error" : ""}`}
              />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="03XX XXXXXXX"
                  className={`input ${errors.phone ? "input-error" : ""}`}
                />
              </Field>
              <Field label="Email (optional)" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@email.com"
                  className={`input ${errors.email ? "input-error" : ""}`}
                />
              </Field>
            </div>

            <Field label="City" error={errors.city}>
              <input
                type="text"
                value={form.city}
                onChange={update("city")}
                placeholder="e.g. Lahore"
                className={`input ${errors.city ? "input-error" : ""}`}
              />
            </Field>

            <Field label="Complete Address" error={errors.address}>
              <textarea
                value={form.address}
                onChange={update("address")}
                placeholder="House #, Street, Area, Landmark"
                rows={3}
                className={`input resize-none ${errors.address ? "input-error" : ""}`}
              />
            </Field>

            <Field label="Order Notes (optional)">
              <textarea
                value={form.notes}
                onChange={update("notes")}
                placeholder="Anything we should know about your delivery?"
                rows={2}
                className="input resize-none"
              />
            </Field>

            <div className="mt-2 rounded-xl border border-sage-500/20 bg-sage-100 p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-ink">
                <Banknote size={16} className="text-sage-600" /> Payment Method: Cash on Delivery
              </p>
              <p className="mt-1 text-xs text-ink/60">Pay in cash when your order is delivered to your doorstep. No advance payment needed.</p>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary mt-2 w-full py-3.5 text-base">
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Placing Order...
                </>
              ) : (
                `Place Order — ${formatPrice(total)}`
              )}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-xs text-ink/45">
              <span className="flex items-center gap-1"><ShieldCheck size={13} /> Secure ordering</span>
              <span className="flex items-center gap-1"><Truck size={13} /> Nationwide delivery</span>
            </div>
          </form>

          <div className="h-fit rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-display text-lg text-ink">Order Summary</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-linen-200">
                    {item.image && <Image src={item.image} alt={item.name} fill className="object-cover" />}
                  </div>
                  <div className="flex-1">
                    <p className="line-clamp-1 text-sm font-medium text-ink">{item.name}</p>
                    <p className="text-xs text-ink/50">Qty {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium text-ink">{formatPrice(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>
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
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink/80">{label}</span>
      {children}
      {error && <span className="text-xs text-sienna-600">{error}</span>}
    </label>
  );
}
