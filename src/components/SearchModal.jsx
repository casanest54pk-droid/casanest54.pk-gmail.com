"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, Clock } from "lucide-react";
import { searchProducts } from "@/data/products";
import { formatPrice } from "@/lib/format";

const RECENT_KEY = "casanest_recent_searches_v1";

export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (raw) setRecent(JSON.parse(raw));
    } catch {}
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const results = searchProducts(query).slice(0, 8);

  const saveSearch = (term) => {
    if (!term.trim()) return;
    const next = [term, ...recent.filter((r) => r !== term)].slice(0, 5);
    setRecent(next);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  };

  return (
    <div className="fixed inset-0 z-[95] bg-ink/40" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search products">
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto mt-0 flex max-h-screen w-full max-w-2xl flex-col bg-white sm:mt-20 sm:rounded-2xl sm:shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-ink/10 px-5 py-4">
          <Search size={20} className="text-ink/40" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveSearch(query)}
            placeholder="Search for kitchen tools, organizers, gadgets..."
            className="flex-1 bg-transparent text-base outline-none placeholder:text-ink/40"
          />
          <button onClick={onClose} aria-label="Close search" className="rounded-full p-1.5 hover:bg-linen-200">
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-5">
          {!query && recent.length > 0 && (
            <div className="mb-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink/40">Recent Searches</p>
              <div className="flex flex-wrap gap-2">
                {recent.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="flex items-center gap-1.5 rounded-full bg-linen-200 px-3 py-1.5 text-sm text-ink/70 hover:bg-linen-200/70"
                  >
                    <Clock size={12} /> {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="flex flex-col items-center gap-2 py-10 text-center">
              <Search size={32} className="text-ink/20" />
              <p className="font-display text-lg">No results for "{query}"</p>
              <p className="text-sm text-ink/50">Try a different keyword or browse our categories.</p>
              <Link href="/shop" onClick={onClose} className="btn-secondary mt-2">
                Browse All Products
              </Link>
            </div>
          )}

          {results.length > 0 && (
            <ul className="flex flex-col divide-y divide-ink/5">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/product/${product.slug}`}
                    onClick={() => {
                      saveSearch(query);
                      onClose();
                    }}
                    className="flex items-center gap-3 py-3 hover:opacity-80"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-linen-200">
                      <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="line-clamp-1 text-sm font-medium text-ink">{product.name}</p>
                      <p className="text-xs capitalize text-ink/50">{product.category.replace("-", " & ")}</p>
                    </div>
                    <span className="text-sm font-medium text-ink">{formatPrice(product.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
