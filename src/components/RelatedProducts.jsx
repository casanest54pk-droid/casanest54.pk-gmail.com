import ProductGrid from "./ProductGrid";

export default function RelatedProducts({ products, title = "You May Also Like" }) {
  if (!products || products.length === 0) return null;
  return (
    <section className="section pt-0">
      <div className="container-page">
        <h2 className="mb-6 font-display text-2xl text-ink sm:text-3xl">{title}</h2>
        <ProductGrid products={products} columns="grid-cols-2 lg:grid-cols-4" />
      </div>
    </section>
  );
}
