import Link from "next/link";
import { ArrowRight, Handshake, Wallet, MousePointerClick, Users } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import CategoryCard from "@/components/CategoryCard";
import ProductGrid from "@/components/ProductGrid";
import ReviewCard from "@/components/ReviewCard";
import Newsletter from "@/components/Newsletter";
import Reveal from "@/components/Reveal";
import { categories } from "@/data/categories";
import { getBestSellers, getTrendingProducts } from "@/data/products";
import { DEMO_REVIEWS } from "@/data/reviews";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/" });

const WHY_POINTS = [
  { icon: Handshake, title: "Carefully Selected Products", desc: "Every item is tested and reviewed before it earns a spot in our catalog." },
  { icon: Wallet, title: "Affordable Prices", desc: "Everyday home essentials, priced fairly — no unnecessary markups." },
  { icon: MousePointerClick, title: "Convenient Ordering", desc: "Browse, order and track — all from your phone, in a few taps." },
  { icon: Users, title: "Customer-First Experience", desc: "Friendly customer support and Cash on Delivery on every order." },
];

export default function HomePage() {
  const bestSellers = getBestSellers();
  const trending = getTrendingProducts();

  return (
    <>
      <Hero />

      <section className="section pt-8">
        <div className="container-page">
          <Reveal>
            <TrustBadges />
          </Reveal>
        </div>
      </section>

      <section className="section pt-0" id="categories">
        <div className="container-page">
          <Reveal>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="eyebrow">Browse</p>
                <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">Shop by Category</h2>
              </div>
              <Link href="/shop" className="hidden items-center gap-1 text-sm font-medium text-sienna-600 hover:underline sm:flex">
                View all <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((c) => (
                <CategoryCard key={c.slug} category={c} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="eyebrow">Loved by customers</p>
                <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">Best Sellers</h2>
              </div>
              <Link href="/shop?filter=bestsellers" className="hidden items-center gap-1 text-sm font-medium text-sienna-600 hover:underline sm:flex">
                View all <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      <section className="section pt-0 bg-ink">
        <div className="container-page pt-14">
          <Reveal>
            <div className="mb-6">
              <p className="text-sm font-medium text-brass-500">Right now</p>
              <h2 className="mt-1 font-display text-2xl text-linen sm:text-3xl">Trending Now</h2>
              <p className="mt-1 text-sm text-linen/60">Products everyone's adding to their home.</p>
            </div>
          </Reveal>
          <ProductGrid products={trending} />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="eyebrow">Why CasaNest</p>
              <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">A store built around trust</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_POINTS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="flex h-full flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-premium">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sienna-50 text-sienna-600">
                    <Icon size={20} />
                  </div>
                  <p className="font-display text-base text-ink">{title}</p>
                  <p className="text-sm text-ink/60">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="eyebrow">Real feedback</p>
              <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">What our customers say</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DEMO_REVIEWS.map((r, i) => (
              <Reveal key={r.id} delay={i * 60}>
                <ReviewCard review={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="mb-6 text-center">
              <p className="eyebrow">@casanest45</p>
              <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">Follow CasaNest</h2>
              <p className="mt-1 text-sm text-ink/60">Discover new finds, product inspiration and everyday home ideas.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {[
              "1583847268964-b28dc8f51f92",
              "1556909114-f6e7ad7d3136",
              "1600585152220-90363fe7e115",
              "1522335789203-aabd1fc54bc9",
              "1550009158-9ebf69173e03",
              "1584100936595-c0654b55a2e6",
            ].map((id) => (
              <a
                key={id}
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl bg-linen-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://images.unsplash.com/photo-${id}?q=80&w=400&auto=format&fit=crop`}
                  alt="CasaNest lifestyle inspiration"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

