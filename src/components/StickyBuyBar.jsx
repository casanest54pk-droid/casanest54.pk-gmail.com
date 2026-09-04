"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

export default function StickyBuyBar({ product, quantity }) {
  const { addItem, openDrawer } = useCart();
  const { showToast } = useToast();
  const router = useRouter();
  const [justAdded, setJustAdded] = useState(false);

  const disabled = product.stockStatus === "out_of_stock";

  const handleAddToCart = () => {
    addItem(product, quantity);
    showToast({
      title: "✓ Added to your cart",
      description: `${product.name} is waiting for you in your cart. ❤️`,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
    openDrawer();
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    router.push("/checkout");
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-ink/10 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(38,34,32,0.18)] backdrop-blur lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex-1">
        <p className="font-display text-lg leading-none text-ink">{formatPrice(product.price)}</p>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={disabled}
        className={`btn-secondary flex-1 py-2.5 text-sm transition-colors ${
          justAdded ? "border-sage-500 text-sage-600" : ""
        }`}
      >
        {justAdded ? (
          <>
            <Check size={15} className="animate-check-pop" /> Added
          </>
        ) : (
          <>
            <ShoppingBag size={15} /> Add to Cart
          </>
        )}
      </button>
      <button onClick={handleBuyNow} disabled={disabled} className="btn-primary flex-1 py-2.5 text-sm">
        Buy Now
      </button>
    </div>
  );
}
