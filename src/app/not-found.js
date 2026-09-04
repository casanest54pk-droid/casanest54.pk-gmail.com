import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="section flex flex-col items-center justify-center text-center">
      <p className="font-display text-7xl text-sienna-500">404</p>
      <h1 className="mt-4 font-display text-2xl text-ink sm:text-3xl">This page wandered off</h1>
      <p className="mt-2 max-w-sm text-sm text-ink/60">
        The page you're looking for doesn't exist or may have moved. Let's get you back to browsing.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="btn-primary">
          <Home size={16} /> Back to Home
        </Link>
        <Link href="/shop" className="btn-secondary">
          <Search size={16} /> Browse Products
        </Link>
      </div>
    </div>
  );
}
