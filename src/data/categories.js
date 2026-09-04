export const categories = [
  {
    slug: "kitchen",
    name: "Kitchen",
    description: "Smart tools that make cooking faster and cleaner.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "organization",
    name: "Home Organization",
    description: "Tidy up every drawer, shelf and corner.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "home-living",
    name: "Home & Living",
    description: "Everyday comfort pieces for a warmer home.",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "gadgets",
    name: "Gadgets",
    description: "Clever little devices your home didn't know it needed.",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "beauty-lifestyle",
    name: "Beauty & Lifestyle",
    description: "Self-care and everyday essentials.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "trending",
    name: "Trending",
    description: "What everyone's adding to cart this week.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  },
];

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug);
