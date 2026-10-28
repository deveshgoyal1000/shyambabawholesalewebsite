import React from 'react'
import { Render } from '@measured/puck/rsc'
import { puckConfig } from '@/puck.config'
import { list } from '@vercel/blob'
import { readFile } from 'fs/promises'
import path from 'path'

export const dynamic = 'force-dynamic'
export const revalidate = 0
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import ShopByCategories from '@/components/ShopByCategories'
import GallerySection from '@/components/GallerySection'
import InternationalWholesale from '@/components/InternationalWholesale'
import ManufacturerComparison from '@/components/ManufacturerComparison'
import FactoryStory from '@/components/FactoryStory'
import ManufacturingProcess from '@/components/ManufacturingProcess'
import VideoShoppingCTA from '@/components/VideoShoppingCTA'
import Testimonials from '@/components/Testimonials'
import FAQSection from '@/components/FAQSection'
import WholesaleLeadCTA from '@/components/WholesaleLeadCTA'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import { ProductData } from '@/components/ProductCard'

// High-res jewellery photography for authentic representation
const productImagesMap: Record<string, string> = {
  'ER-001': 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
  'ER-4272': 'https://images.unsplash.com/photo-1611591475870-0f2d80d21051?q=80&w=800&auto=format&fit=crop',
  'ER-4655': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
  'ER-4800': 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop',
  'NK-1020': 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop',
  'ST-3012': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
  'BG-2045': 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop',
}

async function getProducts(): Promise<ProductData[]> {
  try {
    const { getPayload } = await import('payload')
    const config = (await import('@payload-config')).default
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'products',
      limit: 20,
    })

    if (res.docs && res.docs.length > 0) {
      return res.docs.map((doc: any) => ({
        id: doc.id,
        name: doc.name,
        productCode: doc.productCode,
        slug: doc.slug,
        image: productImagesMap[doc.productCode] || 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
        availability: doc.availability,
        isFeatured: doc.isFeatured ?? true,
        isNewArrival: doc.isNewArrival ?? true,
        specifications: doc.specifications,
      }))
    }
  } catch (err) {
    console.error('Error fetching products from Payload:', err)
  }

  // Fallback products matching seeded database
  return [
    {
      id: 1,
      name: 'Mayurika Peacock Golden Jhumki Earrings',
      productCode: 'ER-4272',
      slug: 'mayurika-peacock-golden-jhumki-earrings',
      image: productImagesMap['ER-4272'],
      isFeatured: true,
      isNewArrival: true,
    },
    {
      id: 2,
      name: 'Reetu Royal Silver Oxidised Dangler Earrings',
      productCode: 'ER-4655',
      slug: 'reetu-royal-silver-oxidised-dangler-earrings',
      image: productImagesMap['ER-4655'],
      isFeatured: true,
      isNewArrival: true,
    },
    {
      id: 3,
      name: 'Kishori Heritage Gold Plated Ear-Chain Set',
      productCode: 'ER-4800',
      slug: 'kishori-heritage-gold-plated-ear-chain-set',
      image: productImagesMap['ER-4800'],
      isFeatured: true,
      isNewArrival: true,
    },
    {
      id: 4,
      name: 'Padmavati Rajwadi Kundan Meenakari Choker Set',
      productCode: 'NK-1020',
      slug: 'padmavati-rajwadi-kundan-meenakari-choker-set',
      image: productImagesMap['NK-1020'],
      isFeatured: true,
      isNewArrival: false,
    },
    {
      id: 5,
      name: 'Virasat Anti-Tarnish Daily Wear Studs (Assorted)',
      productCode: 'ST-3012',
      slug: 'virasat-anti-tarnish-daily-wear-studs',
      image: productImagesMap['ST-3012'],
      isFeatured: false,
      isNewArrival: true,
    },
    {
      id: 6,
      name: 'Meera Openable Temple Bangle Kada Pair',
      productCode: 'BG-2045',
      slug: 'meera-openable-temple-bangle-kada-pair',
      image: productImagesMap['BG-2045'],
      isFeatured: true,
      isNewArrival: false,
    },
    {
      id: 7,
      name: 'Royal Heritage Antique Gold Jhumka Earrings',
      productCode: 'ER-001',
      slug: 'royal-heritage-antique-gold-jhumka-earrings',
      image: productImagesMap['ER-001'],
      isFeatured: true,
      isNewArrival: true,
    },
  ]
}

async function getPuckData() {
  // 1. Try Vercel Blob (Cloud persistence for Vercel production)
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { blobs } = await list({ prefix: 'home-puck.json' })
      if (blobs.length > 0) {
        const res = await fetch(`${blobs[0].url}?t=${Date.now()}`, { cache: 'no-store' })
        if (res.ok) {
          const json = await res.json()
          if (json && json.content && json.content.length > 0) {
            return json
          }
        }
      }
    } catch (blobErr) {
      console.warn('Error reading from Vercel Blob:', blobErr)
    }
  }

  // 2. Try local file (Local dev)
  try {
    const dataFilePath = path.join(process.cwd(), 'src', 'data', 'home-puck.json')
    const raw = await readFile(dataFilePath, 'utf-8')
    const json = JSON.parse(raw)
    if (json && json.content && json.content.length > 0) {
      return json
    }
  } catch {
    // Return null to use default fallback layout
  }
  return null
}

export default async function HomePage() {
  const puckData = await getPuckData()

  if (puckData) {
    return (
      <div className="min-h-screen flex flex-col bg-cream text-charcoal">
        <main className="flex-1">
          <Render config={puckConfig} data={puckData} />
        </main>
        <FloatingActionButtons />
      </div>
    )
  }

  const products = await getProducts()

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header & Main Nav */}
      <Header />

      {/* Main Content Area matching krishazwholesale */}
      <main className="flex-1">
        {/* 3. Hero Banner Section */}
        <HeroBanner />

        {/* 4. Shop By Categories Grid + "View Full Catalog" button */}
        <ShopByCategories />

        {/* 5. Explore Gallery (The Art Of Adornment video cards) - Exactly following categories */}
        <GallerySection />

        {/* 6. We Serve Retailers Worldwide + Maroon Trust Bar */}
        <InternationalWholesale />

        {/* 7. Comparison Table: Shyambaba vs Other Supplier + "Start Growing With Us" */}
        <ManufacturerComparison />

        {/* 8. Book a Live Video Call Card */}
        <VideoShoppingCTA />

        {/* 9. Factory Story: We Don't Source. We Are Manufacture. */}
        <FactoryStory />

        {/* 10. What Our Retailers Say (Testimonials) */}
        <Testimonials />

        {/* 11. Manufacturing Pipeline: From Sketch To Stunning Jewellery */}
        <ManufacturingProcess />

        {/* 12. Frequently Asked Questions (FAQ Accordion) */}
        <FAQSection />

        {/* 13. Wholesale Lead Capture / Partner Banner */}
        <WholesaleLeadCTA />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating Action Buttons matching Krishaz (Book Video Call + WhatsApp) */}
      <FloatingActionButtons />
    </div>
  )
}
