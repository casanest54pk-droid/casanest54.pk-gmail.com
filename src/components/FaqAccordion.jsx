"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ faqs }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
      {faqs.map((faq, i) => (
        <div key={faq.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display text-base text-ink">{faq.q}</span>
            <ChevronDown size={18} className={`shrink-0 text-ink/50 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="px-5 pb-4 text-sm leading-relaxed text-ink/65">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
