"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, Heart, ShoppingBag, Truck, Banknote, ShieldCheck, ChevronDown, Check } from "lucide-react";
import RatingStars from "./RatingStars";
import StickyBuyBar from "./StickyBuyBar";
import { formatPrice, calcDiscountPercent } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";


const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Orders are typically delivered within 3–5 business days, depending on your city.",
  },
  {
    q: "Can I pay on delivery?",
    a: "Yes — CasaNest offers Cash on Delivery on every order across Pakistan.",
  },
  {
    q: "What if I want to return the product?",
    a: "You can request a return within 3 days of delivery if the product is unused and in its original packaging. See our Returns & Exchange policy for details.",
  },
];

export default function ProductInfo({ product }) {
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const { addItem, openDrawer } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const router = useRouter();

  const discount = calcDiscountPercent(product.price, product.originalPrice);
  const wishlisted = isWishlisted(product.id);
  const outOfStock = product.stockStatus === "out_of_stock";

  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, qty);
    showToast({
      title: "✓ Added to your cart",
      description: `${product.name} is waiting for you in your cart. ❤️`,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
    openDrawer();
  };

  const handleBuyNow = () => {
    addItem(product, qty);
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col gap-4 pb-24 lg:pb-0">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-sage-600">
          {product.category.replace("-", " & ")}
        </p>
        <h1 className="mt-1 font-display text-2xl text-ink sm:text-3xl">{product.name}</h1>
      </div>

      <div className="flex items-center gap-3">
        <RatingStars rating={product.rating} showValue reviewCount={product.reviewCount} />
        <span
          className={`text-sm font-medium ${
            outOfStock ? "text-sienna-600" : product.stockStatus === "low_stock" ? "text-brass-500" : "text-sage-600"
          }`}
        >
          {outOfStock ? "Out of Stock" : product.stockStatus === "low_stock" ? "Only a few left" : "In Stock"}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-display text-3xl text-ink">{formatPrice(product.price)}</span>
        {product.originalPrice && (
          <span className="text-lg text-ink/40 line-through">{formatPrice(product.originalPrice)}</span>
        )}
        {discount > 0 && (
          <span className="rounded-full bg-sienna-50 px-2.5 py-1 text-xs font-medium text-sienna-600">
            Save {discount}%
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-ink/70">{product.description}</p>

      {product.features?.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-ink/75">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sienna-500" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="hidden items-center gap-3 lg:flex">
        <div className="flex items-center rounded-full border border-ink/15">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="flex h-11 w-11 items-center justify-center hover:text-sienna-600">
            <Minus size={15} />
          </button>
          <span className="w-10 text-center font-medium">{qty}</span>
          <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="flex h-11 w-11 items-center justify-center hover:text-sienna-600">
            <Plus size={15} />
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={outOfStock}
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
        <button onClick={handleBuyNow} disabled={outOfStock} className="btn-primary flex-1">
          Buy Now
        </button>
        <button
          onClick={() => {
            toggleWishlist(product);
            showToast(wishlisted ? "Removed from your wishlist" : "♡ Added to your wishlist", wishlisted ? "success" : "wishlist");
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 hover:border-sienna-300"
        >
          <Heart size={17} className={wishlisted ? "fill-sienna-500 text-sienna-500" : ""} />
        </button>
      </div>

      {/* Mobile quantity selector (buttons live in StickyBuyBar) */}
      <div className="flex items-center gap-3 lg:hidden">
        <div className="flex items-center rounded-full border border-ink/15">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="flex h-10 w-10 items-center justify-center hover:text-sienna-600">
            <Minus size={14} />
          </button>
          <span className="w-9 text-center font-medium">{qty}</span>
          <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="flex h-10 w-10 items-center justify-center hover:text-sienna-600">
            <Plus size={14} />
          </button>
        </div>
        <button
          onClick={() => {
            toggleWishlist(product);
            showToast(wishlisted ? "Removed from your wishlist" : "♡ Added to your wishlist", wishlisted ? "success" : "wishlist");
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15"
        >
          <Heart size={16} className={wishlisted ? "fill-sienna-500 text-sienna-500" : ""} />
        </button>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-2 rounded-2xl bg-linen-200 p-4 sm:grid-cols-3">
        <div className="flex items-center gap-2 text-sm text-ink/70">
          <Truck size={16} className="shrink-0 text-sage-600" /> Nationwide delivery, 3–5 days
        </div>
        <div className="flex items-center gap-2 text-sm text-ink/70">
          <Banknote size={16} className="shrink-0 text-sage-600" /> Cash on Delivery available
        </div>
        <div className="flex items-center gap-2 text-sm text-ink/70">
          <ShieldCheck size={16} className="shrink-0 text-sage-600" /> Quality checked before dispatch
        </div>
      </div>

      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="mt-4">
          <h2 className="font-display text-lg text-ink">Specifications</h2>
          <dl className="mt-2 divide-y divide-ink/10 rounded-xl border border-ink/10">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4 px-4 py-2.5 text-sm">
                <dt className="text-ink/50">{key}</dt>
                <dd className="text-right text-ink/80">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="mt-4">
        <h2 className="font-display text-lg text-ink">Frequently Asked Questions</h2>
        <div className="mt-2 divide-y divide-ink/10 rounded-xl border border-ink/10">
          {FAQS.map((faq, i) => (
            <div key={faq.q}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium text-ink"
                aria-expanded={openFaq === i}
              >
                {faq.q}
                <ChevronDown size={16} className={`shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && <p className="px-4 pb-3 text-sm text-ink/65">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>

      <StickyBuyBar product={product} quantity={qty} />
    </div>
  );
}

