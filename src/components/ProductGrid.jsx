"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import QuickView from "./QuickView";

export default function ProductGrid({ products, columns = "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4" }) {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  if (!products || products.length === 0) return null;

  return (
    <>
      <div className={`grid ${columns} gap-4 sm:gap-6`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
        ))}
      </div>
      {quickViewProduct && (
        <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </>
  );
}
