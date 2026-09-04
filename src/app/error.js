"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({ reset }) {
  return (
    <div className="section flex flex-col items-center justify-center text-center">
      <AlertTriangle size={40} className="text-sienna-500" />
      <h1 className="mt-4 font-display text-2xl text-ink sm:text-3xl">Something went wrong</h1>
      <p className="mt-2 max-w-sm text-sm text-ink/60">
        We hit an unexpected error. Please try again, or head back to the homepage.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button onClick={() => reset()} className="btn-primary">
          <RotateCcw size={16} /> Try Again
        </button>
        <Link href="/" className="btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
