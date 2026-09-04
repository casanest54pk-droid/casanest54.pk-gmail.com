"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-linen-200">
        <button
          onClick={() => setLightbox(true)}
          className="group relative block h-full w-full"
          aria-label="Expand image"
        >
          <Image
            src={images[active]}
            alt={`${name} — image ${active + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft">
            <ZoomIn size={16} />
          </span>
        </button>
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                active === i ? "border-sienna-500" : "border-transparent"
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged product image"
        >
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>
          <div className="relative h-[80vh] w-full max-w-3xl">
            <Image src={images[active]} alt={name} fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
