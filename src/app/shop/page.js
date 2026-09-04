"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X, PackageSearch } from "lucide-react";
import ProductGrid from "@/components/ProductGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PRODUCTS } from "@/data/products";
import { categories } from "@/data/categories";

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "bestselling", label: "Best Selling" },
  { value: "rating", label: "Rating" },
  { value: "discount", label: "Discount" },
];

const PAGE_SIZE = 8;

function ShopContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter");

  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState(initialFilter === "bestsellers" ? "bestselling" : "newest");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [filterOpen, setFilterOpen] = useState(false);
  const [newOnly, setNewOnly] = useState(initialFilter === "new");

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (activeCategory !== "all") list = list.filter((p) => p.category === activeCategory);
    if (newOnly) list = list.filter((p) => p.newArrival);
    list = list.filter((p) => p.price <= maxPrice);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "bestselling":
        list.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        list.sort((a, b) => {
          const dA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
          const dB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
          return dB - dA;
        });
        break;
      default:
        break; // newest: keep catalog order (last added first would need dates; fine as-is)
    }
    return list;
  }, [activeCategory, sort, maxPrice, newOnly]);

  const visible = filtered.slice(0, visibleCount);

  const FilterPanel = (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 font-display text-sm text-ink">Category</p>
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-lg px-3 py-2 text-left text-sm ${
              activeCategory === "all" ? "bg-sienna-50 text-sienna-600" : "text-ink/70 hover:bg-linen-200"
            }`}
          >
            All Products
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCategory(c.slug)}
              className={`rounded-lg px-3 py-2 text-left text-sm ${
                activeCategory === c.slug ? "bg-sienna-50 text-sienna-600" : "text-ink/70 hover:bg-linen-200"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 font-display text-sm text-ink">Max Price: Rs. {maxPrice.toLocaleString()}</p>
        <input
          type="range"
          min={200}
          max={5000}
          step={100}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-sienna-500"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-ink/70">
        <input
          type="checkbox"
          checked={newOnly}
          onChange={(e) => setNewOnly(e.target.checked)}
          className="h-4 w-4 accent-sienna-500"
        />
        New Arrivals only
      </label>
    </div>
  );

  return (
    <div className="section">
      <div className="container-page">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Shop", path: "/shop" }]} />
        <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl text-ink">Shop All Products</h1>
            <p className="mt-1 text-sm text-ink/55">{filtered.length} products</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(true)}
              className="btn-secondary lg:hidden"
            >
              <SlidersHorizontal size={15} /> Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">{FilterPanel}</aside>

          <div>
            {visible.length === 0 ? (
              <div className="flex flex-col items-center gap-3 rounded-2xl bg-white py-20 text-center">
                <PackageSearch size={40} className="text-ink/20" />
                <p className="font-display text-lg text-ink">No products match your filters</p>
                <p className="text-sm text-ink/55">Try widening your price range or choosing a different category.</p>
              </div>
            ) : (
              <>
                <ProductGrid products={visible} />
                {visibleCount < filtered.length && (
                  <div className="mt-8 flex justify-center">
                    <button onClick={() => setVisibleCount((c) => c + PAGE_SIZE)} className="btn-secondary">
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {filterOpen && (
        <div className="fixed inset-0 z-[95] bg-ink/40 lg:hidden" onClick={() => setFilterOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="flex h-full w-80 flex-col bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg">Filters</span>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters" className="rounded-full p-1.5 hover:bg-linen-200">
                <X size={20} />
              </button>
            </div>
            {FilterPanel}
            <button onClick={() => setFilterOpen(false)} className="btn-primary mt-6">
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-page py-20 text-center text-ink/50">Loading products...</div>}>
      <ShopContent />
    </Suspense>
  );
}
