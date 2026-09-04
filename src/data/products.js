// ============================================================================
// CasaNest â€” Product Catalog
// ============================================================================
// This is the ONLY file you need to edit to add, remove or update products.
// No database, no backend â€” just add a new object to the PRODUCTS array below.
//
// MINIMAL EXAMPLE â€” copy this, change the values, paste it into the array:
//
// {
//   id: "p-021",
//   slug: "multi-vegetable-cutter",      // used in the URL /product/[slug]
//   name: "Multi Vegetable Cutter",
//   category: "kitchen",                  // must match a slug in data/categories.js
//   price: 749,
//   originalPrice: 1200,                  // omit if not on sale
//   images: ["https://images.unsplash.com/photo-XXXX?q=80&w=1200"],
//   shortDescription: "Slice, dice and julienne in seconds â€” no more knife work.",
//   description: "Full product description goes here...",
//   rating: 4.6,
//   reviewCount: 128,
//   stockStatus: "in_stock",              // "in_stock" | "low_stock" | "out_of_stock"
//   badge: "Best Seller",                 // optional, any short label
//   features: ["Dishwasher safe", "5 interchangeable blades"],
//   specifications: { "Material": "ABS + Stainless Steel", "Weight": "450g" },
//   tags: ["kitchen", "cutter", "vegetable", "gadget"],
//   featured: true,
//   bestSeller: true,
//   trending: false,
//   newArrival: false,
// }
// ============================================================================

export const PRODUCTS = [

  {
    id: "p-015",
    slug: "leakproof-tumbler-water-cup-600ml",
    name: "Leakproof Tumbler Water Cup with Handle & Straw - 600ml",
    category: "beauty-lifestyle",
    price: 2699,
    originalPrice: 3499,
    images: [
      "https://res.cloudinary.com/vagppcre/image/upload/v1788503967/ChatGPT_Image_Sep_3_2026_11_15_06_PM.png",
    ],
    shortDescription: "Stay refreshed anywhere with this stylish 600ml leakproof tumbler with a convenient handle and straw.",
    description:
      "Enjoy your favourite drinks on the go with this stylish 600ml leakproof tumbler. Designed with a comfortable handle and reusable straw, it is perfect for travel, fitness, outdoor activities, office use and everyday hydration.",
    rating: 4.8,
    reviewCount: 86,
    stockStatus: "in_stock",
    badge: "Hot Deal",
    features: [
      "600ml convenient capacity",
      "Leakproof design",
      "Comfortable carry handle",
      "Reusable drinking straw included",
      "Perfect for travel, fitness and outdoor activities",
    ],
    specifications: {
      Capacity: "600ml",
      Type: "Tumbler water cup",
      Features: "Handle and straw",
      Color: "Multicolour",
    },
    tags: ["tumbler", "water cup", "hydration", "travel", "fitness"],
    featured: true,
    bestSeller: false,
    trending: true,
    newArrival: true,
  },
  {
    id: "p-016",
    slug: "multi-vegetable-fruit-cutter-5-blade",
    name: "Multi Vegetable & Fruit Cutter 5 Blade",
    category: "kitchen",
    price: 862,
    originalPrice: 1299,
    images: [
      "https://res.cloudinary.com/vagppcre/image/upload/v1788504908/ChatGPT_Image_Sep_4_2026_11_54_41_AM.png",
    ],
    shortDescription:
      "Make everyday food preparation faster and easier with 5 versatile cutting blades.",
    description:
      "Prepare vegetables and fruits quickly and conveniently with this practical 5-blade cutter. Its versatile blade options help with everyday slicing and cutting tasks, making it a useful addition to your kitchen. Compact, convenient and easy to use for daily food preparation.",
    rating: 4.7,
    reviewCount: 124,
    stockStatus: "in_stock",
    badge: "Best Seller",
    features: [
      "5 versatile cutting blades",
      "Suitable for vegetables and fruits",
      "Helps make food preparation easier",
      "Compact and convenient design",
      "Useful for everyday kitchen tasks",
    ],
    specifications: {
      Type: "Vegetable & fruit cutter",
      "Blades included": "5",
      Variant: "Standard",
      Use: "Vegetables and fruits",
    },
    tags: [
      "kitchen",
      "vegetable cutter",
      "fruit cutter",
      "5 blade",
      "food preparation",
    ],
    featured: true,
    bestSeller: true,
    trending: true,
    newArrival: true,
  },
  {
    id: "p-017",
    slug: "foldable-usb-neck-hanging-fan-5-speed",
    name: "Foldable USB Neck Hanging Fan - 5 Speed",
    category: "gadgets",
    price: 1199,
    originalPrice: 1699,
    images: [
      "https://res.cloudinary.com/vagppcre/image/upload/v1788505385/ChatGPT_Image_Sep_4_2026_12_02_43_PM.png",
    ],
    shortDescription:
      "Stay cool anywhere with a foldable 5-speed USB fan featuring an LED display and phone stand.",
    description:
      "Stay comfortable wherever you go with this versatile foldable USB fan. Use it as a convenient neck hanging fan or place it on your desk when working, studying or relaxing. With 5 adjustable speed levels, an LED display and a foldable design, it is perfect for home, office, travel and outdoor activities.",
    rating: 4.7,
    reviewCount: 98,
    stockStatus: "in_stock",
    badge: "Hot Deal",
    features: [
      "5 adjustable speed levels",
      "Foldable and portable design",
      "LED display screen",
      "Can be used as a neck fan or desktop fan",
      "Built-in phone stand",
      "USB rechargeable",
      "Great for office, travel and outdoor use",
    ],
    specifications: {
      Type: "Foldable USB fan",
      "Speed levels": "5",
      Display: "LED",
      Design: "Neck hanging / Desktop",
      Charging: "USB rechargeable",
      Color: "Multi-Color",
    },
    tags: [
      "usb fan",
      "neck fan",
      "rechargeable fan",
      "portable fan",
      "desktop fan",
      "summer gadget",
    ],
    featured: true,
    bestSeller: false,
    trending: true,
    newArrival: true,
  },
{
  id: "p-018",
  slug: "stainless-steel-thermal-coffee-travel-mug-380ml",
  name: "Stainless Steel Thermal Coffee Travel Mug - 380ml",
  category: "kitchen",
  price: 1599,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788514699/ChatGPT_Image_Sep_4_2026_02_37_46_PM.png",
  ],
  shortDescription:
    "Keep your coffee and tea warm on the go with this stylish 380ml stainless steel thermal travel mug.",
  description:
    "Enjoy your favourite hot or cold drinks wherever you go with this stylish stainless steel thermal travel mug. Its double-layer construction helps improve insulation, while the sealed lid, safety lock and anti-slip base make it convenient for travel, office use and everyday routines.",
  rating: 4.8,
  reviewCount: 112,
  stockStatus: "in_stock",
  badge: "Popular",
  features: [
    "380ml convenient capacity",
    "Double-layer stainless steel construction",
    "Improved heat insulation",
    "Strong sealing lid",
    "Safety lock design",
    "Anti-slip rubber base",
    "Suitable for coffee, tea and other drinks",
    "Ideal for travel, office and daily use",
  ],
  specifications: {
    Capacity: "380ml",
    Material: "Stainless steel",
    Design: "Double-layer thermal",
    Lid: "Sealed with safety lock",
    Base: "Anti-slip rubber pad",
    Color: "Multicolor",
  },
  tags: [
    "thermal mug",
    "coffee mug",
    "travel mug",
    "stainless steel mug",
    "tea cup",
    "vacuum flask",
    "380ml mug",
  ],
  featured: true,
  bestSeller: false,
  trending: true,
  newArrival: true,
},
{
  id: "p-019",
  slug: "portable-thermal-insulated-lunch-bag",
  name: "Portable Thermal Insulated Lunch Bag",
  category: "kitchen",
  price: 999,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788514826/ChatGPT_Image_Sep_4_2026_02_40_05_PM.png",
  ],
  shortDescription:
    "Keep your meals fresh and drinks cool with this convenient portable thermal insulated lunch bag.",
  description:
    "Keep your meals fresh and your drinks cool with this quality portable thermal insulated lunch bag. Designed for convenience and everyday use, it is perfect for school, office, picnics and travel. Its thermal insulation helps maintain food temperature for longer, while the compact yet spacious design provides room for lunch boxes, bottles and snacks.",
  rating: 4.8,
  reviewCount: 94,
  stockStatus: "in_stock",
  badge: "Popular",
  features: [
    "Thermal insulation helps keep food warm or cool",
    "Compact and spacious design",
    "Suitable for lunch boxes, bottles and snacks",
    "Reusable and convenient for everyday use",
    "Ideal for school, office, picnics and travel",
    "Lightweight and portable",
  ],
  specifications: {
    Type: "Thermal insulated lunch bag",
    Material: "Insulated fabric",
    Color: "Multicolor",
    Use: "Food and drink storage",
    SuitableFor: "School, office, travel and picnics",
  },
  tags: [
    "lunch bag",
    "thermal lunch bag",
    "insulated lunch bag",
    "lunch box bag",
    "food bag",
    "portable lunch bag",
  ],
  featured: true,
  bestSeller: false,
  trending: true,
  newArrival: true,
},
{
  id: "p-020",
  slug: "500ml-portable-usb-electric-juicer-blender",
  name: "500ml Portable USB Electric Juicer Blender",
  category: "kitchen",
  price: 1699,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788515147/ChatGPT_Image_Sep_4_2026_02_45_25_PM.png",
  ],
  shortDescription:
    "Make fresh juices and smoothies anywhere with this compact 500ml USB rechargeable portable juicer.",
  description:
    "Enjoy fresh drinks wherever you go with this convenient 500ml portable USB electric juicer. Its compact design makes it easy to carry and use at home, in the office, while travelling or outdoors. Perfect for preparing fresh fruit juices and blended drinks whenever you want a refreshing drink.",
  rating: 4.7,
  reviewCount: 87,
  stockStatus: "in_stock",
  badge: "Popular",
  features: [
    "500ml convenient capacity",
    "USB rechargeable design",
    "Portable and compact",
    "Suitable for fresh fruit juices and blended drinks",
    "Easy to carry for travel and outdoor use",
    "Useful for home and office",
    "Includes convenient drinking straw",
  ],
  specifications: {
    Capacity: "500ml",
    Type: "Portable electric juicer",
    Charging: "USB rechargeable",
    Material: "Stainless steel",
    Color: "Multicolor",
    Use: "Juices and blended drinks",
  },
  tags: [
    "portable juicer",
    "usb juicer",
    "electric juicer",
    "juice blender",
    "500ml juicer",
    "portable blender",
    "kitchen gadget",
  ],
  featured: true,
  bestSeller: false,
  trending: true,
  newArrival: true,
},
{
  id: "p-021",
  slug: "led-study-lamp-pen-holder-phone-stand",
  name: "LED Study Lamp with Pen Holder & Phone Stand",
  category: "home-office",
  price: 2299,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788515391/ChatGPT_Image_Sep_4_2026_02_49_32_PM.png",
  ],
  shortDescription:
    "Upgrade your desk with a modern touch-dimmable LED lamp featuring a pen holder and phone stand.",
  description:
    "Upgrade your study or workspace with this modern multifunctional LED desk lamp. Featuring touch controls, adjustable brightness, three light modes, a flexible neck, built-in pen holder and convenient phone stand, it combines comfortable lighting with smart desk organization. Perfect for students, office desks, reading and bedside use.",
  rating: 4.8,
  reviewCount: 136,
  stockStatus: "in_stock",
  badge: "Best Seller",
  features: [
    "Touch control system",
    "Adjustable brightness from 5% to 100%",
    "3 light modes: Natural, White and Warm",
    "Built-in pen holder",
    "Built-in mobile phone stand",
    "Soft flicker-free eye protection light",
    "Flexible adjustable neck",
    "Modern space-saving design",
    "USB powered",
  ],
  specifications: {
    Height: "Approx. 37.5 cm",
    "Base width": "10.5 cm",
    "Lamp head width": "15 cm",
    "Light modes": "3",
    "Brightness": "5% - 100%",
    Control: "Touch",
    Power: "USB",
  },
  tags: [
    "led study lamp",
    "desk lamp",
    "study light",
    "table lamp",
    "phone stand lamp",
    "pen holder lamp",
    "touch lamp",
    "office desk lamp",
  ],
  featured: true,
  bestSeller: true,
  trending: true,
  newArrival: true,
},
{
  id: "p-022",
  slug: "osaka-multi-purpose-electric-meat-grinder-700ml",
  name: "Osaka Multi-Purpose Electric Meat Grinder - 700ml",
  category: "kitchen",
  price: 2899,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788515674/ChatGPT_Image_Sep_4_2026_02_54_16_PM.png",
  ],
  shortDescription:
    "Powerful 700ml multi-purpose electric food processor for meat, fish, coffee, ice, seeds and more.",
  description:
    "Make everyday food preparation faster and easier with the Osaka Multi-Purpose Electric Meat Grinder. With a convenient 700ml capacity and powerful motor, it is designed for grinding meat, fish, coffee beans, seeds and herbs, while also helping with ice crushing, egg whisking and baby food preparation. The stainless steel blades, durable ABS body and non-slip base make it a practical addition to any kitchen.",
  rating: 4.8,
  reviewCount: 118,
  stockStatus: "in_stock",
  badge: "Best Seller",
  features: [
    "700ml convenient capacity",
    "Multi-purpose food processing",
    "Suitable for meat, fish and coffee beans",
    "Can crush ice and grind seeds and herbs",
    "Useful for baby food preparation",
    "Suitable for whisking eggs and kneading dough",
    "High-performance 1500W motor",
    "Stainless steel blades",
    "Durable ABS body",
    "Non-slip base",
    "Overload protection",
    "Easy press-down operation",
  ],
  specifications: {
    Capacity: "700ml",
    Power: "1500W",
    Motor: "Copper motor",
    Body: "ABS",
    Blades: "Stainless steel",
    Operation: "Press-down",
    Safety: "Non-slip base and overload protection",
    Use: "Meat, fish, coffee, ice, seeds, herbs and more",
  },
  tags: [
    "meat grinder",
    "electric chopper",
    "food processor",
    "700ml grinder",
    "kitchen grinder",
    "meat chopper",
    "electric blender",
    "Osaka grinder",
  ],
  featured: true,
  bestSeller: true,
  trending: true,
  newArrival: true,
},
{
  id: "p-023",
  slug: "steel-insulated-travel-mug-handle-straw-lid",
  name: "Steel Insulated Travel Mug with Handle, Straw & Lid",
  category: "kitchen",
  price: 2199,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788515951/ChatGPT_Image_Sep_4_2026_02_58_43_PM.png",
  ],
  shortDescription:
    "Enjoy hot or cold drinks on the go with this double-wall insulated stainless steel mug with handle and straw.",
  description:
    "Enjoy your favourite coffee, juice, milk or other drinks wherever you go with this stylish steel insulated travel mug. Its double-wall vacuum insulation helps keep drinks warm or cold for longer, while the comfortable handle, lid and stainless steel straw make it convenient for everyday use, travel and office routines.",
  rating: 4.8,
  reviewCount: 105,
  stockStatus: "in_stock",
  badge: "Popular",
  features: [
    "Double-wall vacuum insulation",
    "Helps keep drinks hot or cold for longer",
    "18/8 food-grade stainless steel",
    "Comfortable carry handle",
    "Stainless steel drinking straw",
    "Secure lid design",
    "Strong and durable construction",
    "Suitable for coffee, milk, juice and other drinks",
    "Convenient for travel and everyday use",
  ],
  specifications: {
    Material: "18/8 food-grade stainless steel",
    Insulation: "Double-wall vacuum",
    Features: "Handle, lid and stainless steel straw",
    Use: "Hot and cold beverages",
    Care: "Hand wash recommended",
    Color: "Multicolor",
  },
  tags: [
    "insulated mug",
    "travel mug",
    "stainless steel mug",
    "coffee mug",
    "thermal cup",
    "mug with straw",
    "mug with handle",
    "vacuum insulated mug",
  ],
  featured: true,
  bestSeller: false,
  trending: true,
  newArrival: true,
},
{
  id: "p-024",
  slug: "wooden-design-automatic-self-stirring-coffee-mug",
  name: "Wooden Design Automatic Self-Stirring Coffee Mug - 400ml",
  category: "kitchen",
  price: 1499,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788516113/ChatGPT_Image_Sep_4_2026_03_01_32_PM.png",
  ],
  shortDescription:
    "Enjoy effortless mixing with this stylish 400ml automatic self-stirring coffee mug.",
  description:
    "Make your daily drinks easier and more enjoyable with this stylish automatic self-stirring coffee mug. Made with food-grade high borosilicate glass, it can automatically mix coffee, tea, hot chocolate, milk, protein shakes and other light drinks with a simple press. Suitable for both hot and cool beverages.",
  rating: 4.7,
  reviewCount: 91,
  stockStatus: "in_stock",
  badge: "Trending",
  features: [
    "Automatic self-stirring function",
    "Simple one-click operation",
    "400ml convenient capacity",
    "Food-grade high borosilicate glass",
    "Suitable for hot and cool drinks",
    "Ideal for coffee, tea and hot chocolate",
    "Useful for milk and protein shakes",
    "Stylish wooden design",
    "Perfect for home, office and everyday use",
  ],
  specifications: {
    Capacity: "400ml / 13oz",
    Material: "High borosilicate glass",
    Type: "Automatic self-stirring mug",
    Operation: "One-click / long press",
    Design: "Wooden style",
    Use: "Hot and cool beverages",
  },
  tags: [
    "self stirring mug",
    "automatic coffee mug",
    "electric mixing mug",
    "coffee mug",
    "stirring cup",
    "400ml mug",
    "glass coffee mug",
    "kitchen gadget",
  ],
  featured: true,
  bestSeller: false,
  trending: true,
  newArrival: true,
},
{
  id: "p-025",
  slug: "mini-portable-handheld-sewing-machine",
  name: "Mini Portable Handy Handheld Sewing Machine",
  category: "home-office",
  price: 1399,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788516557/ChatGPT_Image_Sep_4_2026_03_08_46_PM.png",
  ],
  shortDescription:
    "A compact handheld sewing machine for quick stitching, repairs and everyday fabric projects.",
  description:
    "Handle quick clothing repairs and simple sewing projects with this compact portable handheld sewing machine. Its lightweight design makes it convenient for home use, travel and small fabric projects. It is suitable for beginners, kids under adult supervision and anyone who wants a handy sewing tool for quick fixes.",
  rating: 4.6,
  reviewCount: 78,
  stockStatus: "in_stock",
  badge: "Popular",
  features: [
    "Compact handheld design",
    "Portable and lightweight",
    "Suitable for quick clothing repairs",
    "Useful for fabric stitching projects",
    "Convenient for home and travel use",
    "Beginner-friendly design",
    "Battery-powered operation",
    "Suitable for simple everyday stitching tasks",
  ],
  specifications: {
    Type: "Handheld single-thread sewing machine",
    Color: "White",
    Use: "Clothing and fabric stitching",
    Design: "Mini portable handheld",
    Power: "Battery operated",
  },
  tags: [
    "mini sewing machine",
    "handheld sewing machine",
    "portable sewing machine",
    "sewing machine",
    "clothing repair",
    "fabric stitching",
    "home sewing tool",
    "travel sewing kit",
  ],
  featured: true,
  bestSeller: false,
  trending: true,
  newArrival: true,
},
{
  id: "p-026",
  slug: "5-layer-stainless-steel-shoe-rack",
  name: "5 Layer Stainless Steel Shoe Rack",
  category: "home-office",
  price: 2999,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788516725/ChatGPT_Image_Sep_4_2026_03_11_41_PM.png",
  ],
  shortDescription:
    "Organize your footwear neatly with this sturdy 5-layer stainless steel shoe rack.",
  description:
    "Keep your home neat and organized with this practical 5-layer shoe rack. Built with sturdy stainless steel pipes and durable plastic connectors, it provides convenient storage for shoes, sneakers, slippers and other footwear. Its compact space-saving design is ideal for bedrooms, hallways and entryways, while the open structure allows airflow around your footwear.",
  rating: 4.8,
  reviewCount: 103,
  stockStatus: "in_stock",
  badge: "Popular",
  features: [
    "5-layer multi-level storage",
    "Strong stainless steel pipes",
    "Durable plastic connectors",
    "Lightweight yet sturdy design",
    "Space-saving structure",
    "Easy to assemble",
    "Easy to maintain",
    "Open design promotes airflow",
    "Suitable for bedrooms, hallways and entryways",
  ],
  specifications: {
    Layers: "5",
    Frame: "Stainless steel",
    Connectors: "Durable plastic",
    Type: "Multi-layer shoe rack",
    Assembly: "Easy assembly",
    Use: "Shoes, sneakers, slippers and footwear",
  },
  tags: [
    "shoe rack",
    "5 layer shoe rack",
    "stainless steel shoe rack",
    "shoe organizer",
    "shoe storage",
    "home organizer",
    "space saving rack",
    "footwear organizer",
  ],
  featured: true,
  bestSeller: false,
  trending: true,
  newArrival: true,
},
{
  id: "p-027",
  slug: "rabbit-desk-organizer-makeup-stationery-storage",
  name: "Rabbit Desk Organizer with Drawers",
  category: "home-office",
  price: 1199,
  images: [
    "https://res.cloudinary.com/vagppcre/image/upload/v1788517891/ChatGPT_Image_Sep_4_2026_03_31_12_PM.png",
  ],
  shortDescription:
    "Keep your desk neat and stylish with this cute multi-compartment rabbit organizer with storage drawers.",
  description:
    "Keep your desk, dressing table or vanity neat and organized with this cute Rabbit Desk Organizer. Its multiple top compartments and smooth sliding drawers provide convenient storage for makeup, brushes, stationery, accessories and other small daily essentials. The compact design fits easily on office desks, study tables and dressing tables.",
  rating: 4.8,
  reviewCount: 97,
  stockStatus: "in_stock",
  badge: "Trending",
  features: [
    "Multiple top storage compartments",
    "Smooth sliding storage drawers",
    "Multipurpose organizer design",
    "Suitable for makeup and brushes",
    "Useful for stationery and accessories",
    "Compact and space-saving",
    "Cute rabbit-inspired design",
    "Durable ABS + PS construction",
    "BPA-free material",
    "Ideal for home, office and vanity use",
  ],
  specifications: {
    Material: "ABS + PS",
    Safety: "BPA-free",
    Type: "Desk organizer with drawers",
    Design: "Rabbit",
    Storage: "Top compartments and drawers",
    Use: "Makeup, stationery, accessories and small items",
  },
  tags: [
    "desk organizer",
    "makeup organizer",
    "stationery organizer",
    "rabbit organizer",
    "storage box",
    "drawer organizer",
    "vanity organizer",
    "desk storage",
  ],
  featured: true,
  bestSeller: false,
  trending: true,
  newArrival: true,
}
];

// ---------------------------------------------------------------------------
// Helpers â€” used across the site, no need to edit below this line.
// ---------------------------------------------------------------------------

export const getProductBySlug = (slug) =>
  PRODUCTS.find((p) => p.slug === slug);

export const getProductsByCategory = (categorySlug) =>
  PRODUCTS.filter((p) => p.category === categorySlug);

export const getFeaturedProducts = () => PRODUCTS.filter((p) => p.featured);
export const getBestSellers = () => PRODUCTS.filter((p) => p.bestSeller);
export const getTrendingProducts = () => PRODUCTS.filter((p) => p.trending);
export const getNewArrivals = () => PRODUCTS.filter((p) => p.newArrival);

export const getRelatedProducts = (product, limit = 4) =>
  PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, limit);

export const searchProducts = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter((p) =>
    [p.name, p.category, p.shortDescription, ...(p.tags || [])]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
};


















