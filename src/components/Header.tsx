'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import {
  Menu,
  X,
  Search,
  ChevronRight,
  MessageCircle,
  Video,
  HelpCircle,
  MapPin,
  Info,
  Users2,
} from 'lucide-react'

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const menuItems = [
    {
      name: 'FAQ',
      href: '/#faq',
      isExternal: false,
      icon: HelpCircle,
    },
    {
      name: 'Book a Video Call',
      href: 'https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20want%20to%20book%20a%20live%20video%20call%20for%20wholesale%20selection',
      isExternal: true,
      icon: Video,
    },
    {
      name: 'Daily Updates WhatsApp Group',
      href: 'https://chat.whatsapp.com/H1jvdlP82xuLcoAl6TlRm3',
      isExternal: true,
      icon: MessageCircle,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/shreeshyambabajewellers/',
      isExternal: true,
      icon: InstagramIcon,
    },
    {
      name: 'Google Map',
      href: 'https://maps.app.goo.gl/61ARaZmn6tniBYQS6',
      isExternal: true,
      icon: MapPin,
    },
    {
      name: 'About Us',
      href: '/#about',
      isExternal: false,
      icon: Info,
    },
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
      {/* Top Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[82px] sm:h-24 md:h-28">
          {/* Left: Mobile Hamburger Menu Button */}
          <div className="flex items-center w-9 sm:w-12 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -ml-1 text-[#121212] hover:text-[#195799] active:scale-95 transition-transform duration-150 focus-visible:outline-none rounded-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
            </button>
          </div>

          {/* Desktop Left Spacer to balance layout */}
          <div className="hidden lg:flex items-center w-24" />

          {/* Center: Brand Name 'ShyamBaba' and 'Wholesale' stacked in new line centered */}
          <div className="flex-1 flex justify-center text-center px-1">
            <Link
              href="/"
              className="flex flex-col items-center justify-center select-none py-1 group"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-[26px] xs:text-[30px] sm:text-[36px] md:text-[40px] font-normal tracking-tight text-[#111111] leading-none group-hover:text-[#195799] transition-colors duration-200 block"
              >
                ShyamBaba
              </span>
              <span
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[17px] font-normal tracking-[0.28em] uppercase text-[#333333] leading-none group-hover:text-[#195799] transition-colors duration-200 block mt-1.5"
              >
                Wholesale
              </span>
            </Link>
          </div>

          {/* Right: Search button */}
          <div className="flex items-center justify-end w-9 sm:w-12 lg:w-24">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 -mr-1 text-[#121212] hover:text-[#195799] active:scale-95 transition-transform duration-150 focus-visible:outline-none rounded-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Search"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
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

      {/* Desktop Navigation Row: Black Buttons with White Font */}
      <nav className="hidden lg:block border-t border-neutral-200/70 bg-[#FAF8F5] py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black hover:bg-neutral-800 active:scale-95 text-white font-medium text-[13px] tracking-wide transition-all shadow-sm"
                  >
                    <span>{item.name}</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black hover:bg-neutral-800 active:scale-95 text-white font-medium text-[13px] tracking-wide transition-all shadow-sm"
                  >
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Teleported to document.body */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] lg:hidden transition-all duration-300 ${
              mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            }`}
            aria-hidden={!mobileMenuOpen}
          >
            {/* Dark Backdrop Overlay */}
            <div
              className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
                mobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Drawer Panel */}
            <div
              className={`fixed top-0 bottom-0 left-0 w-[85%] max-w-[340px] sm:max-w-[360px] h-full h-[100dvh] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-10 ${
                mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{
                paddingTop: 'env(safe-area-inset-top, 0px)',
                paddingBottom: 'env(safe-area-inset-bottom, 0px)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar of Drawer: Close 'X' on left, Brand in center stacked */}
              <div className="flex items-center justify-between px-4 sm:px-6 h-[76px] sm:h-20 border-b border-[#ECE6DC] bg-white flex-shrink-0">
                {/* Left: Close X button */}
                <div className="flex items-center w-10">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 -ml-2 text-[#121212] hover:text-[#195799] active:scale-95 transition-transform rounded-lg focus-visible:outline-none"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 stroke-[1.8]" />
                  </button>
                </div>

                {/* Center: Brand Name Stacked */}
                <div className="flex-1 flex justify-center text-center px-1">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center justify-center select-none py-1 group"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      className="text-[20px] sm:text-[22px] font-normal tracking-tight text-[#111111] leading-none"
                    >
                      ShyamBaba
                    </span>
                    <span
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      className="text-[10.5px] sm:text-[11.5px] font-normal tracking-[0.25em] uppercase text-[#333333] leading-none mt-1"
                    >
                      Wholesale
                    </span>
                  </Link>
                </div>

                {/* Right: Balanced Empty Spacer */}
                <div className="w-10" aria-hidden="true" />
              </div>

              {/* Drawer Body: Black Buttons with White Font */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-5 py-6">
                <ul className="space-y-3">
                  {menuItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <li key={item.name}>
                        {item.isExternal ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full py-3.5 px-4 rounded-xl bg-black hover:bg-neutral-800 active:scale-98 text-white font-semibold text-[13.5px] sm:text-[14.5px] tracking-wide transition-all shadow-sm flex items-center justify-between text-left"
                          >
                            <span className="flex items-center gap-2.5">
                              <IconComponent className="w-4 h-4 text-white/80 flex-shrink-0" />
                              <span>{item.name}</span>
                            </span>
                            <ChevronRight className="w-4 h-4 text-white/50 flex-shrink-0" />
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full py-3.5 px-4 rounded-xl bg-black hover:bg-neutral-800 active:scale-98 text-white font-semibold text-[13.5px] sm:text-[14.5px] tracking-wide transition-all shadow-sm flex items-center justify-between text-left"
                          >
                            <span className="flex items-center gap-2.5">
                              <IconComponent className="w-4 h-4 text-white/80 flex-shrink-0" />
                              <span>{item.name}</span>
                            </span>
                            <ChevronRight className="w-4 h-4 text-white/50 flex-shrink-0" />
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>

                {/* Direct WhatsApp Quick Chat Bar */}
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <a
                    href="https://wa.me/919680865791?text=Hello%20Shyambaba%20Wholesale%2C%20I%20have%20an%20inquiry%20regarding%20wholesale%20jewellery."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.985] text-white rounded-xl flex items-center justify-center gap-2 font-semibold text-[13.5px] shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Direct Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  )
}
