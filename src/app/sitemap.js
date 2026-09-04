import { siteConfig } from "@/config/site";
import { PRODUCTS } from "@/data/products";
import { categories } from "@/data/categories";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/shipping",
    "/returns",
    "/privacy",
    "/terms",
    "/faq",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${siteConfig.url}/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${siteConfig.url}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
