'use client'

import React, { useState } from 'react'
import { Upload, Copy, Check, Image as ImageIcon, Loader2, Sparkles, AlertCircle } from 'lucide-react'

export default function MediaLibraryCMS() {
  const [uploadedFiles, setUploadedFiles] = useState<{ url: string; name: string; date: string }[]>([
    { url: '/images/hero/hero-mobile-krishaz.jpg', name: 'hero-mobile-krishaz.jpg', date: 'Default Asset' },
    { url: '/images/hero/hero-desktop-krishaz.png', name: 'hero-desktop-krishaz.png', date: 'Default Asset' },
    { url: '/images/logo/logo.png', name: 'brand-logo.png', date: 'Default Asset' },
  ])
  const [uploading, setUploading] = useState<boolean>(false)
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setErrorMsg(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const json = await res.json()
      if (json.success && json.url) {
        setUploadedFiles((prev) => [
          {
            url: json.url,
            name: file.name,
            date: 'Just now',
          },
          ...prev,
        ])
      } else {
        setErrorMsg(json.error || 'Failed to upload image')
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Upload error')
    } finally {
      setUploading(false)
    }
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedUrl(url)
    setTimeout(() => setCopiedUrl(null), 2500)
  }

  return (
    <div className="w-full h-full flex flex-col bg-[#FAF8F5] text-neutral-900 overflow-y-auto">
      {/* Top Header */}
      <div className="bg-white border-b border-neutral-200 px-6 py-5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-xl sm:text-2xl font-bold text-neutral-900">
              Media &amp; Image Assets Library
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Upload banners, product photos &amp; certificates. Copy links directly into the Visual Page Editor or Catalog.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full p-6 space-y-6">
        {/* Upload Dropzone */}
        <div className="bg-white border-2 border-dashed border-amber-300 rounded-2xl p-8 text-center hover:bg-amber-50/30 transition-all relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shadow-sm">
              {uploading ? (
                <Loader2 className="w-7 h-7 animate-spin text-amber-700" />
              ) : (
                <Upload className="w-7 h-7 text-amber-700" />
              )}
            </div>
            <div>
              <p className="font-semibold text-neutral-800 text-base">
                {uploading ? 'Uploading image to secure storage...' : 'Click or drag & drop to upload images'}
              </p>
              <p className="text-xs text-neutral-500 mt-1">PNG, JPG, WEBP, or GIF up to 10MB</p>
            </div>
          </div>
        </div>

        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Gallery */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-700 mb-3 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-amber-700" />
            Uploaded &amp; Available Media ({uploadedFiles.length})
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {uploadedFiles.map((file, idx) => {
              const isCopied = copiedUrl === file.url
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col"
                >
                  <div className="aspect-square bg-neutral-100 relative overflow-hidden flex items-center justify-center">
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        ;(e.target as HTMLElement).style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold text-neutral-800 truncate" title={file.name}>
                        {file.name}
                      </p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">{file.date}</p>
                    </div>

                    <button
                      onClick={() => copyToClipboard(file.url)}
                      className={`mt-3 w-full py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                        isCopied
                          ? 'bg-emerald-600 text-white font-semibold'
                          : 'bg-neutral-100 hover:bg-amber-100 text-neutral-700 hover:text-amber-900 border border-neutral-200'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied URL!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy URL</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
