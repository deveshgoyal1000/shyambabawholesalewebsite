'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Search,
  ChevronLeft,
  MessageCircle,
} from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<'more-products' | 'international' | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setActiveSubmenu(null)
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'All Earrings', href: '/collections/earrings' },
    { name: 'Silver Earrings', href: '/collections/silver-earrings' },
    { name: 'Premium Earrings', href: '/collections/premium-earrings' },
    { name: 'Rajwadi', href: '/collections/rajwadi' },
    { name: 'Ear-chain', href: '/collections/ear-chain' },
    { name: 'Kundan Earrings', href: '/collections/kundan-earrings' },
    { name: 'Anti Tarnish', href: '/collections/anti-tarnish' },
    { name: 'Bangles', href: '/collections/bangles' },
    { name: 'Necklaces', href: '/collections/necklaces' },
  ]

  const moreProductsList = [
    { name: 'All Wholesale Jewellery', href: '/collections/all' },
    { name: 'Studs & Tops', href: '/collections/studs' },
    { name: 'Kundan & Jadau', href: '/collections/kundan-earrings' },
    { name: 'Anti-Tarnish Collection', href: '/collections/anti-tarnish' },
    { name: 'Bangles & Kadas', href: '/collections/bangles' },
    { name: 'Necklaces & Sets', href: '/collections/necklaces' },
    { name: 'New Arrivals (This Week)', href: '/collections/new-arrivals' },
  ]

  const internationalList = [
    { name: '50+ Countries Overview', href: '/#international' },
    { name: 'United States (USA)', href: '/international/united-states' },
    { name: 'United Kingdom (UK)', href: '/international/united-kingdom' },
    { name: 'Canada', href: '/international/canada' },
    { name: 'Australia', href: '/international/australia' },
    { name: 'United Arab Emirates (UAE)', href: '/international/united-arab-emirates' },
    { name: 'Germany & EU', href: '/international/germany' },
    { name: 'Singapore', href: '/international/singapore' },
    { name: 'Malaysia', href: '/international/malaysia' },
  ]

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300 ease-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.06)] border-b border-[#EAE3D8]'
          : 'bg-white border-b border-[#EAE3D8]/80'
      }`}
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}
    >
      {/* Top Main Navigation Bar - Extra tall, airy, luxury layout matching Krishaz */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px] sm:h-28 md:h-32">
          {/* Left: Mobile Hamburger Menu Button - Refined compact icon */}
          <div className="flex items-center w-11 sm:w-16">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -ml-2 text-[#121212] hover:text-[#195799] active:scale-95 transition-transform duration-150 focus-visible:outline-none rounded-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 stroke-[1.8]" />
            </button>
          </div>

          {/* Center: Brand Name 'ShyamBabaWholesale' matching Screenshot */}
          <div className="flex-1 flex justify-center text-center px-1">
            <Link
              href="/"
              className="inline-flex items-center select-none py-1 group"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] font-normal tracking-tight text-[#111111] leading-none group-hover:text-[#195799] transition-colors duration-200 whitespace-nowrap"
              >
                ShyamBabaWholesale
              </span>
            </Link>
          </div>

          {/* Right: Search button - Refined compact icon */}
          <div className="flex items-center justify-end w-11 sm:w-16">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 -mr-2 text-[#121212] hover:text-[#195799] active:scale-95 transition-transform duration-150 focus-visible:outline-none rounded-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Search"
            >
              <Search className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 stroke-[1.8]" />
            </button>
          </div>
        </div>

        {/* Collapsible Search Input with smooth animation */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            searchOpen ? 'max-h-16 opacity-100 pb-3 pt-1 border-t border-neutral-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search Product Code (e.g. ER-4272, ER-001)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-full focus:outline-none focus:border-[#195799] focus:ring-1 focus:ring-[#195799]"
              autoFocus={searchOpen}
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Desktop Navigation Row matching Krishaz: Assistant, 14px, #121212, font-weight: 400 */}
      <nav className="hidden lg:block border-t border-neutral-100 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            style={{ fontFamily: "'Assistant', -apple-system, sans-serif" }}
            className="flex items-center justify-between text-[14px] font-normal text-[#121212] py-2.5"
          >
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="nav-link-indicator text-[#121212] hover:text-[#195799] transition-colors py-1 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#international" className="nav-link-indicator text-[#195799] font-semibold hover:text-[#124378] transition-colors py-1 inline-block">
                International Buyers
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="nav-link-indicator text-[#121212] hover:text-[#195799] transition-colors py-1 inline-block">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/#about" className="nav-link-indicator text-[#121212] hover:text-[#195799] transition-colors py-1 inline-block">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu - EXACT Shopify Dawn / Krishaz Theme Layout & Animations */}
      <div
        className={`fixed inset-0 z-50 bg-black/45 backdrop-blur-[1px] lg:hidden transition-opacity duration-300 ease-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`w-[85%] max-w-[360px] h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar of Drawer - Matches Screenshot: Close 'X' on left, Logo in center, Search & Bag on right */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-[72px] sm:h-20 border-b border-[#ECE6DC] bg-white flex-shrink-0">
            {/* Left: Close X button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -ml-2 text-[#121212] hover:text-[#195799] active:scale-95 transition-transform rounded-lg focus-visible:outline-none"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 stroke-[1.8]" />
            </button>

            {/* Center: Brand Name matching Header */}
            <div className="flex-1 flex justify-center text-center px-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="select-none py-1"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <span
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  className="text-[20px] sm:text-[22px] font-normal tracking-tight text-[#111111] leading-none"
                >
                  ShyamBabaWholesale
                </span>
              </Link>
            </div>

            {/* Right: Search Icon */}
            <div className="flex items-center -mr-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setSearchOpen(true)
                }}
                className="p-2 text-[#121212] hover:text-[#195799] active:scale-95 transition-transform"
                style={{ WebkitTapHighlightColor: 'transparent' }}
                aria-label="Search catalogue"
              >
                <Search className="w-5 h-5 stroke-[1.8]" />
              </button>
            </div>
          </div>

          {/* Drawer Body with Shopify Two-Level Sliding Navigation */}
          <div className="relative flex-1 overflow-hidden">
            {/* 1. Main Menu Level */}
            <div
              className={`absolute inset-0 overflow-y-auto pb-8 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                activeSubmenu ? '-translate-x-full pointer-events-none' : 'translate-x-0'
              }`}
            >
              <nav
                style={{ fontFamily: "'Assistant', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                className="py-2"
              >
                <ul className="text-[16px] sm:text-[17px] font-normal text-[#121212]">
                  {/* Primary Categories from Screenshot */}
                  <li>
                    <Link
                      href="/collections/earrings"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    >
                      All Earrings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/silver-earrings"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    >
                      Silver Earrings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/premium-earrings"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    >
                      Premium Earrings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/rajwadi"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    >
                      Rajwadi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/ear-chain"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    >
                      Ear-chain
                    </Link>
                  </li>

                  {/* More Products with Slide-in Chevron matching Screenshot */}
                  <li>
                    <button
                      onClick={() => setActiveSubmenu('more-products')}
                      className="w-full flex items-center justify-between py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors text-left focus-visible:outline-none"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <span>More Products</span>
                      <span className="text-neutral-500 font-normal text-[17px]">&rarr;</span>
                    </button>
                  </li>

                  {/* International Buyers with Slide-in Chevron matching Screenshot */}
                  <li>
                    <button
                      onClick={() => setActiveSubmenu('international')}
                      className="w-full flex items-center justify-between py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors text-left focus-visible:outline-none"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <span>International Buyers</span>
                      <span className="text-neutral-500 font-normal text-[17px]">&rarr;</span>
                    </button>
                  </li>

                  {/* Book Video Call matching Screenshot */}
                  <li>
                    <a
                      href="https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20live%20video%20call%20for%20wholesale%20selection"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    >
                      <span>Book Video Call</span>
                    </a>
                  </li>

                  {/* FAQs matching Screenshot */}
                  <li>
                    <Link
                      href="/#faq"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    >
                      FAQs
                    </Link>
                  </li>

                  {/* Resources matching Screenshot */}
                  <li>
                    <Link
                      href="/#about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    >
                      Resources
                    </Link>
                  </li>

                  {/* About us matching Screenshot */}
                  <li>
                    <Link
                      href="/#about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3.5 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    >
                      About us
                    </Link>
                  </li>
                </ul>

                {/* Bottom Section - Direct WhatsApp Support */}
                <div className="mt-6 pt-6 border-t border-neutral-100 px-6 sm:px-8">
                  {/* Direct Contact Button */}
                  <a
                    href="https://wa.me/919680865791"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.985] text-white rounded-full flex items-center justify-center gap-2 font-semibold text-[13.5px] shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Order Support</span>
                  </a>
                </div>
              </nav>
            </div>

            {/* 2. Submenu Level: More Products (Shopify Dawn Slide-in Animation) */}
            <div
              className={`absolute inset-0 overflow-y-auto pb-8 bg-white transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                activeSubmenu === 'more-products' ? 'translate-x-0' : 'translate-x-full pointer-events-none'
              }`}
            >
              <div className="py-2">
                {/* Back Button matching Shopify Dawn */}
                <button
                  onClick={() => setActiveSubmenu(null)}
                  className="w-full flex items-center gap-2.5 py-4 px-6 sm:px-8 text-[15px] font-semibold text-[#121212] border-b border-neutral-100 hover:text-[#195799] hover:bg-neutral-50 transition-colors focus-visible:outline-none"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2]" />
                  <span>More Products</span>
                </button>

                <ul
                  style={{ fontFamily: "'Assistant', -apple-system, sans-serif" }}
                  className="text-[16px] font-normal text-[#121212] py-2"
                >
                  {moreProductsList.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Submenu Level: International Buyers (Shopify Dawn Slide-in Animation) */}
            <div
              className={`absolute inset-0 overflow-y-auto pb-8 bg-white transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                activeSubmenu === 'international' ? 'translate-x-0' : 'translate-x-full pointer-events-none'
              }`}
            >
              <div className="py-2">
                {/* Back Button matching Shopify Dawn */}
                <button
                  onClick={() => setActiveSubmenu(null)}
                  className="w-full flex items-center gap-2.5 py-4 px-6 sm:px-8 text-[15px] font-semibold text-[#121212] border-b border-neutral-100 hover:text-[#195799] hover:bg-neutral-50 transition-colors focus-visible:outline-none"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2]" />
                  <span>International Buyers</span>
                </button>

                <ul
                  style={{ fontFamily: "'Assistant', -apple-system, sans-serif" }}
                  className="text-[16px] font-normal text-[#121212] py-2"
                >
                  {internationalList.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 px-6 sm:px-8 hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
