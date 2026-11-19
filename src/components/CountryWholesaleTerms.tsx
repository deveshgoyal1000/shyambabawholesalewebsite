'use client'

import React from 'react'
import { CountryWholesaleInfo } from '@/data/internationalCountries'
import {
  ExternalLink,
  Video,
  CheckCircle2,
  Truck,
  ShoppingBag,
  Calculator,
  Shuffle,
  Building2,
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
    <section className="bg-white rounded-3xl border border-[#E5DAC1] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden my-8 sm:my-10 select-none">
      {/* 1. Header Banner */}
      <div className="bg-[#195799] text-white p-6 sm:p-8 text-center relative">
        <div>
          <span className="inline-block px-3.5 py-1 bg-amber-400 text-neutral-900 font-extrabold text-[11px] sm:text-xs rounded-full uppercase tracking-wider mb-2.5 shadow-xs">
            Wholesale Terms &amp; Conditions
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

          <p className="mt-2.5 text-amber-200 text-xs sm:text-sm font-medium tracking-wide">
            Note: Please read <strong className="font-bold underline underline-offset-4">Point No. 5</strong> carefully before proceeding.
          </p>
        </div>
      </div>

      {/* 2. Brand Heritage Seal */}
      <div className="py-6 px-5 sm:px-8 border-b border-[#EFE9DF] bg-[#FAF8F5] text-center">
        <div className="max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center justify-center gap-2 text-[#195799] font-bold text-sm sm:text-base tracking-wide uppercase">
            <Building2 className="w-4 h-4 text-[#C9A84C]" />
            <span>SHREE SHYAM BABA JEWELLERS</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium">
            Manufacturer &amp; Wholesaler &bull; Jaipur, India &bull; Established in 1998
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 max-w-lg mx-auto">
            Welcome to <strong className="text-neutral-900 font-semibold">Shree Shyam Baba Jewellers</strong>! We manufacture and wholesale imitation jewellery, supplying boutique owners, retailers and resellers across {country.shortName} and worldwide with factory-direct pricing.
          </p>
        </div>
      </div>

      {/* 3. Terms & Conditions Cards */}
      <div className="p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 text-[#2C2C2C]">

        {/* Card 1: Wholesale Price Calculation */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#195799] hover:shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#195799] text-white font-bold text-xs flex items-center justify-center shrink-0">
              01
            </span>
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#195799]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                WHOLESALE PRICE CALCULATION
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mb-3 leading-relaxed">
            Our wholesale pricing follows a transparent multiplier system:
          </p>

          <div className="bg-white border-2 border-[#195799] rounded-xl py-3.5 px-4 text-center my-2 shadow-xs">
            <span
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-base sm:text-xl font-bold text-[#195799] tracking-wider"
            >
              Product Code &times; 3.6 = Wholesale Price (INR)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed flex items-center gap-2 mt-3 pt-2 border-t border-neutral-200/70">
            <Info className="w-3.5 h-3.5 text-[#195799] shrink-0" />
            <span>The product code mentioned in our catalogue is used to calculate the final wholesale price in Indian Rupees (INR).</span>
          </p>
        </div>

        {/* Card 2: View Our Jewellery Catalogue */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#195799] hover:shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#195799] text-white font-bold text-xs flex items-center justify-center shrink-0">
              02
            </span>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#195799]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                VIEW OUR JEWELLERY CATALOGUE
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mb-3 leading-relaxed">
            Explore our curated jewellery designs and trending collections through our WhatsApp Catalogue.
          </p>

          <div className="my-3">
            <a
              href={catalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-98"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span>Open WhatsApp Catalogue</span>
              <ExternalLink className="w-4 h-4 text-white/90" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed flex items-center gap-2 mt-3 pt-2 border-t border-neutral-200/70">
            <Info className="w-3.5 h-3.5 text-[#195799] shrink-0" />
            <span>Our catalogue is provided for design ideas and product reference only.</span>
          </p>
        </div>

        {/* Card 3: Minimum Order Value */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#195799] hover:shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#195799] text-white font-bold text-xs flex items-center justify-center shrink-0">
              03
            </span>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#195799]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                MINIMUM ORDER VALUE (MOV)
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mb-3 leading-relaxed">
            Please ensure your selected products meet the applicable minimum order value:
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

            <div className="bg-white border-2 border-[#195799] rounded-xl p-4 text-center shadow-xs">
              <span className="text-xs text-[#195799] block uppercase font-bold tracking-wider mb-1">
                International Orders ({country.shortName})
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-[#195799] flex items-center justify-center gap-2">
                <img src={country.flag} alt={country.country} className="w-5 h-3.5 rounded-xs object-cover border border-neutral-200" />
                <span>&#8377;20,000/-</span>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed flex items-center gap-2 mt-3 pt-2 border-t border-neutral-200/70">
            <Info className="w-3.5 h-3.5 text-[#195799] shrink-0" />
            <span>Please ensure your selected products meet the applicable minimum order value.</span>
          </p>
        </div>

        {/* Card 4: Mix & Match */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#195799] hover:shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#195799] text-white font-bold text-xs flex items-center justify-center shrink-0">
              04
            </span>
            <div className="flex items-center gap-2">
              <Shuffle className="w-5 h-5 text-[#195799]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                MIX &amp; MATCH &mdash; MULTIPLE DESIGNS ALLOWED
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-neutral-800 mb-3">
            We offer complete flexibility in product selection:
          </p>

          <div className="space-y-2.5 my-3">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Select products from different designs and jewellery categories.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Mix and match multiple designs according to your requirements.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Create your own collection based on your business needs.</span>
            </div>
          </div>

          <p className="text-xs text-neutral-500 italic mt-2">
            There is no restriction on mixing designs, subject to product availability.
          </p>
        </div>

        {/* Card 5: Product Availability & Order Confirmation (Natural, Clean, No-AI Background) */}
        <div className="bg-[#FCFAF7] border-2 border-[#195799] rounded-2xl p-5 sm:p-7 transition-all shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#195799] text-white font-bold text-xs flex items-center justify-center shrink-0">
              05
            </span>
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-[#195799]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                PRODUCT AVAILABILITY &amp; ORDER CONFIRMATION
              </h3>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs font-bold text-[#195799] uppercase tracking-wider mb-3">
            PLEASE READ CAREFULLY BEFORE PROCEEDING
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed mb-5">
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#195799] shrink-0 mt-2"></span>
              <span>
                We have a wide variety of imitation jewellery designs, and it is not possible to display every design on our website. Our website is only for design ideas and reference to help you understand our collections. New designs are added regularly.
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#195799] shrink-0 mt-2"></span>
              <span>
                We are manufacturers and wholesalers, offering a wide range of jewellery designs and collections.
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#195799] shrink-0 mt-2"></span>
              <span>
                Not every design displayed in the catalogue is available in ready stock. Availability must be confirmed by our team.
              </span>
            </div>
          </div>

          {/* Clean White Highlight Card - No AI Gradient, No Dash, No Emojis */}
          <div className="bg-white border-2 border-[#195799] rounded-xl p-5 sm:p-6 text-center my-4 shadow-xs">
            <h4
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-base sm:text-lg font-extrabold text-[#195799] tracking-tight mb-1.5"
            >
              ALL WHOLESALE ORDERS ARE ACCEPTED AND CONFIRMED EXCLUSIVELY THROUGH VIDEO CALLS
            </h4>

            {/* Exactly as requested: emoji removed, dash removed */}
            <p className="text-xs sm:text-sm text-neutral-800 font-bold mb-4">
              Video consultations are 100% FREE NO CONSULTATION CHARGES!
            </p>

            <a
              href={videoCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-xs sm:text-sm shadow-xs transition-transform"
            >
              <Video className="w-4 h-4 text-white" />
              <span>Book Free Video Call for {country.shortName} &rarr;</span>
            </a>
          </div>

          <p className="text-xs text-neutral-500 flex items-center gap-2 pt-2 border-t border-neutral-200/70">
            <Info className="w-3.5 h-3.5 text-[#195799] shrink-0" />
            <span>Please book a video call with our team to check the latest designs, product availability and order details.</span>
          </p>
        </div>

        {/* Card 6: International Shipping & Delivery */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#195799] hover:shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#195799] text-white font-bold text-xs flex items-center justify-center shrink-0">
              06
            </span>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#195799]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827] flex items-center gap-2">
                <span>INTERNATIONAL SHIPPING &amp; DELIVERY</span>
                <img src={country.flag} alt={country.country} className="w-5 h-3.5 rounded-xs object-cover border border-neutral-200" />
              </h3>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-600">
            <div>
              <p className="font-semibold text-neutral-900 mb-2">
                Shipping charges depend on:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1 text-neutral-600">
                <li>Total parcel weight.</li>
                <li>Destination and delivery location in {country.country}.</li>
                <li>Selected courier service provider ({country.courierPartner}).</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <p className="font-semibold text-neutral-900 mb-2">
                Customers can choose between two shipping options:
              </p>
              <ol className="list-decimal list-inside space-y-1 pl-1 font-medium text-neutral-800">
                <li>Self Service</li>
                <li>Fast Service</li>
              </ol>
            </div>

            <p className="text-xs text-neutral-500 flex items-center gap-2 pt-2 border-t border-neutral-200/70">
              <Info className="w-3.5 h-3.5 text-[#195799] shrink-0" />
              <span>Final shipping charges will be shared after product selection and confirmation of parcel details.</span>
            </p>
          </div>
        </div>

        {/* Card 7: How to Place a Wholesale Order */}
        <div className="bg-[#FCFAF7] border border-[#E8DEC8] rounded-2xl p-5 sm:p-7 transition-all hover:border-[#195799] hover:shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#195799] text-white font-bold text-xs flex items-center justify-center shrink-0">
              07
            </span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#195799]" />
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-base sm:text-lg font-bold text-[#111827]">
                HOW TO PLACE A WHOLESALE ORDER
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mb-4">
            Our wholesale ordering process is simple and convenient!
          </p>

          <div className="space-y-2.5 text-xs sm:text-sm">
            {[
              { step: '01', title: 'Browse Catalogue', desc: 'Browse our WhatsApp Catalogue and explore our designs.' },
              { step: '02', title: 'Shortlist Designs', desc: 'Shortlist the designs and product codes you are interested in.' },
              { step: '03', title: 'Schedule Video Call', desc: 'Contact our team to schedule a FREE VIDEO CALL.' },
              { step: '04', title: 'Live Selection', desc: 'Our team will assist you with product selection and confirm actual availability.' },
              { step: '05', title: 'Finalise & Dispatch', desc: 'Finalise your product selection and shipping details to proceed with your order.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-neutral-200">
                <span className="w-6 h-6 rounded-md bg-[#195799] text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {item.step}
                </span>
                <div>
                  <span className="font-bold text-[#195799] block sm:inline sm:mr-2">{item.title}:</span>
                  <span className="text-neutral-600">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Ready to Start Your Wholesale Journey? CTA */}
      <div className="bg-gradient-to-b from-[#FAF5E8] to-[#F3EAD3] p-7 sm:p-10 text-center border-t border-[#E8DEC8]">
        <span className="text-xs font-bold text-[#92400E] uppercase tracking-widest block mb-2">
          Ready to Start Your Wholesale Journey?
        </span>

        <h3
          style={{ fontFamily: 'Georgia, serif' }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827] max-w-lg mx-auto leading-snug mb-3"
        >
          If you are interested in our designs and wholesale pricing, simply contact our team:
        </h3>

        <div className="bg-white border-2 border-dashed border-[#195799] rounded-2xl py-3 px-5 max-w-md mx-auto mb-4 shadow-2xs">
          <p className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">Message Us On WhatsApp:</p>
          <p className="text-base sm:text-lg font-bold text-[#195799] mt-0.5">
            &ldquo;I WANT TO BOOK A VIDEO CALL&rdquo;
          </p>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
          Our team will assist you with scheduling your FREE video consultation and guide you through the complete wholesale ordering process.
        </p>

        <a
          href={videoCallUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#195799] hover:bg-[#124275] active:scale-98 text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all"
        >
          <Video className="w-5 h-5 text-white" />
          <span>Book Free Video Consultation &rarr;</span>
        </a>
      </div>

      {/* 5. Brand Stamp Footer */}
      <div className="bg-[#121212] text-neutral-300 p-7 sm:p-9 text-center text-xs space-y-2 border-t border-neutral-800">
        <p className="font-extrabold text-white text-sm sm:text-base tracking-widest">
          SHREE SHYAM BABA JEWELLERS
        </p>
        <p className="text-neutral-400 font-medium">
          Established in 1998 &bull; Manufacturer &amp; Wholesaler of Imitation Jewellery
        </p>
        <p className="text-neutral-400">
          Johari Bazaar, Jaipur, Rajasthan, India.
        </p>
        <p className="text-amber-400 font-semibold pt-1">
          Serving Retailers, Resellers and Wholesale Buyers Across {country.shortName} &amp; Worldwide.
        </p>
        <p className="text-neutral-500 text-[11px] pt-1">
          Quality Designs &bull; Trusted Manufacturing &bull; Wholesale Excellence
        </p>
      </div>
    </section>
  )
}
