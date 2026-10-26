import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import {
  MessageCircle,
  Video,
  ShieldCheck,
  Truck,
  Sparkles,
  Tag,
  CheckCircle2,
  ArrowLeft,
  Share2
} from 'lucide-react'

const productImagesMap: Record<string, string> = {
  'ER-001': 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
  'ER-4272': 'https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=800&auto=format&fit=crop',
  'ER-4655': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
  'ER-4800': 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop',
  'NK-1020': 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop',
  'ST-3012': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
  'BG-2045': 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop',
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let product: any = null
  try {
    const { getPayload } = await import('payload')
    const config = (await import('@payload-config')).default
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'products',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })
    if (res.docs && res.docs.length > 0) {
      product = res.docs[0]
    }
  } catch (err) {
    console.error('Error fetching product detail:', err)
  }

  // Fallback if not found in db query
  if (!product) {
    // Generate placeholder product info
    product = {
      name: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      productCode: 'ER-4272',
      slug,
      availability: 'in_stock',
      specifications: [
        { label: 'Metal Base', value: 'High Grade Virgin Brass' },
        { label: 'Plating', value: '22K Micro Gold Plating with Anti-Tarnish Finish' },
        { label: 'Stone Type', value: 'Kundan & Natural Shell Pearls' },
        { label: 'Origin', value: 'Jaipur, Rajasthan, India' },
        { label: 'Minimum Order', value: '12 Pairs / Pack' },
      ],
    }
  }

  const imageUrl =
    productImagesMap[product.productCode] ||
    'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop'

  const whatsappMessage = encodeURIComponent(
    `Hi Shyambaba Wholesale Jewellery,\n\nI want to place a wholesale inquiry for:\n• Product Code: ${product.productCode}\n• Product Name: ${product.name}\n\nPlease share wholesale pricing slab, minimum order quantities, and live inventory availability.`
  )
  const whatsappUrl = `https://wa.me/919680865791?text=${whatsappMessage}`

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between pb-6 border-b border-cream-border mb-8 text-xs text-charcoal/70">
            <Link
              href="/"
              className="btn-tactile inline-flex items-center gap-1.5 font-semibold text-charcoal/70 hover:text-maroon transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Catalogue</span>
            </Link>
            <div>
              <span>Home</span> / <span>Products</span> /{' '}
              <span className="text-maroon font-bold font-mono">{product.productCode}</span>
            </div>
          </div>

          {/* Product Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE3D8] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            {/* Left: Product Images */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F7F4EE] border border-[#EAE3D8] shadow-inner group">
                <div
                  className="w-full h-full bg-cover bg-center card-img-zoom"
                  style={{ backgroundImage: `url('${imageUrl}')` }}
                ></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="px-3 py-1 rounded bg-[#195799] text-white text-xs font-bold uppercase tracking-wider shadow">
                    Jaipur Factory Direct
                  </span>
                  <span className="px-3 py-1 rounded bg-green-700 text-white text-xs font-semibold shadow">
                    ● In Stock (24h Dispatch)
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-white font-mono text-xs font-bold shadow-sm">
                  Code: <span className="text-[#C9A84C]">{product.productCode}</span>
                </div>
              </div>

              {/* Notice */}
              <p className="text-[11px] text-center text-charcoal/60">
                🔍 High-resolution photography under studio daylight. Actual finish matches 100%.
              </p>
            </div>

            {/* Right: Product Wholesale Information */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Product Code Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#C9A84C]/50 text-[#195799] font-mono text-sm font-bold">
                  <Tag className="w-4 h-4 text-[#C9A84C]" />
                  <span>UNIQUE CODE: {product.productCode}</span>
                </div>

                {/* Title */}
                <h1
                  style={{ fontFamily: 'Georgia, serif' }}
                  className="text-3xl sm:text-[36px] font-normal text-[#195799] leading-tight"
                >
                  {product.name}
                </h1>

                {/* Wholesale Pricing Policy Notice (NO PRICE SHOWN) */}
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE3D8] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-[#195799] tracking-wider">
                      Wholesale Pricing Slab:
                    </span>
                    <span className="text-xs font-bold text-[#9A7E2E]">
                      Locked for B2B Retailers
                    </span>
                  </div>
                  <p className="text-xs text-[#2C2C2C] leading-relaxed">
                    To protect our reseller and boutique partners, prices are not publicly displayed. 
                    Quote <strong>Code: {product.productCode}</strong> on WhatsApp for instant volume pricing.
                  </p>
                </div>

                {/* Quick WhatsApp Inquiry Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl shadow-md hover:shadow-lg text-sm uppercase tracking-wider"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Inquire Price on WhatsApp ({product.productCode})</span>
                  </a>

                  <a
                    href={`https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20see%20Product%20${product.productCode}%20live%20on%20Video%20Call.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF8F5] text-[#195799] border border-[#195799]/40 font-bold rounded-xl text-xs shadow-sm"
                  >
                    <Video className="w-4 h-4 text-[#195799]" />
                    <span>Book Video Call to View This Piece Live</span>
                  </a>
                </div>

                {/* Specifications Table */}
                <div className="pt-4 border-t border-[#EAE3D8]">
                  <h3
                    style={{ fontFamily: 'Georgia, serif' }}
                    className="text-lg font-normal text-[#195799] mb-3"
                  >
                    Product Specifications
                  </h3>
                  <div className="divide-y divide-[#EAE3D8] rounded-xl border border-[#EAE3D8] overflow-hidden text-xs">
                    {(product.specifications || [
                      { label: 'Base Metal', value: 'Virgin Brass (Nickel & Lead Safe)' },
                      { label: 'Plating', value: '22K Micro Gold Plating + Anti-Tarnish Seal' },
                      { label: 'Stones / Pearls', value: 'Handset Kundan & Shell Pearls' },
                      { label: 'Origin', value: 'Jaipur Factory, India' },
                      { label: 'Minimum Order Qty', value: '12 Pairs / Box' },
                      { label: 'Packaging', value: 'Individual Poly Zip + Master 5-Ply Carton' },
                    ]).map((spec: any, idx: number) => (
                      <div key={idx} className="flex p-3 bg-white even:bg-[#FAF8F5]/60">
                        <span className="w-1/3 font-semibold text-[#2C2C2C]/70">{spec.label}</span>
                        <span className="w-2/3 font-bold text-[#195799]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Factory Commitments */}
                <div className="grid grid-cols-2 gap-3 pt-3 text-[11px] text-[#2C2C2C]">
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded-lg border border-[#EAE3D8]">
                    <Truck className="w-4 h-4 text-[#9A7E2E] flex-shrink-0" />
                    <span>24h Dispatch with Tracking</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded-lg border border-[#EAE3D8]">
                    <ShieldCheck className="w-4 h-4 text-[#9A7E2E] flex-shrink-0" />
                    <span>Zero Breakage Export Packaging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
