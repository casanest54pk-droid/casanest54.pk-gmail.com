import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedProducts from "@/components/RelatedProducts";
import RecentlyViewed from "@/components/RecentlyViewed";
import ReviewCard from "@/components/ReviewCard";
import TrackProductView from "@/components/TrackProductView";
import { DEMO_REVIEWS } from "@/data/reviews";
import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return buildMetadata({});
  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/product/${product.slug}`,
    image: product.images?.[0],
  });
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: product.name, path: `/product/${product.slug}` },
  ];

  // Demo reviews shown on every product page for now — replace with
  // per-product reviews once you're collecting real ones.
  const productReviews = DEMO_REVIEWS.slice(0, 3);

  return (
    <div>
      <TrackProductView productId={product.id} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
      />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <div className="container-page grid grid-cols-1 gap-10 py-6 lg:grid-cols-2 lg:py-10">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      <section className="section pt-0">
        <div className="container-page">
          <h2 className="mb-6 font-display text-2xl text-ink sm:text-3xl">Customer Reviews</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {productReviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>

      <RelatedProducts products={related} />
      <RecentlyViewed excludeId={product.id} />
    </div>
  );
}
