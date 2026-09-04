"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative bg-ink text-linen">
      <div className="container-page flex items-center justify-center py-2.5 text-center text-xs sm:text-sm">
        <p>{siteConfig.announcement}</p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="absolute right-4 opacity-60 hover:opacity-100"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
