import React from 'react'
import Link from 'next/link'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import ProductCard, { ProductData } from '@/components/ProductCard'
import ScrollReveal from '@/components/ScrollReveal'
import { Sparkles, ArrowLeft, Filter, SlidersHorizontal, MessageCircle } from 'lucide-react'

const categoryNamesMap: Record<string, string> = {
  'all': 'All Wholesale Jewellery',
  'earrings': 'All Earrings Collection',
  'silver-earrings': 'Silver Oxidised Earrings',
  'premium-earrings': 'Premium Gold & Kundan Earrings',
  'rajwadi': 'Rajwadi Heritage Collection',
  'ear-chain': 'Ear-Chain (Kanchain) Collection',
  'kundan-earrings': 'Kundan & Jadau Earrings',
  'anti-tarnish': 'Anti-Tarnish Daily Wear Collection',
  'studs': 'Studs & Tops',
  'bangles': 'Bangles & Kadas',
  'necklaces': 'Bridal & Choker Necklaces',
  'new-arrivals': 'New Arrivals (This Week)',
}

const productImagesMap: Record<string, string> = {
  'ER-001': 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
  'ER-4272': 'https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=800&auto=format&fit=crop',
  'ER-4655': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
  'ER-4800': 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop',
  'NK-1020': 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop',
  'ST-3012': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
  'BG-2045': 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop',
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const categoryTitle = categoryNamesMap[slug] || slug.replace(/-/g, ' ').toUpperCase()

  // Fetch all products
  let products: ProductData[] = []
  try {
    const { getPayload } = await import('payload')
    const config = (await import('@payload-config')).default
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'products',
      limit: 50,
    })
    if (res.docs) {
      products = res.docs.map((doc: any) => ({
        id: doc.id,
        name: doc.name,
        productCode: doc.productCode,
        slug: doc.slug,
        image: productImagesMap[doc.productCode] || 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
        availability: doc.availability,
        isFeatured: doc.isFeatured,
        isNewArrival: doc.isNewArrival,
        specifications: doc.specifications,
      }))
    }
  } catch (err) {
    console.error('Error fetching collection products:', err)
  }

  const filterCategories = [
    { slug: 'all', name: 'All Catalogue' },
    { slug: 'premium-earrings', name: 'Premium Earrings' },
    { slug: 'silver-earrings', name: 'Silver Earrings' },
    { slug: 'studs', name: 'Studs' },
    { slug: 'kundan-earrings', name: 'Kundan' },
    { slug: 'rajwadi', name: 'Rajwadi' },
    { slug: 'ear-chain', name: 'Ear-Chain' },
    { slug: 'anti-tarnish', name: 'Anti Tarnish' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-cream-border mb-6 sm:mb-8">
            <Link
              href="/"
              className="btn-tactile inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal/70 hover:text-maroon transition-colors"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <div className="text-xs text-charcoal/60 truncate max-w-[200px] sm:max-w-none">
              <span>Home</span> / <span className="text-maroon font-semibold">{categoryTitle}</span>
            </div>
          </div>

          {/* Collection Title Banner with ScrollReveal */}
          <ScrollReveal direction="up" distance={20} duration={650}>
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#9A7E2E] block mb-1">
                Jaipur Manufacturer Catalogue
              </span>
              <h1
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-[26px] sm:text-[34px] md:text-[42px] font-normal text-[#121212] tracking-[0.5px] leading-tight"
              >
                {categoryTitle}
              </h1>

              {/* Gold Accent Divider Bar matching Krishaz */}
              <div className="w-[60px] sm:w-[80px] h-[2px] bg-[#C9A84C] mx-auto my-2.5 sm:my-3.5"></div>

              <p
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
                className="text-[13px] sm:text-[14px] text-[#2C2C2C] font-normal"
              >
                Low MOV ₹3,000/- &bull; Unique Product Codes &bull; Instant WhatsApp Bulk Inquiries
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Category Filters Horizontal Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 scrollbar-none touch-pan-x">
            {filterCategories.map((cat) => {
              const isActive = cat.slug === slug || (slug === 'all' && cat.slug === 'all')
              return (
                <Link
                  key={cat.slug}
                  href={`/collections/${cat.slug}`}
                  className={`btn-tactile px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap border ${
                    isActive
                      ? 'bg-[#195799] text-white border-[#195799] shadow-sm'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-[#C9A84C] hover:text-[#195799]'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {cat.name}
                </Link>
              )
            })}
          </div>

          {/* Products Grid: 2 columns on mobile with staggered ScrollReveal per card */}
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {products.map((p, idx) => (
                <ScrollReveal
                  key={p.id}
                  direction="up"
                  distance={22}
                  duration={550}
                  delay={Math.min(idx * 50, 300)}
                >
                  <ProductCard product={p} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gold/30 p-8 shadow-sm">
              <p className="text-charcoal/70 text-sm">No products found in this category yet.</p>
              <Link
                href="/admin"
                className="btn-tactile mt-4 inline-block px-4 py-2 bg-[#195799] text-white font-bold text-xs rounded-lg"
              >
                + Add Products in CMS Admin
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
