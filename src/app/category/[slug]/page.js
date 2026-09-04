import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PackageSearch } from "lucide-react";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return buildMetadata({});
  return buildMetadata({
    title: category.name,
    description: `Shop ${category.name} at CasaNest — ${category.description}`,
    path: `/category/${category.slug}`,
  });
}

export default function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: category.name, path: `/category/${category.slug}` },
  ];

  return (
    <div className="section">
      <div className="container-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }}
        />
        <Breadcrumbs items={crumbs} />
        <div className="mt-3">
          <h1 className="font-display text-3xl text-ink">{category.name}</h1>
          <p className="mt-1 max-w-lg text-sm text-ink/60">{category.description}</p>
        </div>

        <div className="mt-8">
          {products.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white py-20 text-center">
              <PackageSearch size={40} className="text-ink/20" />
              <p className="font-display text-lg text-ink">No products in this category yet</p>
              <p className="text-sm text-ink/55">Check back soon — new products are added regularly.</p>
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </div>
    </div>
  );
}
