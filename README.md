# Shyambaba Wholesale Jewellery

Premium Wholesale Brass Jewellery Storefront and CMS, crafted in Next.js 16 (App Router), Tailwind CSS, and Payload CMS 3.x.

Inspired by [Krishaz Wholesale](https://krishazwholesale.com/) with luxury Shopify-grade interaction polish, smooth motion curves (`440ms cubic-bezier(0.22, 1, 0.36, 1)`), WhatsApp B2B inquiry routing with unique product codes, and zero public pricing.

---

## 🚀 Features

- **Storefront Architecture**: Next.js 16 App Router with React Server Components (RSC) and Turbopack.
- **Embedded Headless CMS**: Payload CMS 3.92 integrated at `/admin`.
- **Shopify-Standard Motion**:
  - Calm 440ms quintic ease-out card hover lift (`translateY(-3.5px)`) and gradual ambient shadow.
  - Portrait 4:5 category cards matching Krishaz with spacious 52–60px category name boxes and gold divider lines (`border-t-2 border-[#C9A84C]`).
  - Synchronized image scale (`scale(1.028)` at 480ms).
  - Tactile button press feedback (`active:scale-[0.985]`).
  - Sticky scroll-aware header with dynamic backdrop blur.
  - Accessible `@media (prefers-reduced-motion: reduce)` fallbacks.
- **Wholesale Inquiries**: Direct WhatsApp inquiry links pre-populated with unique product codes (e.g., `ER-4272`, `ER-001`).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.4.3
- **CMS**: Payload CMS 3.92.0
- **Database**: SQLite (file-based)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Runtime**: Node.js >= 18.20.2

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory (refer to `.env.example`):

```bash
DATABASE_URI=file:./shyambaba.db
PAYLOAD_SECRET=your-secure-payload-secret-key
NEXT_PUBLIC_SERVER_URL=https://your-domain.vercel.app
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit `http://localhost:3000` to view the storefront, or `http://localhost:3000/admin` to access the Payload CMS dashboard.

---

## 🚢 Deploying to Vercel

1. Import this repository into [Vercel](https://vercel.com).
2. Configure the environment variables in Vercel project settings:
   - `PAYLOAD_SECRET` = (generate a random 32+ character string)
   - `NEXT_PUBLIC_SERVER_URL` = (your Vercel deployment URL, e.g., `https://shyambabawholesale.vercel.app`)
   - `DATABASE_URI` = `file:./shyambaba.db`
3. Click **Deploy**.
