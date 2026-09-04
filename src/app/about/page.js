import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name} — a Pakistani home & lifestyle store bringing useful, well-made everyday products to your door.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-page max-w-4xl">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
        <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">About CasaNest</h1>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-linen-200">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1000&auto=format&fit=crop"
              alt="A styled home kitchen with CasaNest products"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 text-ink/70">
            <p>
              CasaNest started with a simple idea: shopping for your home shouldn't mean sifting through
              hundreds of low-quality, forgettable products. We hand-pick items that are genuinely useful —
              kitchen tools that save you time, organizers that make small spaces feel bigger, and gadgets
              that solve real everyday annoyances.
            </p>
            <p>
              We're based in Pakistan and built CasaNest for Pakistani homes — which is why every order comes
              with Cash on Delivery and nationwide shipping, so you can shop with confidence even if it's your
              first time ordering online.
            </p>
            <p>
              This is a growing catalog, and we're always adding new finds. If there's something you wish we
              carried, we'd genuinely love to hear about it.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-6 text-center font-display text-2xl text-ink">Why shop with us</h2>
          <TrustBadges />
        </div>
      </div>
    </div>
  );
}
