"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, Eye, ShoppingBag, Check } from "lucide-react";
import RatingStars from "./RatingStars";
import { formatPrice, calcDiscountPercent } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";

export default function ProductCard({ product, onQuickView }) {
  const { addItem, openDrawer } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [heartPop, setHeartPop] = useState(false);

  const discount = calcDiscountPercent(product.price, product.originalPrice);
  const wishlisted = isWishlisted(product.id);
  const outOfStock = product.stockStatus === "out_of_stock";

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (outOfStock || justAdded) return;
    addItem(product, 1);
    showToast({
      title: "✓ Added to your cart",
      description: `${product.name} is waiting for you in your cart. ❤️`,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
    openDrawer();
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
    setHeartPop(true);
    setTimeout(() => setHeartPop(false), 500);
    showToast(
      wishlisted ? "Removed from your wishlist" : "♡ Added to your wishlist",
      wishlisted ? "success" : "wishlist"
    );
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
      <Link href={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-linen-200">
        {!imgLoaded && <div className="img-shimmer absolute inset-0" />}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
        />

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="rounded-full bg-ink/90 px-2.5 py-1 text-[11px] font-medium tracking-wide text-linen backdrop-blur-sm">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-sienna-500 px-2.5 py-1 text-[11px] font-medium text-white">
              -{discount}%
            </span>
          )}
          {product.stockStatus === "low_stock" && (
            <span className="rounded-full bg-brass-500 px-2.5 py-1 text-[11px] font-medium text-white">
              Low Stock
            </span>
          )}
        </div>

        <button
          onClick={handleWishlist}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft transition-transform hover:scale-110"
        >
          <Heart
            size={16}
            className={`${wishlisted ? "fill-sienna-500 text-sienna-500" : ""} ${
              heartPop ? "animate-heart-pop" : ""
            }`}
          />
        </button>

        {onQuickView && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
            className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-1.5 rounded-full bg-ink/90 py-2 text-xs font-medium text-linen opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <Eye size={14} /> Quick View
          </button>
        )}

        {outOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[1px]">
            <span className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-linen">Out of Stock</span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <Link href={`/category/${product.category}`} className="text-xs font-medium uppercase tracking-wide text-sage-600 hover:underline">
          {product.category.replace("-", " & ")}
        </Link>
        <Link href={`/product/${product.slug}`} className="line-clamp-2 font-display text-base leading-snug text-ink hover:text-sienna-600">
          {product.name}
        </Link>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} size={13} />

        <div className="mt-1 flex items-center gap-2">
          <span className="font-display text-lg text-ink">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-ink/40 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={outOfStock}
          className={`btn-primary mt-2 w-full py-2.5 text-sm transition-colors ${
            justAdded ? "bg-sage-500 hover:bg-sage-500" : ""
          }`}
        >
          {justAdded ? (
            <>
              <Check size={15} className="animate-check-pop" /> Added
            </>
          ) : (
            <>
              <ShoppingBag size={15} />
              {outOfStock ? "Out of Stock" : "Add to Cart"}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
