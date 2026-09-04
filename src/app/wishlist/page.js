"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { formatPrice } from "@/lib/format";
import { PRODUCTS } from "@/data/products";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function WishlistPage() {
  const { items, removeFromWishlist, hydrated } = useWishlist();
  const { addItem, openDrawer } = useCart();
  const { showToast } = useToast();

  if (!hydrated) {
    return <div className="container-page section text-center text-ink/50">Loading wishlist...</div>;
  }

  const moveToCart = (item) => {
    const product = PRODUCTS.find((p) => p.id === item.id) || item;
    addItem(product, 1);
    removeFromWishlist(item.id);
    showToast(`${item.name} moved to cart`);
    openDrawer();
  };

  return (
    <div className="section">
      <div className="container-page">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Wishlist", path: "/wishlist" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink">Your Wishlist</h1>

        {items.length === 0 ? (
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-white py-20 text-center">
            <Heart size={44} className="text-ink/20" />
            <p className="font-display text-xl text-ink">Your wishlist is empty</p>
            <p className="text-sm text-ink/55">Save products you love and find them here anytime.</p>
            <Link href="/shop" className="btn-primary mt-2">
              Browse Products
            </Link>
          </div>
        ) : (
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-card">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-linen-200">
                  {item.image && <Image src={item.image} alt={item.name} fill className="object-cover" />}
                </div>
                <div className="flex flex-1 flex-col">
                  <Link href={`/product/${item.slug}`} className="line-clamp-2 text-sm font-medium text-ink hover:text-sienna-600">
                    {item.name}
                  </Link>
                  <span className="mt-1 text-sm text-ink/60">{formatPrice(item.price)}</span>
                  <div className="mt-auto flex items-center gap-2 pt-2">
                    <button onClick={() => moveToCart(item)} className="btn-secondary flex-1 py-1.5 text-xs">
                      <ShoppingBag size={13} /> Move to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      aria-label={`Remove ${item.name} from wishlist`}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-ink/40 hover:bg-linen-200 hover:text-sienna-600"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
