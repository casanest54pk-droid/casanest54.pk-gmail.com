"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag, Check } from "lucide-react";
import RatingStars from "./RatingStars";
import { formatPrice, calcDiscountPercent } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";

export default function QuickView({ product, onClose }) {
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, openDrawer } = useCart();
  const { showToast } = useToast();
  const router = useRouter();
  const discount = calcDiscountPercent(product.price, product.originalPrice);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleAddToCart = () => {
    addItem(product, qty);
    showToast({
      title: "✓ Added to your cart",
      description: `${product.name} is waiting for you in your cart. ❤️`,
    });
    setJustAdded(true);
    setTimeout(() => {
      openDrawer();
      onClose();
    }, 350);
  };

  const handleBuyNow = () => {
    addItem(product, qty);
    onClose();
    router.push("/checkout");
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/40 sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view of ${product.name}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-pop grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-t-2xl bg-white sm:grid-cols-2 sm:rounded-2xl"
      >
        <div className="relative aspect-square bg-linen-200 sm:aspect-auto">
          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
        </div>

        <div className="relative flex flex-col gap-3 p-6">
          <button
            onClick={onClose}
            aria-label="Close quick view"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-linen-200 hover:bg-linen-200/80"
          >
            <X size={16} />
          </button>

          <p className="text-xs font-medium uppercase tracking-wide text-sage-600">
            {product.category.replace("-", " & ")}
          </p>
          <h2 className="pr-8 font-display text-2xl text-ink">{product.name}</h2>
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />

          <div className="flex items-center gap-2">
            <span className="font-display text-2xl text-ink">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-ink/40 line-through">{formatPrice(product.originalPrice)}</span>
            )}
            {discount > 0 && (
              <span className="rounded-full bg-sienna-50 px-2 py-0.5 text-xs font-medium text-sienna-600">
                Save {discount}%
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-ink/70">{product.shortDescription}</p>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex items-center rounded-full border border-ink/15">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="flex h-9 w-9 items-center justify-center hover:text-sienna-600"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="flex h-9 w-9 items-center justify-center hover:text-sienna-600"
              >
                <Plus size={14} />
              </button>
            </div>
            <span className="text-sm text-ink/50">
              {product.stockStatus === "in_stock" ? "In Stock" : product.stockStatus === "low_stock" ? "Low Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <button
              onClick={handleAddToCart}
              disabled={justAdded}
              className={`btn-secondary flex-1 transition-colors ${justAdded ? "border-sage-500 text-sage-600" : ""}`}
            >
              {justAdded ? (
                <>
                  <Check size={16} className="animate-check-pop" /> Added
                </>
              ) : (
                <>
                  <ShoppingBag size={16} /> Add to Cart
                </>
              )}
            </button>
            <button onClick={handleBuyNow} className="btn-primary flex-1">
              Buy Now
            </button>
          </div>

          <Link
            href={`/product/${product.slug}`}
            onClick={onClose}
            className="mt-1 text-center text-sm font-medium text-sienna-600 hover:underline"
          >
            View full details
          </Link>
        </div>
      </div>
    </div>
  );
}
