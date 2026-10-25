'use client'

import React, { useState } from 'react'
import ProductCard, { ProductData } from './ProductCard'
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react'

export default function FeaturedProducts({ initialProducts }: { initialProducts: ProductData[] }) {
  const [activeTab, setActiveTab] = useState<'all' | 'new' | 'featured'>('all')

  const filtered = initialProducts.filter((p) => {
    if (activeTab === 'new') return p.isNewArrival
    if (activeTab === 'featured') return p.isFeatured
    return true
  })

  return (
    <section className="py-16 md:py-24 bg-cream border-b border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1 text-gold-dark text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Bulk Dispatch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon">
            Featured Wholesale Designs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          <p className="text-sm sm:text-base text-charcoal/70">
            Wholesale prices available upon verification. Use the unique <strong>Product Code</strong> to get instant factory pricing on WhatsApp.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`btn-tactile px-5 py-2 rounded-full text-xs font-bold border ${
                activeTab === 'all'
                  ? 'bg-maroon text-white shadow-md border-gold/40'
                  : 'bg-white text-charcoal/70 hover:bg-gold/10 border-gold/20'
              }`}
            >
              All Designs ({initialProducts.length})
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`btn-tactile px-5 py-2 rounded-full text-xs font-bold border ${
                activeTab === 'new'
                  ? 'bg-maroon text-white shadow-md border-gold/40'
                  : 'bg-white text-charcoal/70 hover:bg-gold/10 border-gold/20'
              }`}
            >
              ✨ New Arrivals
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`btn-tactile px-5 py-2 rounded-full text-xs font-bold border ${
                activeTab === 'featured'
                  ? 'bg-maroon text-white shadow-md border-gold/40'
                  : 'bg-white text-charcoal/70 hover:bg-gold/10 border-gold/20'
              }`}
            >
              🔥 Hot Sellers
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Catalogue Support Banner */}
        <div className="mt-14 p-6 md:p-8 bg-gradient-to-r from-maroon via-maroon-dark to-maroon text-white rounded-2xl border border-gold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-gold text-xs font-bold uppercase tracking-wider">
              Looking for our complete PDF Catalogue with 5,000+ Codes?
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Connect Directly with our Jaipur Factory Sales Manager
            </h3>
            <p className="text-xs text-cream/80 max-w-xl">
              We send updated PDF wholesale catalogues, video tours of our inventory, and sample sets daily via WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20please%20send%20me%20your%20complete%205000%2B%20design%20PDF%20catalogue%20with%20codes."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-whatsapp text-white font-bold rounded-xl shadow-lg hover:bg-green-600 text-sm"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Request Full PDF Catalogue</span>
          </a>
        </div>
      </div>
    </section>
  )
}
