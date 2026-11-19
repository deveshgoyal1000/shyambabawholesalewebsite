import React from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import InternationalVideoPlayer from '@/components/InternationalVideoPlayer'
import CountryWholesaleTerms from '@/components/CountryWholesaleTerms'
import {
  internationalCountries,
  getCountryBySlug,
} from '@/data/internationalCountries'
import { MessageCircle, Video } from 'lucide-react'

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
    title: `Wholesale Jewellery Supply for ${country.country} | Shyambaba Wholesale Jaipur`,
    description: `Direct Jaipur manufacturer supply for ${country.country} retailers. Minimum order ${country.minOrderValue}, live video call inspection, and doorstep delivery in ${country.deliveryTime}.`,
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
      {/* Official Website Shell */}
      <AnnouncementBar />
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* 1. Country Header Banner with Vibrant 100% Visible Country Flag */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-10 text-center shadow-lg border border-black/10">
            {/* The Authentic Country Flag - 100% Vibrant & Visible */}
            <img
              src={country.flag.replace('/w80/', '/w1280/')}
              alt={`${country.country} Flag`}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Contrast Overlay to preserve vivid flag colors while ensuring pristine text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65 pointer-events-none" />

            {/* Foreground Content */}
            <div className="relative z-10 py-8 sm:py-12 px-4 sm:px-8 text-white">
              <div className="inline-flex items-center justify-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xs">
                <div className="w-5 h-3.5 rounded-xs overflow-hidden border border-white/50 shadow-2xs">
                  <img
                    src={country.flag}
                    alt={`${country.country} Flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase">
                  {country.shortName || country.country} Direct Export
                </span>
              </div>

              <h1
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
              >
                Wholesale Jewellery for {country.country}
              </h1>

              {/* Gold Accent Divider Bar */}
              <div className="w-16 h-[2.5px] bg-[#C9A84C] mx-auto my-3 rounded-full shadow-xs"></div>

              <p className="text-xs sm:text-sm md:text-base font-medium text-white/95 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
                Direct factory supply from our Jaipur manufacturing unit to your shop or boutique in {country.country}.
              </p>
            </div>
          </div>

          {/* 2. Process Explainer Video Player - Clean, no fake overlay badges */}
          <div className="mb-7 sm:mb-9">
            <InternationalVideoPlayer
              videoUrl={country.videoUrl}
              posterUrl={country.videoPoster}
              countryName={country.country}
            />
          </div>

          {/* 3. Official Wholesale Terms & Conditions adapted for each country */}
          <CountryWholesaleTerms country={country} />

        </div>
      </main>

      {/* Official Website Shell */}
      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
