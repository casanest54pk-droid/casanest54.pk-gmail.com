# CasaNest — Home & Lifestyle E-Commerce (Frontend-Only)

A complete, production-quality Next.js storefront for a Pakistani home/kitchen/lifestyle
dropshipping brand. **No backend, no database.** Cart and wishlist live in `localStorage`;
orders and newsletter signups are sent straight from the browser to your inbox via
[Web3Forms](https://web3forms.com).

---

## 1. What's included

- Home, Shop (search/filter/sort/pagination), Category, Product Detail, Cart, Checkout,
  Order Success, Wishlist, About, Contact, Shipping, Returns, Privacy, Terms, FAQ, 404, error page
- Client-side cart & wishlist (persisted in `localStorage`), recently viewed, quick view modal,
  cart drawer, instant search with recent searches, toast notifications
- Mobile-first design with a sticky bottom "Add to Cart / Buy Now" bar on product pages
- SEO: per-page metadata, Open Graph/Twitter tags, canonical URLs, Product/Breadcrumb JSON-LD,
  dynamic `robots.txt` and `sitemap.xml` built from your real product catalog
- Central configuration for brand info, delivery fee, and currency
- 14 demo products across 6 categories, ready to replace with your own

## 2. Run locally

```bash
npm install
cp .env.example .env.local   # then fill in your Web3Forms key (see step 6)
npm run dev
```

Visit http://localhost:3000

To build for production locally:

```bash
npm run build
npm run start
```

> Note: `next/font` fetches Fraunces & Inter from Google Fonts **at build time**, so an
> internet connection is required when running `npm run build`. This is normal and will work
> automatically on Vercel.

## 3. Deploy to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No changes needed to build settings.
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = your Web3Forms access key
   - `NEXT_PUBLIC_SITE_URL` = your production domain, e.g. `https://www.casanest.pk`
5. Click **Deploy**. That's it — no servers, databases or extra infrastructure to configure.

## 4. How to add products

Edit **`src/data/products.js`** only. Copy an existing product object, change the values,
and add it to the `PRODUCTS` array. A minimal example is documented at the top of that file:

```js
{
  id: "p-021",
  slug: "multi-vegetable-cutter",       // becomes the URL /product/multi-vegetable-cutter
  name: "Multi Vegetable Cutter",
  category: "kitchen",                   // must match a slug in src/data/categories.js
  price: 749,
  originalPrice: 1200,                   // omit if not on sale
  images: ["https://images.unsplash.com/photo-XXXX?q=80&w=1200"],
  shortDescription: "One-line hook shown on product cards.",
  description: "Full paragraph description for the product page.",
  rating: 4.6,
  reviewCount: 128,
  stockStatus: "in_stock",               // "in_stock" | "low_stock" | "out_of_stock"
  badge: "Best Seller",                  // optional
  features: ["Dishwasher safe", "5 interchangeable blades"],
  specifications: { "Material": "ABS + Stainless Steel", "Weight": "450g" },
  tags: ["kitchen", "cutter", "vegetable", "gadget"],
  featured: true,
  bestSeller: true,
  trending: false,
  newArrival: false,
}
```

No rebuild step beyond a normal deploy is needed — the site is statically generated from this
file at build time. To add a new category, add an entry to `src/data/categories.js` too.

## 5. How orders are submitted (no backend)

There is no server or database. When a customer checks out, the order is sent directly from
their browser to **Web3Forms**, a free service designed for exactly this — receiving form
submissions from static sites and emailing them to you.

Setup (2 minutes):

1. Go to https://web3forms.com and create a free Access Key with your business email.
2. Add it to `.env.local` (locally) and to your Vercel project's environment variables:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Done — orders, the newsletter form, and the contact form all use this same key.

This key is safe to expose in frontend code (it only lets people submit forms to your inbox —
it can't read, delete or modify anything). **Never** put a secret database password or private
API key in frontend code.

If you'd rather use Google Sheets, Formspree, EmailJS or another service instead, the entire
integration lives in one function: `submitOrder()` in **`src/lib/orderSubmit.js`**. Swap the
body of that function and nothing else in the app needs to change.

Every order also gets a client-generated reference number like `CASA-8K3F92`
(see `generateOrderRef()` in `src/lib/format.js`) shown on the confirmation page. This is a
display reference generated in the browser, not a guaranteed-unique ID from a database — if you
need guaranteed uniqueness, generate the ID in whichever order-processing service you connect.

## 6. Central configuration

Edit **`src/config/site.js`** to change, in one place:

- Brand name, tagline, description
- Contact email, phone, WhatsApp number, address, hours
- Social links (Facebook, Instagram, TikTok)
- **Delivery fee** and free-delivery threshold
- Currency symbol
- Announcement bar text
- Production site URL (used for SEO + sitemap.xml)

## 7. What you need to replace before launch

- [ ] `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` / Vercel env vars
- [ ] `NEXT_PUBLIC_SITE_URL` — your real domain
- [ ] All contact info, social links and WhatsApp number in `src/config/site.js`
- [ ] Demo products in `src/data/products.js` — replace with your real catalog and photos
- [ ] Demo reviews in `src/data/reviews.js` — replace with real customer reviews
- [ ] Placeholder legal text on `/privacy`, `/terms`, `/shipping`, `/returns` — have these
      reviewed against your actual business practices
- [ ] `public/og-image.jpg` — add a real Open Graph share image (referenced in `src/lib/seo.js`)
- [ ] Instagram section images on the homepage (currently stock lifestyle photos)

## 8. Project structure

```
src/
  app/                 Next.js App Router pages (one folder per route)
  components/          Reusable UI components (Navbar, ProductCard, CartDrawer, etc.)
  context/             Cart, Wishlist, Recently Viewed, Toast — all localStorage-backed
  data/                products.js, categories.js, reviews.js — YOUR content lives here
  lib/                 format.js, orderSubmit.js, seo.js — small focused helpers
  config/              site.js — single source of truth for brand info
```

## 9. Final verification

✅ This project does not contain a custom backend or database. There is no Node/Express
server, no MongoDB/PostgreSQL/MySQL, no Firebase/Supabase database, and no server-side order
processing. It is a static, frontend-only Next.js site suitable for deployment on Vercel as-is,
with orders and forms delivered via the external Web3Forms service.
