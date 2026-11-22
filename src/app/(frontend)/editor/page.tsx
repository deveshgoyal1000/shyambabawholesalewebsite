'use client'

import React, { useState, useEffect } from 'react'
import { Puck, type Data } from '@measured/puck'
import '@measured/puck/puck.css'
import { puckConfig, type ComponentProps } from '@/puck.config'
import { DEFAULT_CATEGORIES } from '@/components/ShopByCategories'
import ProductCatalogCMS from '@/components/cms/ProductCatalogCMS'
import CategoriesCMS from '@/components/cms/CategoriesCMS'
import MediaLibraryCMS from '@/components/cms/MediaLibraryCMS'
import CollectionPageEditor from '@/components/cms/CollectionPageEditor'
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

type TabType = 'visual' | 'products' | 'categories' | 'media'

export default function EditorPage() {
  const [currentView, setCurrentView] = useState<'home' | 'collection'>('home')
  const [activeCollectionSlug, setActiveCollectionSlug] = useState<string>('premium-jewellery')

  const [currentTab, setCurrentTab] = useState<TabType>('visual')
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

  // Global Listeners for In-Editor Navigation & Bulk Upload
  useEffect(() => {
    const handleOpenCollection = (e: any) => {
      const slug = e.detail?.slug || 'premium-jewellery'
      setActiveCollectionSlug(slug)
      setCurrentView('collection')
    }

    const handleOpenBulk = (e: any) => {
      const slug = e.detail?.categorySlug || 'premium-jewellery'
      setBulkCategorySlug(slug)
      setIsBulkModalOpen(true)
    }

    window.addEventListener('sb_open_collection_editor', handleOpenCollection)
    window.addEventListener('sb_open_bulk_upload', handleOpenBulk)

    return () => {
      window.removeEventListener('sb_open_collection_editor', handleOpenCollection)
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
  const handleExecutePublish = async (target: 'staging' | 'main') => {
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
        body: JSON.stringify({ target, data }),
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
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-xs shadow-xs">
              SB
            </div>
            <span className="hidden sm:inline font-bold text-white text-xs sm:text-sm tracking-wide">
              ShyamBaba
            </span>
          </div>

          {/* Real Page Selector Dropdown */}
          <div className="flex items-center bg-neutral-900 border border-neutral-700/80 rounded-xl px-2.5 py-1 text-xs">
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mr-2 hidden md:inline">
              Page:
            </span>
            <select
              value={currentView === 'home' ? 'home' : activeCollectionSlug}
              onChange={(e) => {
                const val = e.target.value
                if (val === 'home') {
                  setCurrentView('home')
                } else {
                  setActiveCollectionSlug(val)
                  setCurrentView('collection')
                }
              }}
              className="bg-transparent text-white font-semibold text-xs focus:outline-hidden cursor-pointer"
            >
              <option value="home" className="bg-neutral-900 text-white">
                🏠 Home Page (Visual Drag &amp; Drop)
              </option>
              <optgroup label="Collections & Subcategories" className="bg-neutral-900 text-amber-300">
                <option value="premium-jewellery" className="bg-neutral-900 text-white">
                  💎 Premium Jewellery (12 Subcategories)
                </option>
                <option value="normal-jewellery" className="bg-neutral-900 text-white">
                  💠 Normal Jewellery (8 Subcategories)
                </option>
                <option value="bangles" className="bg-neutral-900 text-white">
                  📿 Bangles (2 Subcategories)
                </option>
                <option value="bracelets" className="bg-neutral-900 text-white">
                  ✨ Bracelets (3 Subcategories)
                </option>
                <option value="earrings" className="bg-neutral-900 text-white">
                  💎 Earrings (8 Subcategories)
                </option>
                <option value="necklaces" className="bg-neutral-900 text-white">
                  👑 Necklaces (6 Subcategories)
                </option>
                <option value="rings" className="bg-neutral-900 text-white">
                  💍 Finger Rings (2 Subcategories)
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* Center: Switcher Tabs (When on Home Page) */}
        {currentView === 'home' ? (
          <nav className="flex items-center bg-neutral-900/90 p-1 rounded-xl border border-neutral-800">
            <button
              data-tab="visual"
              onClick={() => setCurrentTab('visual')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'visual'
                  ? 'bg-[#195799] text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Visual Page Editor</span>
              <span className="sm:hidden">Editor</span>
            </button>

            <button
              data-tab="products"
              onClick={() => setCurrentTab('products')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'products'
                  ? 'bg-amber-500 text-neutral-950 shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Products &amp; Catalog CMS</span>
              <span className="sm:hidden">Products</span>
            </button>

            <button
              data-tab="categories"
              onClick={() => setCurrentTab('categories')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'categories'
                  ? 'bg-neutral-700 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <FolderTree className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Categories</span>
            </button>

            <button
              data-tab="media"
              onClick={() => setCurrentTab('media')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTab === 'media'
                  ? 'bg-neutral-700 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Media Assets</span>
            </button>
          </nav>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentView('home')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
            >
              <span>← Back to Home Page Editor</span>
            </button>
          </div>
        )}

        {/* Right: Publish Buttons & Quick Actions */}
        <div className="flex items-center gap-2 relative">
          <button
            onClick={() => {
              setBulkCategorySlug(currentView === 'collection' ? activeCollectionSlug : 'premium-jewellery')
              setIsBulkModalOpen(true)
            }}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">⚡ Bulk Upload</span>
            <span className="sm:hidden">Bulk</span>
          </button>

          {/* Dual Publish Action (Staging vs Main Site) */}
          <div className="relative">
            <div className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md">
              <button
                type="button"
                onClick={() => setIsPublishModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-white font-bold text-xs hover:bg-white/10 rounded-l-xl transition-all cursor-pointer"
              >
                <Rocket className="w-3.5 h-3.5 text-amber-300" />
                <span>Publish</span>
              </button>
              <button
                type="button"
                onClick={() => setShowPublishDropdown((prev) => !prev)}
                className="px-2 py-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-r-xl border-l border-white/20 transition-all cursor-pointer"
                title="Publish Options"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Publish Dropdown */}
            {showPublishDropdown && (
              <div className="absolute right-0 top-11 w-64 bg-[#1C1D22] border border-neutral-700 rounded-2xl shadow-2xl p-2 z-50 animate-scale-up space-y-1">
                <button
                  type="button"
                  onClick={() => handleExecutePublish('staging')}
                  className="w-full p-2.5 rounded-xl hover:bg-neutral-800 text-left transition-colors flex items-start gap-2.5 group cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs">1</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white group-hover:text-blue-300">
                      Publish to Staging Site
                    </p>
                    <p className="text-[10px] text-neutral-400">
                      Instant preview on <code className="text-neutral-300">localhost:3000</code>
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleExecutePublish('main')}
                  className="w-full p-2.5 rounded-xl hover:bg-neutral-800 text-left transition-colors flex items-start gap-2.5 group cursor-pointer border-t border-neutral-800/80"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Rocket className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white group-hover:text-emerald-300">
                      Publish to Main Live Site
                    </p>
                    <p className="text-[10px] text-neutral-400">
                      Deploys live worldwide on Vercel
                    </p>
                  </div>
                </button>
              </div>
            )}
          </div>

          <a
            href={currentView === 'collection' ? `/collections/${activeCollectionSlug}` : '/'}
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
        {/* VIEW A: Internal Collection & Subcategory Live Page Editor */}
        {currentView === 'collection' ? (
          <div className="w-full h-full">
            <CollectionPageEditor
              collectionSlug={activeCollectionSlug}
              onBackToHome={() => setCurrentView('home')}
            />
          </div>
        ) : (
          /* VIEW B: Home Page Editor with Visual and CMS Views */
          <>
            {/* Tab 1: Visual Page Editor (Puck) */}
            <div className={`w-full h-full ${currentTab === 'visual' ? 'block' : 'hidden'}`}>
              <Puck config={puckConfig} data={data} onPublish={handlePuckPublish} />
            </div>

            {/* Tab 2: Products & Catalog CMS */}
            {currentTab === 'products' && (
              <div className="w-full h-full">
                <ProductCatalogCMS />
              </div>
            )}

            {/* Tab 3: Categories & Collections */}
            {currentTab === 'categories' && (
              <div className="w-full h-full">
                <CategoriesCMS />
              </div>
            )}

            {/* Tab 4: Media Assets */}
            {currentTab === 'media' && (
              <div className="w-full h-full">
                <MediaLibraryCMS />
              </div>
            )}
          </>
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
