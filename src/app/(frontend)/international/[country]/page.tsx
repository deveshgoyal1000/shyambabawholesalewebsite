import React from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import InternationalVideoPlayer from '@/components/InternationalVideoPlayer'
import {
  internationalCountries,
  getCountryBySlug,
} from '@/data/internationalCountries'
import { Plane, Clock, PackageCheck, MessageCircle, Video } from 'lucide-react'

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

  const whatsappUrl = `https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20a%20jewellery%20retailer%20from%20${encodeURIComponent(
    country.country
  )}%20and%20want%20to%20order%20wholesale%20with%20doorstep%20shipping.`

  const videoCallUrl = `https://wa.me/919680865791?text=Hi%20Shyambaba%20Wholesale,%20I%20am%20from%20${encodeURIComponent(
    country.country
  )}%20and%20would%20like%20to%20book%20a%20live%20video%20call%20showroom%20inspection.`

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Official Website Header & Red Announcement Panel */}
      <AnnouncementBar />
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Country Banner */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C9A84C]/40 shadow-xs mb-3">
              <div className="w-6 h-4 rounded overflow-hidden shadow-xs border border-neutral-200">
                <img
                  src={country.flag}
                  alt={`${country.country} Flag`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#195799]">
                Direct Export to {country.country}
              </span>
            </div>

            <h1
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-2xl sm:text-4xl font-normal text-[#195799] tracking-[0.5px] leading-tight mb-2"
            >
              Wholesale Brass Jewellery Export to {country.country}
            </h1>

            {/* Gold Accent Divider Bar matching Krishaz */}
            <div className="w-16 h-[2px] bg-[#C9A84C] mx-auto my-3"></div>

            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto">
              Direct Jaipur manufacturer supply with 100% video call inspection, insured air cargo doorstep delivery, and low MOV of {country.minOrderValue}.
            </p>

            {/* Quick 3 Stat Pills */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-medium text-neutral-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5DAC1] shadow-2xs">
                <Plane className="w-3.5 h-3.5 text-[#C9A84C]" />
                {country.courierPartner}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5DAC1] shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
                {country.deliveryTime} Doorstep
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5DAC1] shadow-2xs">
                <PackageCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
                MOV: {country.minOrderValue}
              </span>
            </div>
          </div>

          {/* Explainer Video Player */}
          <div className="mb-8">
            <InternationalVideoPlayer
              videoUrl={country.videoUrl}
              posterUrl={country.videoPoster}
              countryName={country.country}
            />
          </div>

          {/* 4 Process Step Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {country.processSteps.map((step) => (
              <div
                key={step.number}
                className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E5DAC1] shadow-2xs"
              >
                <span className="text-lg sm:text-xl font-bold font-serif text-[#C9A84C] block mb-0.5">
                  {step.number}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 mb-1 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[11px] text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Direct WhatsApp Call to Action Box */}
          <div className="rounded-2xl p-6 sm:p-7 bg-[#195799] text-white shadow-lg text-center space-y-3.5">
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-xl sm:text-2xl font-normal text-white"
            >
              Order Wholesale Jewellery for {country.country}
            </h3>
            <p className="text-xs text-cream/80 max-w-md mx-auto">
              Get our complete 5,000+ design wholesale catalogue, check live dispatch slots, and inspect pieces on video call.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Order for {country.country}</span>
              </a>

              <a
                href={videoCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-98 text-white font-semibold text-xs border border-white/30 transition-all"
              >
                <Video className="w-4 h-4 text-[#C9A84C]" />
                <span>Book Live Video Call</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Official Website Footer & Floating Action Buttons */}
      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
