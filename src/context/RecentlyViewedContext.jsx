"use client";

import { createContext, useContext, useEffect, useState } from "react";

const RecentlyViewedContext = createContext(null);
const STORAGE_KEY = "casanest_recently_viewed_v1";
const MAX_ITEMS = 8;

export function RecentlyViewedProvider({ children }) {
  const [ids, setIds] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setIds(JSON.parse(raw));
    } catch (e) {
      console.warn("Failed to read recently viewed from storage", e);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, hydrated]);

  const trackView = (productId) => {
    setIds((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, MAX_ITEMS);
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ ids, trackView }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const ctx = useContext(RecentlyViewedContext);
  if (!ctx) throw new Error("useRecentlyViewed must be used within RecentlyViewedProvider");
  return ctx;
}
