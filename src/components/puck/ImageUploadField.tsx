'use client'

import React, { useState } from 'react'
import { Upload, Check, Loader2, Image as ImageIcon } from 'lucide-react'

interface ImageUploadFieldProps {
  value: string
  onChange: (value: string) => void
  label?: string
}

export default function ImageUploadField({
  value,
  onChange,
  label = 'Image',
}: ImageUploadFieldProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setUploadSuccess(false)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const json = await res.json()
      if (json.success && json.url) {
        onChange(json.url)
        setUploadSuccess(true)
        setTimeout(() => setUploadSuccess(false), 3000)
      } else {
        alert(json.error || 'Failed to upload image')
      }
    } catch (err: any) {
      console.error('Upload error:', err)
      alert('Error uploading file')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2 py-1">
      {label && <label className="block text-xs font-semibold text-neutral-300">{label}</label>}

      {/* Preview Thumbnail */}
      {value ? (
        <div className="relative w-full h-24 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900 flex items-center justify-center">
          <img src={value} alt="Preview" className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className="w-full h-16 rounded-lg border border-dashed border-neutral-700 bg-neutral-900/50 flex items-center justify-center text-neutral-500 text-xs gap-1.5">
          <ImageIcon className="w-4 h-4" />
          <span>No image selected</span>
        </div>
      )}

      {/* File Upload Button */}
      <div className="flex gap-2 items-center">
        <label className="flex-1 cursor-pointer inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#195799] hover:bg-[#124378] text-white text-xs font-semibold transition-all">
          {uploading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Uploading...</span>
            </>
          ) : uploadSuccess ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-300" />
              <span>Uploaded!</span>
            </>
          ) : (
            <>
              <Upload className="w-3.5 h-3.5" />
              <span>Upload from Device</span>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            disabled={uploading}
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* Direct URL input fallback */}
      <input
        type="text"
        value={value || ''}
        placeholder="/images/example.jpg or https://"
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-xs px-2.5 py-1.5 rounded bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#195799]"
      />
    </div>
  )
}
