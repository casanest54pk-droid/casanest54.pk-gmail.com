"use client";

import { useRecentlyViewed } from "@/context/RecentlyViewedContext";
import { PRODUCTS } from "@/data/products";
import ProductGrid from "./ProductGrid";

export default function RecentlyViewed({ excludeId }) {
  const { ids, hydrated } = useRecentlyViewed();

  if (!hydrated) return null;

  const products = ids
    .filter((id) => id !== excludeId)
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 4);

  if (products.length === 0) return null;

  return (
    <section className="section pt-0">
      <div className="container-page">
        <h2 className="mb-6 font-display text-2xl text-ink sm:text-3xl">Recently Viewed</h2>
        <ProductGrid products={products} columns="grid-cols-2 lg:grid-cols-4" />
      </div>
    </section>
  );
}
