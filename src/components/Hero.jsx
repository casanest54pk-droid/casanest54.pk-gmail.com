import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Banknote, ShieldCheck } from "lucide-react";

const MINI_TRUST = [
  { icon: Truck, label: "Nationwide delivery" },
  { icon: Banknote, label: "Cash on Delivery" },
  { icon: ShieldCheck, label: "Secure ordering" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linen">
      {/* Soft decorative glows — purely visual, no layout impact */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sienna-100 opacity-60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-sage-100 opacity-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up order-2 lg:order-1">
          <p className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-sienna-50 px-3 py-1">
            Home &amp; Lifestyle, Delivered
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
            Beautiful finds for every corner of your home
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65 sm:text-lg">
            Discover smart, stylish and useful products designed to make everyday life easier —
            picked for Pakistani homes, delivered to your door.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/shop" className="btn-primary px-7 py-3.5 text-base">
              Shop Now <ArrowRight size={17} />
            </Link>
            <Link href="/shop#categories" className="btn-secondary px-7 py-3.5 text-base">
              Explore Collection
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-6 text-sm text-ink/60">
            <div>
              <p className="font-display text-2xl text-ink">10,000+</p>
              <p>Orders delivered</p>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <p className="font-display text-2xl text-ink">4.7 / 5</p>
              <p>Average rating</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/10 pt-6">
            {MINI_TRUST.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-ink/55 sm:text-sm">
                <Icon size={15} className="text-sage-600" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div
          className="animate-fade-up relative order-1 lg:order-2"
          style={{ animationDelay: "0.12s" }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-linen-200 shadow-premium sm:max-w-lg">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
              alt="A warm, organized Pakistani home living space styled with CasaNest products"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
          </div>
          <div className="absolute -left-3 bottom-8 hidden animate-fade-up rounded-2xl bg-white p-4 shadow-card sm:block" style={{ animationDelay: "0.3s" }}>
            <p className="font-display text-sm">🚚 Delivered in 3–5 days nationwide</p>
          </div>
          <div className="absolute -right-3 top-8 hidden animate-fade-up rounded-2xl bg-white p-3.5 shadow-card sm:block" style={{ animationDelay: "0.42s" }}>
            <p className="flex items-center gap-1.5 font-display text-sm">
              <Banknote size={15} className="text-sage-600" /> Cash on Delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
