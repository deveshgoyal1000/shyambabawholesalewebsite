'use client'

import React, { useState, useEffect } from 'react'
import { Puck, type Data } from '@measured/puck'
import '@measured/puck/puck.css'
import { puckConfig, type ComponentProps } from '@/puck.config'
import { DEFAULT_CATEGORIES } from '@/components/ShopByCategories'
import { DEFAULT_GALLERY_ITEMS } from '@/components/GallerySection'
import { DEFAULT_COUNTRIES } from '@/components/InternationalWholesale'
import { DEFAULT_COMPARISON_ROWS } from '@/components/ManufacturerComparison'
import { DEFAULT_PROCESS_STEPS } from '@/components/ManufacturingProcess'
import { DEFAULT_REVIEWS } from '@/components/Testimonials'
import { DEFAULT_FAQS } from '@/components/FAQSection'

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
        button1Link: '#categories',
        button2Text: 'View Catalog',
        button2Link: '/collections/all',
        bgImageMobile: '/images/hero/hero-mobile-krishaz.jpg',
        bgImageDesktop: '/images/hero/hero-desktop-krishaz.png',
      },
    },
    {
      type: 'ShopByCategoriesBlock',
      props: {
        id: 'categories-block',
        heading: 'Shop By Categories',
        subheading: 'Explore our premium brass jewellery collections',
        categories: DEFAULT_CATEGORIES,
      },
    },
    {
      type: 'GallerySectionBlock',
      props: {
        id: 'gallery-block',
        heading: "Explore Shyambaba's Gallery",
        subheading: 'The Art Of Adornment',
        items: DEFAULT_GALLERY_ITEMS,
      },
    },
    {
      type: 'InternationalWholesaleBlock',
      props: {
        id: 'international-block',
        heading: 'We Serve Retailers Worldwide',
        subheading: 'Delivering Premium Jewellery to Your Country',
        ctaText: 'We ship to 50+ countries →',
        ctaLink:
          'https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20an%20international%20buyer%20and%20want%20to%20order%20wholesale%20jewellery%20with%20doorstep%20export%20to%20my%20country.',
        badge1Title: '50+ Countries',
        badge1Subtitle: 'Direct Export',
        badge2Title: '100% Insured',
        badge2Subtitle: 'Air Cargo',
        badge3Title: 'Customs Clear',
        badge3Subtitle: 'Documentation',
        countries: DEFAULT_COUNTRIES,
      },
    },
    {
      type: 'ManufacturerComparisonBlock',
      props: {
        id: 'comparison-block',
        heading: 'ShyamBabaWholesale vs Other Suppliers',
        subheading: 'Why 10,000+ Retailers Choose Direct Manufacturing',
        companyName: 'ShyamBabaWholesale',
        otherName: 'Other Suppliers',
        rows: DEFAULT_COMPARISON_ROWS,
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
        buttonLink:
          'https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20want%20to%20visit%20your%20Jaipur%20manufacturing%20unit.',
      },
    },
    {
      type: 'ManufacturingProcessBlock',
      props: {
        id: 'process-block',
        heading: 'From Sketch To Stunning Jewellery',
        subheading: 'Our 5-Step Precision Manufacturing Pipeline',
        steps: DEFAULT_PROCESS_STEPS,
      },
    },
    {
      type: 'VideoShoppingCTABlock',
      props: {
        id: 'video-cta-block',
        heading: 'Book a Live Video Call',
        subheading: 'See products in real before ordering',
        buttonText: 'Book Now →',
        buttonLink:
          'https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20would%20like%20to%20Book%20a%20Live%20Video%20Call%20shopping%20session%20now.',
      },
    },
    {
      type: 'TestimonialsBlock',
      props: {
        id: 'testimonials-block',
        heading: 'Trusted by 10,000+ Retailers & Boutiques Worldwide',
        subheading: 'Real feedback from boutique owners and resellers worldwide',
        reviews: DEFAULT_REVIEWS,
      },
    },
    {
      type: 'FAQSectionBlock',
      props: {
        id: 'faq-block',
        heading: 'Frequently Asked Questions',
        subheading: 'Everything You Need to Know About Ordering Wholesale',
        faqs: DEFAULT_FAQS,
      },
    },
    {
      type: 'WholesaleLeadCTABlock',
      props: {
        id: 'lead-cta-block',
        title: "Boost your sales with Shyambaba's premium brass earrings",
        description:
          'Join thousands of retailers worldwide who trust SHYAMBABA for premium quality & designer brass jewellery.',
        button1Text: 'Shop Wholesale',
        button1Link: '#categories',
        button2Text: 'Contact Us',
        button2Link:
          'https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20want%20to%20contact%20you%20regarding%20wholesale%20partnership.',
        badge1: 'Premium Quality',
        badge2: '10000+ Retailers',
        badge3: 'Worldwide Shipping',
        modelImage: '/images/cta/model_jewellery_perfect.png',
        contactTitle: 'Contact Us',
        contactPhone: '+91 96808 65791',
      },
    },
    {
      type: 'FooterBlock',
      props: {
        id: 'footer-block',
        companyName: 'ShyamBaba Wholesale Jewellery',
        tagline: 'Style In Bulk, Profit In Every Piece',
        logoUrl: '/images/logo.png',
        addressLine1: 'Shop no, 206, Johari Bazar Rd,',
        addressLine2: 'Pink City, Jaipur, Rajasthan',
        addressLine3: '302003',
        copyright: '© 2025 Shyambabawholesale. All Rights Reserved.',
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
          // Backfill/patch any missing properties or empty arrays from older saves so the user has full customization
          const patchedContent = json.data.content.map((block: any) => {
            if (block.type === 'ShopByCategoriesBlock') {
              if (!block.props.categories || block.props.categories.length === 0) {
                return {
                  ...block,
                  props: {
                    ...block.props,
                    categories: DEFAULT_CATEGORIES,
                  },
                }
              }
            }
            if (block.type === 'GallerySectionBlock') {
              if (!block.props.items || block.props.items.length === 0) {
                return {
                  ...block,
                  props: {
                    ...block.props,
                    items: DEFAULT_GALLERY_ITEMS,
                  },
                }
              }
            }
            if (block.type === 'InternationalWholesaleBlock') {
              if (!block.props.countries || block.props.countries.length === 0) {
                return {
                  ...block,
                  props: {
                    ...block.props,
                    countries: DEFAULT_COUNTRIES,
                    ctaText: block.props.ctaText || 'We ship to 50+ countries →',
                    ctaLink:
                      block.props.ctaLink ||
                      'https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20an%20international%20buyer%20and%20want%20to%20order%20wholesale%20jewellery%20with%20doorstep%20export%20to%20my%20country.',
                    badge1Title: block.props.badge1Title || '50+ Countries',
                    badge1Subtitle: block.props.badge1Subtitle || 'Direct Export',
                    badge2Title: block.props.badge2Title || '100% Insured',
                    badge2Subtitle: block.props.badge2Subtitle || 'Air Cargo',
                    badge3Title: block.props.badge3Title || 'Customs Clear',
                    badge3Subtitle: block.props.badge3Subtitle || 'Documentation',
                  },
                }
              }
            }
            if (block.type === 'ManufacturerComparisonBlock') {
              if (!block.props.rows || block.props.rows.length === 0) {
                return {
                  ...block,
                  props: {
                    ...block.props,
                    companyName: block.props.companyName || 'ShyamBabaWholesale',
                    otherName: block.props.otherName || 'Other Suppliers',
                    rows: DEFAULT_COMPARISON_ROWS,
                  },
                }
              }
            }
            if (block.type === 'ManufacturingProcessBlock') {
              if (!block.props.steps || block.props.steps.length === 0) {
                return {
                  ...block,
                  props: {
                    ...block.props,
                    steps: DEFAULT_PROCESS_STEPS,
                  },
                }
              }
            }
            if (block.type === 'TestimonialsBlock') {
              if (!block.props.reviews || block.props.reviews.length === 0) {
                return {
                  ...block,
                  props: {
                    ...block.props,
                    reviews: DEFAULT_REVIEWS,
                  },
                }
              }
            }
            if (block.type === 'FAQSectionBlock') {
              if (!block.props.faqs || block.props.faqs.length === 0) {
                return {
                  ...block,
                  props: {
                    ...block.props,
                    faqs: DEFAULT_FAQS,
                  },
                }
              }
            }
            if (block.type === 'WholesaleLeadCTABlock') {
              return {
                ...block,
                props: {
                  ...block.props,
                  badge1: block.props.badge1 || 'Premium Quality',
                  badge2: block.props.badge2 || '10000+ Retailers',
                  badge3: block.props.badge3 || 'Worldwide Shipping',
                  modelImage: block.props.modelImage || '/images/cta/model_jewellery_perfect.png',
                  contactTitle: block.props.contactTitle || 'Contact Us',
                  contactPhone: block.props.contactPhone || '+91 96808 65791',
                  button1Link: block.props.button1Link || '#categories',
                  button2Link:
                    block.props.button2Link ||
                    'https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20want%20to%20contact%20you%20regarding%20wholesale%20partnership.',
                },
              }
            }
            if (block.type === 'FooterBlock') {
              return {
                ...block,
                props: {
                  ...block.props,
                  logoUrl: block.props.logoUrl || '/images/logo.png',
                  addressLine1: block.props.addressLine1 || 'Shop no, 206, Johari Bazar Rd,',
                  addressLine2: block.props.addressLine2 || 'Pink City, Jaipur, Rajasthan',
                  addressLine3: block.props.addressLine3 || '302003',
                  copyright: block.props.copyright || '© 2025 Shyambabawholesale. All Rights Reserved.',
                },
              }
            }
            return block
          })
          setData({
            ...json.data,
            content: patchedContent,
          })
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5]">
        <div className="w-10 h-10 border-4 border-[#195799] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-neutral-700 font-medium text-sm">
          Loading Shyambaba Website Visual Editor...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Editor Header Bar */}
      <header className="bg-[#121212] text-white px-4 py-3 flex items-center justify-between border-b border-neutral-800 shrink-0 select-none z-50">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <h1 className="text-sm font-semibold tracking-wide">
            Shyambaba Visual Website Editor (Krishaz Layout)
          </h1>
          <span className="text-xs text-neutral-400 hidden sm:inline">
            • Click any section on canvas or right sidebar to edit
          </span>
        </div>

        <div className="flex items-center gap-3">
          {saveStatus && (
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-md transition-all ${
                saveStatus.startsWith('✓')
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}
            >
              {saveStatus}
            </span>
          )}

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-300 hover:text-white px-3 py-1.5 rounded border border-neutral-700 hover:border-neutral-500 transition-colors"
          >
            View Live Site ↗
          </a>
        </div>
      </header>

      {/* Puck Visual Editor */}
      <div className="flex-1 min-h-0">
        <Puck
          config={puckConfig}
          data={data}
          onPublish={handlePublish}
          headerPath=""
        />
      </div>
    </div>
  )
}
