import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shop All Products",
  description: "Browse CasaNest's full range of kitchen, home organization, gadgets and lifestyle products — nationwide delivery with Cash on Delivery.",
  path: "/shop",
});

export default function ShopLayout({ children }) {
  return children;
}
