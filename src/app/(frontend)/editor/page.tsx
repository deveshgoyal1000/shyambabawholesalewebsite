'use client'

import React, { useState, useEffect } from 'react'
import { Puck, type Data } from '@measured/puck'
import '@measured/puck/puck.css'
import { puckConfig, type ComponentProps } from '@/puck.config'

const defaultHomeData: Data<ComponentProps> = {
  content: [
    {
      type: 'AnnouncementBarBlock',
      props: {
        id: 'announcement-block',
        highlight: 'Low MOV ₹3,000 / $50',
        subtext: 'Direct Jaipur Manufacturer Wholesale Pricing',
        phoneNumber: '+91 96808 65791',
      },
    },
    {
      type: 'HeaderBlock',
      props: {
        id: 'header-block',
        brandName: 'ShyamBabaWholesale',
      },
    },
    {
      type: 'HeroBannerBlock',
      props: {
        id: 'hero-block',
        preheading: "India's Trusted",
        headlineLine1: 'Brass Jewellery Manufacturer',
        headlineLine2: '& Exporters',
        subtitle: 'Supplying 10,000+ Retailers, Boutiques & Resellers Across 50+ Countries.',
        point1: 'Premium Brass Earrings',
        point2: 'Video Call Available',
        point3: 'Worldwide Shipping',
        point4: '500+ Unique Designs',
        button1Text: 'Shop Wholesale',
        button2Text: 'View Catalog',
        bgImageMobile: '/images/hero/hero-mobile-krishaz.jpg',
        bgImageDesktop: '/images/hero/hero-desktop-krishaz.png',
      },
    },
    {
      type: 'ShopByCategoriesBlock',
      props: {
        id: 'categories-block',
        heading: 'Shop by Category',
        subheading: 'Jaipur Handcrafted Brass Jewellery Direct from Manufacturer',
      },
    },
    {
      type: 'GallerySectionBlock',
      props: {
        id: 'gallery-block',
        heading: 'Trending Wholesale Jewellery',
        subheading: 'Jaipur Factory Finished Brass & Oxidised Silver Pieces',
      },
    },
    {
      type: 'InternationalWholesaleBlock',
      props: {
        id: 'international-block',
        heading: 'Worldwide Express Cargo Delivery',
      },
    },
    {
      type: 'ManufacturerComparisonBlock',
      props: {
        id: 'comparison-block',
        heading: 'Why Source Direct from Jaipur Factory vs Market Traders',
      },
    },
    {
      type: 'FactoryStoryBlock',
      props: {
        id: 'factory-story-block',
        headlineLine1: "We Don't Source.",
        headlineLine2: 'We Are Manufacture.',
        description:
          'From our manufacturing unit in Jaipur, every piece is designed, crafted and quality-checked by our skilled artisans.',
        badge1: 'In-house Manufacturing',
        badge2: 'Skilled Artisans',
        badge3: '100% Quality Inspection',
        buttonText: 'Visit Our Manufacturing Unit',
      },
    },
    {
      type: 'ManufacturingProcessBlock',
      props: {
        id: 'process-block',
        heading: 'Jaipur Artisan Craftsmanship',
      },
    },
    {
      type: 'VideoShoppingCTABlock',
      props: {
        id: 'video-cta-block',
        heading: 'Live Video Call Selection from Factory Floor',
        subheading: 'Inspect real shine, weight, and finish before dispatch',
      },
    },
    {
      type: 'TestimonialsBlock',
      props: {
        id: 'testimonials-block',
        heading: 'Trusted by 10,000+ Retailers & Boutiques Worldwide',
      },
    },
    {
      type: 'FAQSectionBlock',
      props: {
        id: 'faq-block',
        heading: 'Frequently Asked Wholesale Questions',
      },
    },
    {
      type: 'WholesaleLeadCTABlock',
      props: {
        id: 'lead-cta-block',
        title: 'Boost your sales with Shyambaba’s premium brass earrings',
        description:
          'Join thousands of retailers worldwide who trust SHYAMBABA for premium quality & designer brass jewellery.',
        button1Text: 'Shop Wholesale',
        button2Text: 'Contact Us',
      },
    },
    {
      type: 'FooterBlock',
      props: {
        id: 'footer-block',
        companyName: 'ShyamBaba Wholesale Jewellery',
        tagline: 'Jaipur Factory Direct Brass Jewellery Manufacturer & Exporter',
      },
    },
  ],
  root: {
    props: {
      title: 'Shyambaba Wholesale Home',
    },
  },
}

export default function EditorPage() {
  const [data, setData] = useState<Data<ComponentProps>>(defaultHomeData)
  const [loading, setLoading] = useState<boolean>(true)
  const [saveStatus, setSaveStatus] = useState<string>('')

  // Load existing saved data from /api/editor
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/editor')
        const json = await res.json()
        if (json.success && json.data && json.data.content?.length > 0) {
          setData(json.data)
        }
      } catch (err) {
        console.error('Failed to load editor data:', err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const handlePublish = async (savedData: Data<ComponentProps>) => {
    try {
      setData(savedData)
      setSaveStatus('Saving changes to website...')

      const res = await fetch('/api/editor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(savedData),
      })

      const json = await res.json()
      if (json.success) {
        setSaveStatus('✓ Published to live website! Changes are now live on homepage.')
      } else {
        setSaveStatus('Error saving: ' + (json.error || 'Unknown error'))
      }
    } catch (err: any) {
      setSaveStatus('Error publishing: ' + err.message)
    } finally {
      setTimeout(() => setSaveStatus(''), 5000)
    }
  }

  if (loading) {
    return (
      <div className="w-full h-screen bg-neutral-900 flex items-center justify-center text-white text-sm">
        Loading Full Website Visual Editor...
      </div>
    )
  }

  return (
    <div className="w-full h-screen flex flex-col bg-neutral-900 select-none">
      {saveStatus && (
        <div className="fixed top-3 right-4 z-50 bg-[#195799] text-white font-bold px-5 py-2.5 rounded-lg shadow-xl text-sm border border-[#C9A84C] animate-fade-in flex items-center gap-2">
          <span>{saveStatus}</span>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-xs bg-white/20 px-2 py-0.5 rounded hover:bg-white/30 ml-2"
          >
            View Live Site ↗
          </a>
        </div>
      )}
      <div className="flex-1 overflow-hidden">
        <Puck
          config={puckConfig}
          data={data}
          onPublish={handlePublish}
        />
      </div>
    </div>
  )
}
