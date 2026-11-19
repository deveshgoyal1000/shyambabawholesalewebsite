'use client'

import React from 'react'
import { CountryWholesaleInfo } from '@/data/internationalCountries'
import {
  ExternalLink,
  Video,
  CheckCircle2,
  Truck,
  Sparkles,
  ShoppingBag,
  Calculator,
  Shuffle,
  ShieldCheck,
  Building2,
  ChevronRight,
  Info,
} from 'lucide-react'

interface CountryWholesaleTermsProps {
  country: CountryWholesaleInfo
}

export default function CountryWholesaleTerms({ country }: CountryWholesaleTermsProps) {
  const videoCallMessage = encodeURIComponent(
    `Hi Shree Shyam Baba Jewellers, I am from ${country.shortName}. I WANT TO BOOK A VIDEO CALL for wholesale selection.`
  )
  const videoCallUrl = `https://wa.me/919680865791?text=${videoCallMessage}`
  const catalogueUrl = 'https://wa.me/c/919680865791'

  return (
    <section className="bg-white rounded-3xl border border-[#E5DAC1] shadow-[0_12px_45px_rgba(0,0,0,0.05)] overflow-hidden my-8 sm:my-10 select-none">
      {/* 🌟 1. Royal Navy Header Banner */}
      <div className="bg-gradient-to-r from-[#0F2D4A] via-[#163A5F] to-[#0F2D4A] text-white p-6 sm:p-8 text-center relative overflow-hidden">
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#C9A84C]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block px-3.5 py-1 bg-[#C9A84C] text-[#0F2D4A] font-extrabold text-[11px] sm:text-xs rounded-full uppercase tracking-wider mb-3 shadow-xs">
            🌟 Wholesale Terms &amp; Conditions
          </span>

          <h2
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-3 flex-wrap"
          >
            <div className="w-8 h-5.5 rounded-xs overflow-hidden border border-white/40 shadow-xs flex-shrink-0 inline-block align-middle">
              <img src={country.flag} alt={country.country} className="w-full h-full object-cover" />
            </div>
            <span>EXCLUSIVE FOR {country.shortName.toUpperCase()} CLIENTS</span>
          </h2>

          {/* Elegant Gold Note without box */}
          <p className="mt-3 text-[#FFD770] text-xs sm:text-sm font-medium tracking-wide">
            👉 Note: Please read <strong className="font-bold underline decoration-[#FFD770]/60 underline-offset-4">Point No. 5</strong> carefully before proceeding.
          </p>
        </div>
      </div>

      {/* 💎 2. Brand Heritage Seal */}
      <div className="py-6 px-5 sm:px-8 border-b border-[#EFE9DF] bg-[#FAF8F5] text-center">
        <div className="max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center justify-center gap-2 text-[#0F2D4A] font-bold text-sm sm:text-base tracking-wide uppercase">
            <Building2 className="w-4 h-4 text-[#C9A84C]" />
            <span>SHREE SHYAM BABA JEWELLERS</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium">
            Manufacturer &amp; Wholesaler &bull; Jaipur, India &bull; Established in 1998
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 max-w-lg mx-auto">
            Welcome to <strong className="text-neutral-900 font-semibold">Shree Shyam Baba Jewellers</strong>! We manufacture and wholesale premium imitation jewellery, supplying boutique owners, retailers and resellers across {country.shortName} and worldwide with factory-direct pricing.
          </p>
        </div>
      </div>

      {/* 📜 3. Luxury Terms & Conditions Cards */}
      <div className="p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 text-[#2C2C2C]">

        {/* Card 1: Wholesale Price Calculation */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#C9A84C] hover:shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#0F2D4A] text-white font-bold text-xs flex items-center justify-center shrink-0">
              01
            </span>
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#C9A84C]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                WHOLESALE PRICE CALCULATION
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed">
            Our wholesale pricing follows a transparent multiplier system:
          </p>

          <div className="bg-white border-2 border-[#0F2D4A]/20 rounded-xl py-3.5 px-4 text-center my-2 shadow-xs">
            <span
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-base sm:text-xl font-bold text-[#0F2D4A] tracking-wider"
            >
              Product Code &times; 3.6 = Wholesale Price (INR)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed flex items-center gap-2 mt-3 pt-2 border-t border-neutral-200/70">
            <Info className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
            <span>The product code in our catalogue is used to calculate the final wholesale price in Indian Rupees (INR).</span>
          </p>
        </div>

        {/* Card 2: View Our Jewellery Catalogue */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#C9A84C] hover:shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#0F2D4A] text-white font-bold text-xs flex items-center justify-center shrink-0">
              02
            </span>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C9A84C]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                VIEW OUR JEWELLERY CATALOGUE
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mb-4 leading-relaxed">
            Explore our curated jewellery designs and trending collections through our verified WhatsApp Catalogue.
          </p>

          <div className="my-3">
            <a
              href={catalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span>Open WhatsApp Catalogue</span>
              <ExternalLink className="w-4 h-4 text-white/90" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed flex items-center gap-2 mt-3 pt-2 border-t border-neutral-200/70">
            <Info className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
            <span>Our catalogue is provided for design ideas, trending aesthetics, and product reference only.</span>
          </p>
        </div>

        {/* Card 3: Minimum Order Value */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#C9A84C] hover:shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#0F2D4A] text-white font-bold text-xs flex items-center justify-center shrink-0">
              03
            </span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C9A84C]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                MINIMUM ORDER VALUE (MOV)
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mb-3 leading-relaxed">
            We support both domestic boutiques and international export orders:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div className="bg-white border border-neutral-200 rounded-xl p-4 text-center">
              <span className="text-xs text-neutral-500 block uppercase font-semibold tracking-wider mb-1">
                Domestic Orders (India)
              </span>
              <span className="text-lg sm:text-xl font-bold text-neutral-800 flex items-center justify-center gap-2">
                <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-3.5 rounded-xs object-cover border border-neutral-200" />
                <span>&#8377;10,000/-</span>
              </span>
            </div>

            <div className="bg-white border-2 border-[#0F2D4A] rounded-xl p-4 text-center shadow-xs">
              <span className="text-xs text-[#0F2D4A] block uppercase font-bold tracking-wider mb-1">
                International Orders ({country.shortName})
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-[#0F2D4A] flex items-center justify-center gap-2">
                <img src={country.flag} alt={country.country} className="w-5 h-3.5 rounded-xs object-cover border border-neutral-200" />
                <span>&#8377;20,000/-</span>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed flex items-center gap-2 mt-3 pt-2 border-t border-neutral-200/70">
            <Info className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
            <span>Please ensure your selected order meets the applicable minimum order value for smooth dispatch.</span>
          </p>
        </div>

        {/* Card 4: Mix & Match */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#C9A84C] hover:shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#0F2D4A] text-white font-bold text-xs flex items-center justify-center shrink-0">
              04
            </span>
            <div className="flex items-center gap-2">
              <Shuffle className="w-5 h-5 text-[#C9A84C]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                MIX &amp; MATCH &mdash; MULTIPLE DESIGNS ALLOWED
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-neutral-800 mb-3">
            We provide complete flexibility in your stock curation:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="bg-white p-3.5 rounded-xl border border-neutral-200 text-left">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-xs font-semibold text-neutral-800">Across Categories</p>
              <p className="text-[11px] text-neutral-500 mt-0.5">Select earrings, necklaces, bangles &amp; sets freely.</p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-neutral-200 text-left">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-xs font-semibold text-neutral-800">Custom Quantities</p>
              <p className="text-[11px] text-neutral-500 mt-0.5">Mix multiple designs without forced bulk bundles.</p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-neutral-200 text-left">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-xs font-semibold text-neutral-800">Boutique Tailored</p>
              <p className="text-[11px] text-neutral-500 mt-0.5">Build collections tailored to your local customer tastes.</p>
            </div>
          </div>

          <p className="text-xs text-neutral-500 italic mt-2">
            * There is no restriction on mixing designs, subject to ready workshop availability.
          </p>
        </div>

        {/* 🌟 Card 5: Product Availability & Order Confirmation (LUXURY EXECUTIVE DESIGN) */}
        <div className="bg-gradient-to-br from-[#0F2D4A] via-[#163A5F] to-[#0A2239] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#C9A84C]/40 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Badge */}
            <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#FFD770] text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Point 05 &bull; Important Wholesale Policy</span>
              </div>
              <span className="text-[11px] font-semibold text-neutral-300 tracking-wider uppercase">
                Please Read Carefully
              </span>
            </div>

            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-lg sm:text-2xl font-bold text-white tracking-tight mb-4"
            >
              PRODUCT AVAILABILITY &amp; ORDER CONFIRMATION
            </h3>

            {/* 3 Clear Bullet Points */}
            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-200 leading-relaxed mb-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></span>
                </div>
                <span>
                  <strong className="text-white">Extensive Handcrafted Variety:</strong> We produce thousands of imitation jewellery designs. Our website displays reference designs to showcase our craftsmanship, with fresh designs crafted regularly.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></span>
                </div>
                <span>
                  <strong className="text-white">Direct Jaipur Factory:</strong> We are authentic manufacturers and primary wholesalers based in Johari Bazaar, Jaipur.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></span>
                </div>
                <span>
                  <strong className="text-white">Real-Time Stock Confirmation:</strong> As ready pieces move swiftly to wholesale buyers, exact availability is verified directly with our team.
                </span>
              </div>
            </div>

            {/* VIP Video Call Box */}
            <div className="bg-white/10 backdrop-blur-md border border-[#C9A84C]/50 rounded-xl p-5 sm:p-6 text-center my-4">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-[#0F2D4A] flex items-center justify-center mx-auto mb-3 shadow-md">
                <Video className="w-6 h-6" />
              </div>

              <h4
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-base sm:text-lg font-bold text-white tracking-wide mb-1"
              >
                ALL WHOLESALE ORDERS ARE CONFIRMED EXCLUSIVELY THROUGH LIVE VIDEO CALLS
              </h4>

              <p className="text-xs sm:text-sm text-[#FFD770] font-semibold mb-4">
                ✨ Video consultations are 100% FREE &mdash; NO CONSULTATION CHARGES!
              </p>

              <a
                href={videoCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-xs sm:text-sm shadow-lg transition-transform"
              >
                <Video className="w-4 h-4 text-white" />
                <span>Book Free Video Call for {country.shortName} &rarr;</span>
              </a>
            </div>

            <p className="text-[11px] sm:text-xs text-neutral-300 text-center mt-3">
              Book a live video call with our team to inspect finishing, stone setting, and select ready inventory.
            </p>
          </div>
        </div>

        {/* Card 6: International Shipping & Delivery */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#C9A84C] hover:shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#0F2D4A] text-white font-bold text-xs flex items-center justify-center shrink-0">
              06
            </span>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#C9A84C]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827] flex items-center gap-2">
                <span>INTERNATIONAL SHIPPING &amp; DELIVERY</span>
                <img src={country.flag} alt={country.country} className="w-5 h-3.5 rounded-xs object-cover border border-neutral-200" />
              </h3>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-600">
            <div>
              <p className="font-semibold text-neutral-900 mb-2">
                Shipping charges depend transparently on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="bg-white p-3 rounded-xl border border-neutral-200 text-center">
                  <span className="text-[11px] text-neutral-500 uppercase block font-semibold">Weight</span>
                  <span className="font-bold text-neutral-800 text-xs sm:text-sm">Total Parcel Weight</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-neutral-200 text-center">
                  <span className="text-[11px] text-neutral-500 uppercase block font-semibold">Destination</span>
                  <span className="font-bold text-neutral-800 text-xs sm:text-sm">{country.country}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-neutral-200 text-center">
                  <span className="text-[11px] text-neutral-500 uppercase block font-semibold">Courier Partner</span>
                  <span className="font-bold text-neutral-800 text-xs sm:text-sm">{country.courierPartner}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <p className="font-semibold text-neutral-900 mb-2">
                Choose between two convenient shipping options:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0F2D4A] text-white text-[11px] font-bold flex items-center justify-center shrink-0">1</span>
                  <span className="font-semibold text-neutral-800">Self Service Shipping</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-neutral-200 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0F2D4A] text-white text-[11px] font-bold flex items-center justify-center shrink-0">2</span>
                  <span className="font-semibold text-neutral-800">Fast Express Doorstep Delivery</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-500 flex items-center gap-2 pt-2 border-t border-neutral-200/70">
              <Info className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
              <span>Final shipping invoice is calculated and shared after your video selection and parcel weighing.</span>
            </p>
          </div>
        </div>

        {/* Card 7: How to Place a Wholesale Order */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#C9A84C] hover:shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#0F2D4A] text-white font-bold text-xs flex items-center justify-center shrink-0">
              07
            </span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C9A84C]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                HOW TO PLACE A WHOLESALE ORDER
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mb-4">
            Our wholesale ordering process is straightforward, secure, and personalized:
          </p>

          <div className="space-y-2.5 text-xs sm:text-sm">
            {[
              { step: '01', title: 'Browse Catalogue', desc: 'Browse our WhatsApp Catalogue and explore design categories.' },
              { step: '02', title: 'Shortlist Codes', desc: 'Note down product codes and styles you are interested in.' },
              { step: '03', title: 'Schedule Video Call', desc: 'Message our team on WhatsApp to book your 100% free live showroom tour.' },
              { step: '04', title: 'Live Selection', desc: 'Our team shows you ready pieces on video and confirms inventory availability.' },
              { step: '05', title: 'Dispatch & Delivery', desc: 'Finalise order, confirm shipping details, and receive doorstep delivery.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-neutral-200">
                <span className="w-6 h-6 rounded-md bg-[#0F2D4A] text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {item.step}
                </span>
                <div>
                  <span className="font-bold text-[#0F2D4A] block sm:inline sm:mr-2">{item.title}:</span>
                  <span className="text-neutral-600">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ❤️ 4. Executive Call-to-Action Card */}
      <div className="bg-gradient-to-b from-[#FAF5E8] to-[#F3EAD3] p-7 sm:p-10 text-center border-t border-[#E8DEC8]">
        <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-widest block mb-2">
          Ready to Start Your Wholesale Journey?
        </span>

        <h3
          style={{ fontFamily: 'Georgia, serif' }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827] max-w-lg mx-auto leading-snug mb-3"
        >
          Schedule your free showroom video consultation today
        </h3>

        <div className="bg-white border-2 border-dashed border-[#0F2D4A]/30 rounded-2xl py-3 px-5 max-w-md mx-auto mb-4 shadow-2xs">
          <p className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">Message Us On WhatsApp:</p>
          <p className="text-base sm:text-lg font-bold text-[#0F2D4A] mt-0.5">
            &ldquo;I WANT TO BOOK A VIDEO CALL&rdquo;
          </p>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
          Our senior sales team will guide you through current ready stock, pricing, and assist you with your personalized selection.
        </p>

        <a
          href={videoCallUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0F2D4A] hover:bg-[#163A5F] active:scale-98 text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all"
        >
          <Video className="w-5 h-5 text-[#C9A84C]" />
          <span>Book Free Video Consultation &rarr;</span>
        </a>
      </div>

      {/* 💎 5. Prestigious Brand Seal Footer */}
      <div className="bg-[#0A1624] text-neutral-300 p-7 sm:p-9 text-center text-xs space-y-2 border-t border-neutral-800">
        <p className="font-extrabold text-white text-sm sm:text-base tracking-widest flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#C9A84C]" />
          <span>SHREE SHYAM BABA JEWELLERS</span>
          <Sparkles className="w-4 h-4 text-[#C9A84C]" />
        </p>
        <p className="text-neutral-400 font-medium">
          Established in 1998 &bull; In-House Manufacturer &amp; Wholesaler of Imitation Jewellery
        </p>
        <p className="text-neutral-400">
          Johari Bazaar, Jaipur, Rajasthan, India
        </p>
        <p className="text-[#C9A84C] font-semibold pt-1">
          Serving Boutiques &amp; Retailers Across {country.shortName} &amp; Worldwide
        </p>
        <p className="text-neutral-500 text-[11px] pt-1">
          Quality Designs &bull; Trusted Manufacturing &bull; Wholesale Excellence
        </p>
      </div>
    </section>
  )
}
