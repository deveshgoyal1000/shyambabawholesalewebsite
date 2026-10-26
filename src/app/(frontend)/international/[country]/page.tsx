import React from 'react'
import Link from 'next/link'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButtons from '@/components/FloatingActionButtons'
import InternationalVideoPlayer from '@/components/InternationalVideoPlayer'
import {
  internationalCountries,
  getCountryBySlug,
} from '@/data/internationalCountries'
import { MessageCircle, Video, ArrowRight } from 'lucide-react'

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

          {/* 1. Country Header - Simple, Natural & Authentic */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-4 rounded-xs overflow-hidden border border-neutral-300 shadow-2xs">
                <img
                  src={country.flag}
                  alt={`${country.country} Flag`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1
                style={{ fontFamily: 'Georgia, serif' }}
                className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#195799] tracking-tight"
              >
                Wholesale Jewellery for {country.country}
              </h1>
            </div>

            {/* Gold Accent Divider Bar */}
            <div className="w-16 h-[2px] bg-[#C9A84C] mx-auto my-2.5"></div>

            <p className="text-xs sm:text-sm text-[#4A4A4A] max-w-lg mx-auto">
              Direct factory supply from our Jaipur manufacturing unit to your shop or boutique in {country.country}.
            </p>
          </div>

          {/* 2. Process Explainer Video Player - Clean, no fake overlay badges */}
          <div className="mb-7 sm:mb-9">
            <InternationalVideoPlayer
              videoUrl={country.videoUrl}
              posterUrl={country.videoPoster}
              countryName={country.country}
            />
          </div>

          {/* 3. Text Below the Video - Plain, honest human explanation */}
          <div className="bg-white rounded-2xl border border-[#E5DAC1] p-5 sm:p-7 mb-8 shadow-xs">
            <h2
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-lg sm:text-xl font-normal text-[#195799] mb-3.5"
            >
              How Ordering Works
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#3A3A3A] leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FAF5E8] border border-[#C9A84C]/60 text-[#195799] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-neutral-900 font-semibold">Select Designs:</strong> Browse our website or ask for our latest wholesale catalogue on WhatsApp. You can pick mixed designs across any categories with a low starting order of {country.minOrderValue}.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FAF5E8] border border-[#C9A84C]/60 text-[#195799] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-neutral-900 font-semibold">Live Video Call Inspection:</strong> Before dispatch, we connect on a WhatsApp video call directly from our Jaipur showroom to inspect every piece you selected for finish, stone setting, and weight.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FAF5E8] border border-[#C9A84C]/60 text-[#195799] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-neutral-900 font-semibold">Doorstep Delivery:</strong> Packed safely in export cartons and dispatched via {country.courierPartner} with tracking straight to your door in {country.deliveryTime}.
                </div>
              </div>
            </div>

            {/* Local Context Note */}
            <p className="mt-4 pt-3.5 border-t border-neutral-100 text-xs text-neutral-500 leading-relaxed">
              {country.overviewText}
            </p>

            {/* Clean Quick Stats Row */}
            <div className="mt-4 pt-3.5 border-t border-neutral-100 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-[#FAF8F5] rounded-xl">
                <span className="text-[10px] text-neutral-500 block uppercase tracking-wider font-medium">Min. Order</span>
                <span className="text-xs sm:text-sm font-bold text-[#195799]">{country.minOrderValue}</span>
              </div>
              <div className="p-2 bg-[#FAF8F5] rounded-xl">
                <span className="text-[10px] text-neutral-500 block uppercase tracking-wider font-medium">Delivery</span>
                <span className="text-xs sm:text-sm font-bold text-[#195799]">{country.deliveryTime}</span>
              </div>
              <div className="p-2 bg-[#FAF8F5] rounded-xl">
                <span className="text-[10px] text-neutral-500 block uppercase tracking-wider font-medium">Courier</span>
                <span className="text-xs sm:text-sm font-bold text-[#195799]">{country.courierPartner}</span>
              </div>
            </div>
          </div>

          {/* 4. Popular Designs for this Country - Real Category Cards */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3.5">
              <div>
                <h2
                  style={{ fontFamily: 'Georgia, serif' }}
                  className="text-lg sm:text-xl font-normal text-[#195799]"
                >
                  Popular Designs for {country.country}
                </h2>
                <p className="text-xs text-neutral-500">
                  Styles most frequently ordered by retailers in your region.
                </p>
              </div>
              <Link
                href="/#categories"
                className="text-xs font-semibold text-[#195799] hover:text-[#124378] flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {country.popularCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/collections/${cat.slug}`}
                  className="group block bg-white rounded-xl border border-[#E5DAC1] hover:border-[#195799] transition-all overflow-hidden shadow-2xs hover:shadow-sm"
                >
                  <div className="aspect-square w-full overflow-hidden bg-neutral-100">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2.5 text-center bg-white">
                    <span className="text-xs font-semibold text-neutral-800 group-hover:text-[#195799] transition-colors block truncate">
                      {cat.title}
                    </span>
                    <span className="text-[10px] text-[#C9A84C] font-medium block mt-0.5">
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 5. Clean, Warm Human WhatsApp Action */}
          <div className="bg-[#FAF5E8] rounded-2xl border border-[#C9A84C]/60 p-5 sm:p-7 text-center">
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-xl sm:text-2xl font-normal text-[#195799] mb-1.5"
            >
              Order for {country.country}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mb-5 max-w-md mx-auto">
              Message us directly on WhatsApp to get the latest catalogue, check live prices, and book a video call.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-semibold text-xs tracking-wide shadow-xs transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp (+91 96808 65791)</span>
              </a>

              <a
                href={videoCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-50 active:scale-98 text-[#195799] border border-[#195799]/40 font-semibold text-xs transition-all shadow-xs"
              >
                <Video className="w-4 h-4 text-[#C9A84C]" />
                <span>Book Live Video Call</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Official Website Shell */}
      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
