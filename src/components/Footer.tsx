'use client'

import React from 'react'
import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Heart
} from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#100609] text-cream border-t border-gold/30">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Contact Us (Exact krishaz format) */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-gold uppercase tracking-wider border-b border-gold/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs text-cream/80">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 block text-[11px]">Call Our Factory:</span>
                  <a href="tel:+919680865791" className="text-white hover:text-gold font-semibold">
                    +91 96808 65791
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 block text-[11px]">WhatsApp Wholesale Desk:</span>
                  <a
                    href="https://wa.me/919680865791"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-whatsapp hover:underline font-semibold"
                  >
                    +91 96808 65791 (Instant Reply)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 block text-[11px]">Office &amp; Factory Hours:</span>
                  <span className="text-white font-medium">10:30 AM to 7:30 PM IST (Mon - Sat)</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 block text-[11px]">Email Inquiries:</span>
                  <a href="mailto:wholesale@shyambabajewellery.com" className="text-white hover:text-gold font-medium">
                    wholesale@shyambabajewellery.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 block text-[11px]">Manufacturing Factory:</span>
                  <span className="text-white/90">
                    Johari Bazar, Near Sanganeri Gate, Jaipur, Rajasthan 302003, India
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation Menu */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-gold uppercase tracking-wider border-b border-gold/20 pb-2">
              Menu &amp; Categories
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs text-cream/70">
              <li>
                <Link href="/collections/earrings" className="hover:text-gold transition-colors">
                  All Earrings
                </Link>
              </li>
              <li>
                <Link href="/collections/silver-earrings" className="hover:text-gold transition-colors">
                  Silver Earrings
                </Link>
              </li>
              <li>
                <Link href="/collections/premium-earrings" className="hover:text-gold transition-colors">
                  Premium Earrings
                </Link>
              </li>
              <li>
                <Link href="/collections/rajwadi" className="hover:text-gold transition-colors">
                  Rajwadi Jhumkas
                </Link>
              </li>
              <li>
                <Link href="/collections/ear-chain" className="hover:text-gold transition-colors">
                  Ear-chain (Kanchain)
                </Link>
              </li>
              <li>
                <Link href="/collections/kundan-earrings" className="hover:text-gold transition-colors">
                  Kundan Earrings
                </Link>
              </li>
              <li>
                <Link href="/collections/anti-tarnish" className="hover:text-gold transition-colors">
                  Anti Tarnish
                </Link>
              </li>
              <li>
                <Link href="/collections/bangles" className="hover:text-gold transition-colors">
                  Bangles &amp; Kadas
                </Link>
              </li>
              <li>
                <Link href="/collections/necklaces" className="hover:text-gold transition-colors">
                  Choker Necklaces
                </Link>
              </li>
              <li>
                <Link href="/#international" className="hover:text-gold transition-colors text-gold">
                  International Buyers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Experience & Wholesale Policies */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-gold uppercase tracking-wider border-b border-gold/20 pb-2">
              Wholesale Policies
            </h3>
            <ul className="space-y-2 text-xs text-cream/70">
              <li>
                <Link href="/#faq" className="hover:text-gold transition-colors">
                  Shipping &amp; Worldwide Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-gold transition-colors">
                  B2B Payment Terms &amp; Wire Transfers
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-gold transition-colors">
                  Returns &amp; Transit Damage Guarantee
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-gold transition-colors">
                  Jaipur Artisan Legacy &amp; Factory Setup
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-gold transition-colors">
                  Minimum Order Value (MOV ₹3,000)
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-gold transition-colors">
                  Custom Casting &amp; Private Label MOQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Brand Mission & Social */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-xl text-white">
                Shyambaba Wholesale
              </span>
            </div>
            <p className="text-xs text-cream/70 leading-relaxed">
              India&apos;s trusted wholesale brass jewellery manufacturer. We build lifelong partnerships with resellers, 
              supplying timeless Indian jewellery with verified quality, zero traders, and honest factory pricing.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-2">
                Connect With Our Factory
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold hover:text-maroon flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95 text-xs font-bold"
                  aria-label="Instagram"
                >
                  📸
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold hover:text-maroon flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95 text-xs font-bold"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold hover:text-maroon flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95 text-xs font-bold"
                  aria-label="YouTube"
                >
                  ▶
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-cream/50 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Shyambaba Wholesale Jewellery. All rights reserved. Handcrafted with pride in Jaipur, Rajasthan, India.
          </p>
          <div className="flex items-center gap-4 text-cream/60">
            <span>Powered by Payload CMS &amp; Next.js</span>
            <span>•</span>
            <Link href="/admin" className="hover:text-gold font-bold">
              CMS Admin Panel ↗
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
