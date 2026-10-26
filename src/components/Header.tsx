'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Search,
  MessageCircle,
  Phone
} from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
          {/* Left: Mobile Hamburger Menu Button */}
          <div className="flex items-center w-14 sm:w-20">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-3 -ml-2 text-[#121212] hover:text-[#195799] active:scale-95 transition-transform duration-150 focus-visible:outline-none rounded-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Open navigation menu"
            >
              <Menu className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
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

          {/* Right: Search only (Cart & Wishlist removed) */}
          <div className="flex items-center justify-end w-14 sm:w-20">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-3 -mr-2 text-[#121212] hover:text-[#195799] active:scale-95 transition-transform duration-150 focus-visible:outline-none rounded-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Search"
            >
              <Search className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 stroke-[1.8]" />
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

      {/* Desktop Navigation Row matching Inspector: Assistant, 14px, #121212, font-weight: 400 */}
      <nav className="hidden lg:block border-t border-neutral-100 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            style={{ fontFamily: "'Assistant', sans-serif" }}
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

      {/* Mobile Drawer Menu with smooth slide-in transition */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`w-4/5 max-w-sm h-full bg-[#FAF8F5] p-6 overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
            <span style={{ fontFamily: 'Georgia, serif' }} className="text-xl font-bold text-[#195799]">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-neutral-800 hover:text-[#195799] active:scale-95 transition-all rounded-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links matching Inspector: Assistant, 14px, #121212, 400 */}
          <ul
            style={{ fontFamily: "'Assistant', sans-serif" }}
            className="space-y-3.5 text-[14px] font-normal text-[#121212]"
          >
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-[#121212] hover:text-[#195799] transition-colors border-b border-neutral-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <Link
                href="/#international"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#195799] font-semibold border-b border-neutral-100"
              >
                International Buyers 🌍
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#121212] hover:text-[#195799] transition-colors border-b border-neutral-100"
              >
                Wholesale FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#121212] hover:text-[#195799] transition-colors border-b border-neutral-100"
              >
                About Our Jaipur Factory
              </Link>
            </li>
          </ul>

          {/* Drawer Footer Actions */}
          <div className="mt-8 pt-6 border-t border-neutral-200 space-y-3">
            <a
              href="https://wa.me/919680865791"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.985] text-white rounded-xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Direct Order
            </a>
            <a
              href="tel:+919680865791"
              className="btn-tactile w-full py-2.5 px-4 border border-[#195799] text-[#195799] hover:bg-[#195799]/5 active:scale-[0.985] rounded-xl flex items-center justify-center gap-2 font-semibold text-xs"
            >
              <Phone className="w-4 h-4" />
              Call +91 96808 65791
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
