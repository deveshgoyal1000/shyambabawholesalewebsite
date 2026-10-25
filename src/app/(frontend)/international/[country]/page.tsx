import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  internationalCountries,
  getCountryBySlug,
} from '@/data/internationalCountries'
import InternationalVideoPlayer from '@/components/InternationalVideoPlayer'
import {
  Plane,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageCircle,
  Video,
  Globe,
  ChevronRight,
  Sparkles,
  FileCheck2,
} from 'lucide-react'

interface PageProps {
  params: Promise<{
    country: string
  }>
}

export async function generateStaticParams() {
  return Object.keys(internationalCountries).map((slug) => ({
    country: slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const country = getCountryBySlug(resolvedParams.country)

  return {
    title: `Wholesale Brass Jewellery Export to ${country.country} | Shyambaba Wholesale`,
    description: `Direct Jaipur manufacturer export to ${country.country}. Low MOV ${country.minOrderValue}, doorstep delivery in ${country.deliveryTime} via ${country.courierPartner}. 100% inspected via video call.`,
  }
}

export default async function CountryWholesalePage({ params }: PageProps) {
  const resolvedParams = await params
  const country = getCountryBySlug(resolvedParams.country)

  const otherCountries = Object.values(internationalCountries).filter(
    (c) => c.slug !== country.slug
  )

  const whatsappUrl = `https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20a%20jewellery%20retailer%20from%20${encodeURIComponent(
    country.country
  )}%20and%20want%20to%20order%20wholesale%20with%20doorstep%20shipping.`

  const videoCallUrl = `https://wa.me/919876543210?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20${encodeURIComponent(
    country.country
  )}%20and%20would%20like%20to%20book%20a%20live%20video%20call%20showroom%20inspection.`

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#FAF5E8] border-b border-[#C9A84C]/30 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-[#6B1A2A] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/#international" className="hover:text-[#6B1A2A] transition-colors">
            International Wholesale
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="font-semibold text-[#6B1A2A]">{country.country}</span>
        </div>
      </div>

      {/* Country Hero Header */}
      <section className="relative pt-10 sm:pt-14 pb-8 sm:pb-12 bg-gradient-to-b from-[#FAF5E8] to-[#FAF8F5] border-b border-[#E8DFC9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Flag + Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C9A84C]/40 shadow-sm mb-4">
            <div className="w-6 h-4 rounded overflow-hidden shadow-xs border border-neutral-200">
              <img
                src={country.flag}
                alt={`${country.country} Flag`}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1A2A]">
              Direct Export to {country.country}
            </span>
          </div>

          {/* Main Title in Georgia Serif */}
          <h1
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-2xl sm:text-4xl md:text-5xl font-normal text-[#6B1A2A] tracking-[0.5px] leading-tight mb-3"
          >
            Jaipur Wholesale Brass Jewellery to {country.country}
          </h1>

          {/* Gold Accent Rule */}
          <div className="w-16 sm:w-20 h-[2px] bg-[#C9A84C] mx-auto my-3"></div>

          <p className="text-sm sm:text-base text-neutral-700 max-w-2xl mx-auto font-normal leading-relaxed">
            {country.tagline}. High-turnover bridal sets, Kundan earrings, oxidised silver &amp; antique jewellery directly from our Jaipur manufacturing unit to your doorstep.
          </p>

          {/* 4 Key Country Stat Badges */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#C9A84C]/30 shadow-xs">
              <div className="flex items-center gap-2 text-[#6B1A2A] mb-1">
                <Plane className="w-4 h-4 text-[#C9A84C]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Air Cargo
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-neutral-900 leading-snug">
                {country.courierPartner}
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#C9A84C]/30 shadow-xs">
              <div className="flex items-center gap-2 text-[#6B1A2A] mb-1">
                <Clock className="w-4 h-4 text-[#C9A84C]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Transit Time
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-neutral-900 leading-snug">
                {country.deliveryTime}
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#C9A84C]/30 shadow-xs">
              <div className="flex items-center gap-2 text-[#6B1A2A] mb-1">
                <PackageCheck className="w-4 h-4 text-[#C9A84C]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Minimum Order
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-neutral-900 leading-snug">
                {country.minOrderValue}
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#C9A84C]/30 shadow-xs">
              <div className="flex items-center gap-2 text-[#6B1A2A] mb-1">
                <FileCheck2 className="w-4 h-4 text-[#C9A84C]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Documentation
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-neutral-900 leading-snug">
                HSN 711790 + Full Invoice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Video Section: How Process Works */}
      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9A7E2E] block mb-1">
              Video Explainer
            </span>
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-2xl sm:text-3xl font-normal text-[#6B1A2A] tracking-[0.5px]"
            >
              How Our Export Process Works for {country.country}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5">
              Watch how your order is handcrafted in Jaipur, inspected over live video call, packed in 5-ply cartons, and delivered to your doorstep.
            </p>
          </div>

          {/* Interactive Luxury Video Player */}
          <InternationalVideoPlayer
            videoUrl={country.videoUrl}
            posterUrl={country.videoPoster}
            countryName={country.country}
          />

          {/* 4 Physical Export Process Steps */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {country.processSteps.map((step) => (
              <div
                key={step.number}
                className="p-4 rounded-2xl bg-white border border-[#E5DAC1] shadow-xs relative"
              >
                <span className="text-2xl font-bold font-serif text-[#C9A84C]/60 block mb-1">
                  {step.number}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 mb-1 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country In-Depth Guidance & Text Below Video */}
      <section className="py-8 bg-white border-y border-[#EAE3D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {/* About Country Export Market */}
          <div>
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-xl sm:text-2xl font-normal text-[#6B1A2A] mb-3"
            >
              Wholesale Jewellery Supply for {country.country} Boutiques &amp; Resellers
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
              {country.aboutCountryExport}
            </p>

            {/* Key Advantages Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {country.keyBenefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-800 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Customs, Duties & Packaging Specifications */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#C9A84C]/30 space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-[#6B1A2A] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C9A84C]" />
              Customs &amp; International Shipping Compliance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-700">
              <div>
                <strong className="block text-neutral-900 mb-1">
                  Customs Clearances:
                </strong>
                <p className="text-neutral-600 leading-relaxed">
                  {country.customsInfo}
                </p>
              </div>
              <div>
                <strong className="block text-neutral-900 mb-1">
                  Packaging Specifications:
                </strong>
                <p className="text-neutral-600 leading-relaxed">
                  Every item sealed in clear ziplock pouches with product code labels, wrapped in triple-layer bubble wrap, and packed into reinforced 5-ply export master cartons.
                </p>
              </div>
            </div>
          </div>

          {/* Dedicated WhatsApp Order CTA Box */}
          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#6B1A2A] text-white shadow-xl text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#C9A84C] text-[11px] font-bold uppercase tracking-wider border border-[#C9A84C]/30">
              Fast WhatsApp Order Consultation
            </span>
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-xl sm:text-3xl font-normal text-white max-w-xl mx-auto"
            >
              Ready to Order Wholesale Jewellery for {country.country}?
            </h3>
            <p className="text-xs sm:text-sm text-cream/80 max-w-lg mx-auto">
              Connect directly with our export division in Jaipur. Receive our complete wholesale catalogue, calculate exact courier shipping, and schedule a live video call.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us For {country.country} Order</span>
              </a>

              <a
                href={videoCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-98 text-white font-semibold text-xs sm:text-sm border border-white/30 transition-all"
              >
                <Video className="w-4 h-4 text-[#C9A84C]" />
                <span>Book Live Video Inspection</span>
              </a>
            </div>
          </div>

          {/* Country FAQs */}
          <div className="pt-6">
            <h4
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-lg sm:text-xl font-normal text-[#6B1A2A] mb-4 text-center sm:text-left"
            >
              Frequently Asked Questions &bull; {country.country} Orders
            </h4>
            <div className="space-y-3">
              {country.customsFAQ.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF8F5] border border-neutral-200"
                >
                  <h5 className="text-xs sm:text-sm font-bold text-neutral-900 mb-1">
                    {faq.q}
                  </h5>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Switch to Another Country */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 text-center mb-5">
            We Also Export Direct To:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
            {otherCountries.map((c) => (
              <Link
                key={c.slug}
                href={`/international/${c.slug}`}
                className="p-2.5 rounded-xl bg-white border border-neutral-200 hover:border-[#6B1A2A] shadow-xs flex items-center gap-2 transition-all hover:scale-[1.02] group"
              >
                <div className="w-5 h-3.5 rounded overflow-hidden flex-shrink-0 border border-neutral-200">
                  <img
                    src={c.flag}
                    alt={c.country}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-neutral-800 group-hover:text-[#6B1A2A] truncate">
                  {c.country}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
