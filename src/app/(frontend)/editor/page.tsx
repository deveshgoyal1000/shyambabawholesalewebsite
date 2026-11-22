'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Puck, type Data, usePuck } from '@measured/puck'
import '@measured/puck/puck.css'
import { puckConfig, type ComponentProps } from '@/puck.config'
import { DEFAULT_CATEGORIES } from '@/components/ShopByCategories'
import CollectionPageEditor from '@/components/cms/CollectionPageEditor'
import CountryPageEditor from '@/components/cms/CountryPageEditor'
import BulkUploadModal from '@/components/cms/BulkUploadModal'
import PublishOptionsModal from '@/components/cms/PublishOptionsModal'
import {
  Palette,
  Package,
  FolderTree,
  Image as ImageIcon,
  ExternalLink,
  ShieldCheck,
  Globe,
  Sparkles,
  ChevronDown,
  Layers,
  Upload,
  Rocket,
  Check,
} from 'lucide-react'

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
        bgImageMobile: '/images/hero/hero-mobile-graphic-banner.webp',
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
  const [currentView, setCurrentView] = useState<'home' | 'collection' | 'country'>('home')
  const [activeCollectionSlug, setActiveCollectionSlug] = useState<string>('premium-jewellery')
  const [activeCountrySlug, setActiveCountrySlug] = useState<string>('united-states')

  const [data, setData] = useState<Data<ComponentProps>>(defaultHomeData)
  const [loading, setLoading] = useState<boolean>(true)
  const [saveStatus, setSaveStatus] = useState<string>('')
  const [saveLink, setSaveLink] = useState<{ url: string; label: string } | null>(null)

  // Bulk Upload Modal State
  const [isBulkModalOpen, setIsBulkModalOpen] = useState<boolean>(false)
  const [bulkCategorySlug, setBulkCategorySlug] = useState<string>('premium-jewellery')

  // Publish Options Modal State
  const [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false)
  const [publishingTarget, setPublishingTarget] = useState<'staging' | 'main' | null>(null)
  const [showPublishDropdown, setShowPublishDropdown] = useState<boolean>(false)

  // Global Listeners for In-Editor Navigation, Country Pages & Bulk Upload
  useEffect(() => {
    const handleOpenCollection = (e: any) => {
      const slug = e.detail?.slug || 'premium-jewellery'
      setActiveCollectionSlug(slug)
      setCurrentView('collection')
    }

    const handleOpenCountry = (e: any) => {
      const slug = e.detail?.slug || 'united-states'
      setActiveCountrySlug(slug)
      setCurrentView('country')
    }

    const handleOpenBulk = (e: any) => {
      const slug = e.detail?.categorySlug || 'premium-jewellery'
      setBulkCategorySlug(slug)
      setIsBulkModalOpen(true)
    }

    window.addEventListener('sb_open_collection_editor', handleOpenCollection)
    window.addEventListener('sb_open_country_editor', handleOpenCountry)
    window.addEventListener('sb_open_bulk_upload', handleOpenBulk)

    return () => {
      window.removeEventListener('sb_open_collection_editor', handleOpenCollection)
      window.removeEventListener('sb_open_country_editor', handleOpenCountry)
      window.removeEventListener('sb_open_bulk_upload', handleOpenBulk)
    }
  }, [])

  // Load existing saved data from /api/editor
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/editor')
        const json = await res.json()
        if (json.success && json.data && json.data.content?.length > 0) {
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

  // Execute publish to staging or main site
  const handleExecutePublish = async (target: 'staging' | 'main', overrideData?: Data<ComponentProps>) => {
    const dataToPublish = overrideData || data
    setPublishingTarget(target)
    setSaveStatus(
      target === 'main'
        ? 'Deploying to Main Live Website (shyambabawholesale)...'
        : 'Saving to Staging Site (localhost:3000)...'
    )
    setShowPublishDropdown(false)

    try {
      const res = await fetch('/api/editor/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target, data: dataToPublish }),
      })

      const json = await res.json()
      if (json.success) {
        if (target === 'main') {
          setSaveStatus('✓ Published to Main Live Website! Changes are now deploying live.')
          setSaveLink({
            url: 'https://shyambabawholesalewebsite.vercel.app',
            label: 'Open Main Live Site ↗',
          })
        } else {
          setSaveStatus('✓ Published to Staging Site! You can preview changes safely.')
          setSaveLink({
            url: 'http://localhost:3000',
            label: 'Open Staging Site ↗',
          })
        }
      } else {
        setSaveStatus('Error publishing: ' + (json.error || 'Failed'))
      }
    } catch (err: any) {
      setSaveStatus('Error publishing: ' + err.message)
    } finally {
      setPublishingTarget(null)
      setTimeout(() => {
        setSaveStatus('')
        setSaveLink(null)
      }, 7000)
    }
  }

  // When Puck triggers publish
  const handlePuckPublish = async (savedData: Data<ComponentProps>) => {
    setData(savedData)
    setIsPublishModalOpen(true)
  }

  // Custom Header Actions for Puck to keep only one Publish button with both options
  const PuckHeaderActions = () => {
    const { appState } = usePuck()
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setDropdownOpen(false)
        }
      }
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setDropdownOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [])

    return (
      <div className="relative inline-flex items-center" ref={dropdownRef}>
        <div className="inline-flex items-center rounded-lg bg-[#0052cc] hover:bg-[#0047b3] text-white shadow-xs font-semibold text-xs overflow-hidden">
          <button
            type="button"
            onClick={() => {
              const currentData = appState.data as Data<ComponentProps>
              setData(currentData)
              setIsPublishModalOpen(true)
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-white" />
            <span className="font-semibold text-xs">Publish</span>
          </button>
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="px-2 py-1.5 text-white/90 hover:text-white hover:bg-white/10 border-l border-white/20 transition-colors cursor-pointer"
            title="Publish Options"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 top-10 w-64 bg-white border border-neutral-200 rounded-xl shadow-2xl p-1.5 z-50 animate-scale-up space-y-1 text-left">
            <button
              type="button"
              onClick={() => {
                setDropdownOpen(false)
                const currentData = appState.data as Data<ComponentProps>
                setData(currentData)
                handleExecutePublish('staging', currentData)
              }}
              className="w-full p-2.5 rounded-lg hover:bg-neutral-100 text-left transition-colors flex items-start gap-2.5 group cursor-pointer"
            >
              <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                1
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900 group-hover:text-blue-700">
                  Publish to Staging Site
                </p>
                <p className="text-[10px] text-neutral-500">
                  Instant preview on localhost:3000
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setDropdownOpen(false)
                const currentData = appState.data as Data<ComponentProps>
                setData(currentData)
                handleExecutePublish('main', currentData)
              }}
              className="w-full p-2.5 rounded-lg hover:bg-neutral-100 text-left transition-colors flex items-start gap-2.5 group cursor-pointer border-t border-neutral-100"
            >
              <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                2
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900 group-hover:text-emerald-700">
                  Publish to Main Live Site
                </p>
                <p className="text-[10px] text-neutral-500">
                  Deploys live worldwide on Vercel
                </p>
              </div>
            </button>
          </div>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="w-full h-screen bg-[#141416] flex flex-col items-center justify-center text-white text-sm space-y-3">
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-neutral-400">Loading ShyamBaba Store Studio &amp; CMS...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-screen flex flex-col bg-[#141416] select-none">
      {/* Top Unified Hub Navigation Bar */}
      <header className="h-14 bg-[#111215] border-b border-neutral-800 px-3 sm:px-6 flex items-center justify-between shrink-0 z-30 shadow-md">
        {/* Left: Brand + Page Dropdown */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#195799] flex items-center justify-center text-white font-bold text-xs shadow-xs">
              SB
            </div>
            <span className="hidden sm:inline font-bold text-white text-xs sm:text-sm tracking-wide">
              ShyamBaba
            </span>
          </div>

          {/* Real Page Selector Dropdown */}
          <div className="flex items-center bg-neutral-900 border border-neutral-700/80 rounded-xl px-2.5 py-1 text-xs">
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mr-2 hidden md:inline">
              Page:
            </span>
            <select
              value={
                currentView === 'home'
                  ? 'home'
                  : currentView === 'country'
                  ? `country:${activeCountrySlug}`
                  : activeCollectionSlug
              }
              onChange={(e) => {
                const val = e.target.value
                if (val === 'home') {
                  setCurrentView('home')
                } else if (val.startsWith('country:')) {
                  setActiveCountrySlug(val.replace('country:', ''))
                  setCurrentView('country')
                } else {
                  setActiveCollectionSlug(val)
                  setCurrentView('collection')
                }
              }}
              className="bg-transparent text-white font-semibold text-xs focus:outline-hidden cursor-pointer"
            >
              <option value="home" className="bg-neutral-900 text-white">
                Home Page
              </option>
              <optgroup label="International Country Pages" className="bg-neutral-900 text-blue-300">
                <option value="country:united-states" className="bg-neutral-900 text-white">
                  United States (USA)
                </option>
                <option value="country:united-kingdom" className="bg-neutral-900 text-white">
                  United Kingdom (UK)
                </option>
                <option value="country:canada" className="bg-neutral-900 text-white">
                  Canada
                </option>
                <option value="country:dubai" className="bg-neutral-900 text-white">
                  UAE (Dubai)
                </option>
                <option value="country:australia" className="bg-neutral-900 text-white">
                  Australia
                </option>
              </optgroup>
              <optgroup label="Collections & Subcategories" className="bg-neutral-900 text-neutral-300">
                <option value="premium-jewellery" className="bg-neutral-900 text-white">
                  Premium Jewellery (12 Subcategories)
                </option>
                <option value="normal-jewellery" className="bg-neutral-900 text-white">
                  Normal Jewellery (8 Subcategories)
                </option>
                <option value="bangles" className="bg-neutral-900 text-white">
                  Bangles (2 Subcategories)
                </option>
                <option value="bracelets" className="bg-neutral-900 text-white">
                  Bracelets (3 Subcategories)
                </option>
                <option value="earrings" className="bg-neutral-900 text-white">
                  Earrings (8 Subcategories)
                </option>
                <option value="necklaces" className="bg-neutral-900 text-white">
                  Necklaces (6 Subcategories)
                </option>
                <option value="rings" className="bg-neutral-900 text-white">
                  Finger Rings (2 Subcategories)
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* Center: When not on home page, show Return to Home Editor */}
        {currentView !== 'home' && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentView('home')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              <span>&larr; Back to Home Page Editor</span>
            </button>
          </div>
        )}

        {/* Right: Live Website Link Only */}
        <div className="flex items-center gap-2">
          <a
            href={
              currentView === 'country'
                ? `/international/${activeCountrySlug}`
                : currentView === 'collection'
                ? `/collections/${activeCollectionSlug}`
                : '/'
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Preview Live Website in new tab"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/10 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Live Website</span>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </a>
        </div>
      </header>

      {/* Save / Status Toast */}
      {saveStatus && (
        <div className="fixed top-16 right-6 z-50 bg-[#195799] text-white font-bold px-5 py-2.5 rounded-xl shadow-2xl text-sm border border-[#C9A84C] animate-fade-in flex items-center gap-2.5">
          <span>{saveStatus}</span>
          {saveLink && (
            <a
              href={saveLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-xs bg-white/20 px-2 py-1 rounded-md hover:bg-white/30 ml-2 font-bold"
            >
              {saveLink.label}
            </a>
          )}
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative">
        {/* VIEW A: Country Page Live Editor */}
        {currentView === 'country' ? (
          <div className="w-full h-full">
            <CountryPageEditor
              countrySlug={activeCountrySlug}
              onBackToHome={() => setCurrentView('home')}
            />
          </div>
        ) : currentView === 'collection' ? (
          /* VIEW B: Internal Collection & Subcategory Live Page Editor */
          <div className="w-full h-full">
            <CollectionPageEditor
              collectionSlug={activeCollectionSlug}
              onBackToHome={() => setCurrentView('home')}
            />
          </div>
        ) : (
          /* VIEW C: Home Page Visual Editor (Puck) */
          <div className="w-full h-full">
            <Puck
              config={puckConfig}
              data={data}
              onPublish={handlePuckPublish}
              overrides={{
                headerActions: PuckHeaderActions,
              }}
            />
          </div>
        )}
      </main>

      {/* Global Bulk Upload Modal */}
      <BulkUploadModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
        initialCategorySlug={bulkCategorySlug}
      />

      {/* Publish Options Modal (Staging vs Main Live Site) */}
      <PublishOptionsModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
        onPublish={handleExecutePublish}
        publishingTarget={publishingTarget}
      />
    </div>
  )
}
