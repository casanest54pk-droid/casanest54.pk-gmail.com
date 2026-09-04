"use client";

import { useEffect } from "react";
import { useRecentlyViewed } from "@/context/RecentlyViewedContext";

export default function TrackProductView({ productId }) {
  const { trackView } = useRecentlyViewed();
  useEffect(() => {
    trackView(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
  return null;
}
