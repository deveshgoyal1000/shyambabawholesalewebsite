'use client'

import React, { useState, useEffect } from 'react'
import {
  ChevronLeft,
  ExternalLink,
  Save,
  Check,
  Loader2,
  Globe,
  Truck,
  Video,
  ShoppingBag,
  FileText,
  Clock,
  Building2,
} from 'lucide-react'
import CountryWholesaleTerms from '@/components/CountryWholesaleTerms'
import InternationalVideoPlayer from '@/components/InternationalVideoPlayer'
import { CountryWholesaleInfo, getCountryBySlug } from '@/data/internationalCountries'

interface CountryPageEditorProps {
  countrySlug: string
  onBackToHome: () => void
  onOpenLiveSite?: (path: string) => void
}

const SUPPORTED_COUNTRIES = [
  { slug: 'united-states', name: 'United States (USA)' },
  { slug: 'united-kingdom', name: 'United Kingdom (UK)' },
  { slug: 'canada', name: 'Canada' },
  { slug: 'dubai', name: 'UAE (Dubai)' },
  { slug: 'australia', name: 'Australia' },
]

export default function CountryPageEditor({
  countrySlug,
  onBackToHome,
  onOpenLiveSite,
}: CountryPageEditorProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>(countrySlug)
  const [countryData, setCountryData] = useState<CountryWholesaleInfo>(() =>
    getCountryBySlug(countrySlug)
  )
  const [loading, setLoading] = useState<boolean>(false)
  const [saving, setSaving] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Update country when countrySlug prop changes
  useEffect(() => {
    setSelectedSlug(countrySlug)
    fetchCountry(countrySlug)
  }, [countrySlug])

  const fetchCountry = async (slug: string) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/editor/country?slug=${slug}`)
      const json = await res.json()
      if (json.success && json.country) {
        setCountryData(json.country)
      } else {
        setCountryData(getCountryBySlug(slug))
      }
    } catch (e) {
      setCountryData(getCountryBySlug(slug))
    } finally {
      setLoading(false)
    }
  }

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  const handleFieldChange = (field: keyof CountryWholesaleInfo, value: string) => {
    setCountryData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSaveCountry = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/editor/country', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: selectedSlug,
          overrides: countryData,
        }),
      })
      const json = await res.json()
      if (json.success) {
        showToast(`Saved settings for ${countryData.country}!`)
      } else {
        showToast('Error saving: ' + (json.error || 'Failed'))
      }
    } catch (e: any) {
      showToast('Error saving country settings')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="w-full h-[calc(100vh-56px)] flex flex-col bg-[#FAF8F5] select-none overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 right-6 z-50 bg-[#111827] text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xl border border-neutral-700 flex items-center gap-2 animate-fade-in">
          <Check className="w-4 h-4 text-[#195799]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Country Editor Sub-Header */}
      <div className="h-13 bg-white border-b border-neutral-200 px-4 sm:px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          {/* Country Tabs */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-100 p-1 rounded-lg">
            {SUPPORTED_COUNTRIES.map((item) => (
              <button
                key={item.slug}
                onClick={() => {
                  setSelectedSlug(item.slug)
                  fetchCountry(item.slug)
                }}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  selectedSlug === item.slug
                    ? 'bg-white text-[#195799] shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <select
              value={selectedSlug}
              onChange={(e) => {
                setSelectedSlug(e.target.value)
                fetchCountry(e.target.value)
              }}
              className="px-2.5 py-1.5 rounded-lg border border-neutral-300 bg-white text-xs font-semibold text-neutral-800"
            >
              {SUPPORTED_COUNTRIES.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={`/international/${selectedSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-xs font-medium transition-colors"
          >
            <span>Preview Live Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={handleSaveCountry}
            disabled={saving}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#195799] hover:bg-[#124378] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5" />
            )}
            <span>Save Country Page</span>
          </button>
        </div>
      </div>

      {/* Main Workspace: Left Live Canvas, Right Inspector Form */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Real-time Live Country Page Preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#FAF8F5]">
          <div className="max-w-3xl mx-auto">
            {/* 1. Country Header Banner Preview */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-8 text-center shadow-md border border-neutral-200">
              <img
                src={countryData.flag.replace('/w80/', '/w1280/')}
                alt={`${countryData.country} Flag`}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70 pointer-events-none" />

              <div className="relative z-10 py-8 sm:py-12 px-4 sm:px-8 text-white">
                <div className="inline-flex items-center justify-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xs">
                  <div className="w-5 h-3.5 rounded-xs overflow-hidden border border-white/50 shadow-2xs">
                    <img
                      src={countryData.flag}
                      alt={countryData.country}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase">
                    {countryData.shortName || countryData.country} Direct Export
                  </span>
                </div>

                <h1
                  style={{ fontFamily: 'Georgia, serif' }}
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
                >
                  Wholesale Jewellery for {countryData.country}
                </h1>

                <div className="w-16 h-[2.5px] bg-[#C9A84C] mx-auto my-3 rounded-full shadow-xs"></div>

                <p className="text-xs sm:text-sm md:text-base font-medium text-white/95 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
                  Direct factory supply from our Jaipur manufacturing unit to your shop or boutique in{' '}
                  {countryData.country}.
                </p>
              </div>
            </div>

            {/* 2. Process Explainer Video Player Preview */}
            <div className="mb-8">
              <InternationalVideoPlayer
                videoUrl={countryData.videoUrl}
                posterUrl={countryData.videoPoster}
                countryName={countryData.country}
              />
            </div>

            {/* 3. Official Country Wholesale Terms Preview */}
            <CountryWholesaleTerms country={countryData} />
          </div>
        </div>

        {/* Right: Clean Minimal Inspector Panel */}
        <aside className="w-80 sm:w-96 bg-white border-l border-neutral-200 overflow-y-auto p-5 shrink-0 space-y-5 shadow-xs">
          <div>
            <h3
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-base font-bold text-neutral-900 tracking-tight"
            >
              Country Page Settings
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Edit values below. Changes update the preview on the left in real-time.
            </p>
          </div>

          {/* Section: Country Identity */}
          <div className="space-y-3 pt-2 border-t border-neutral-200">
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
              Country Identity
            </label>

            <div>
              <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                Country Display Name
              </label>
              <input
                type="text"
                value={countryData.country}
                onChange={(e) => handleFieldChange('country', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                Short Name / Code (e.g. USA, UK)
              </label>
              <input
                type="text"
                value={countryData.shortName}
                onChange={(e) => handleFieldChange('shortName', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                Flag Image URL
              </label>
              <input
                type="text"
                value={countryData.flag}
                onChange={(e) => handleFieldChange('flag', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white"
              />
            </div>
          </div>

          {/* Section: Terms & Order Value */}
          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
              Terms &amp; Order Value
            </label>

            <div>
              <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                Minimum Order Value (MOV)
              </label>
              <input
                type="text"
                value={countryData.minOrderValue}
                onChange={(e) => handleFieldChange('minOrderValue', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                Delivery Time
              </label>
              <input
                type="text"
                value={countryData.deliveryTime}
                onChange={(e) => handleFieldChange('deliveryTime', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                Courier Partner
              </label>
              <input
                type="text"
                value={countryData.courierPartner}
                onChange={(e) => handleFieldChange('courierPartner', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                Currency Label
              </label>
              <input
                type="text"
                value={countryData.currency}
                onChange={(e) => handleFieldChange('currency', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white"
              />
            </div>
          </div>

          {/* Section: Video Showcase */}
          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
              Video Explainer
            </label>

            <div>
              <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                Video URL (MP4)
              </label>
              <input
                type="text"
                value={countryData.videoUrl}
                onChange={(e) => handleFieldChange('videoUrl', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-600 mb-1">
                Video Poster Image URL
              </label>
              <input
                type="text"
                value={countryData.videoPoster}
                onChange={(e) => handleFieldChange('videoPoster', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white"
              />
            </div>
          </div>

          {/* Section: Overview Text */}
          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
              Overview &amp; Client Description
            </label>

            <textarea
              rows={4}
              value={countryData.overviewText}
              onChange={(e) => handleFieldChange('overviewText', e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs focus:ring-1 focus:ring-[#195799] focus:border-[#195799] bg-neutral-50 focus:bg-white leading-relaxed"
            />
          </div>

          {/* Save Button */}
          <div className="pt-4 border-t border-neutral-200">
            <button
              type="button"
              onClick={handleSaveCountry}
              disabled={saving}
              className="w-full py-2.5 px-4 rounded-lg bg-[#195799] hover:bg-[#124378] text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span>Save &amp; Update Country</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}
