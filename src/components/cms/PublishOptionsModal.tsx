'use client'

import React, { useState } from 'react'
import {
  X,
  Upload,
  Globe,
  Monitor,
  Check,
  Loader2,
  ExternalLink,
  Sparkles,
  Rocket,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react'

interface PublishOptionsModalProps {
  isOpen: boolean
  onClose: () => void
  onPublish: (target: 'staging' | 'main') => Promise<void>
  publishingTarget: 'staging' | 'main' | null
}

export default function PublishOptionsModal({
  isOpen,
  onClose,
  onPublish,
  publishingTarget,
}: PublishOptionsModalProps) {
  const [selectedTarget, setSelectedTarget] = useState<'staging' | 'main'>('staging')
  const [publishedResult, setPublishedResult] = useState<{
    target: 'staging' | 'main'
    url: string
    message: string
  } | null>(null)

  if (!isOpen) return null

  const handleExecutePublish = async (target: 'staging' | 'main') => {
    setSelectedTarget(target)
    try {
      await onPublish(target)
      setPublishedResult({
        target,
        url: target === 'main' ? 'https://shyambabawholesalewebsite.vercel.app' : 'http://localhost:3000',
        message:
          target === 'main'
            ? '✓ Published to Main Live Website! Changes are now live worldwide.'
            : '✓ Published to Staging Site! You can test your changes safely.',
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="fixed inset-0 z-[120] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-neutral-200 flex flex-col space-y-5 animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-neutral-200">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 shadow-xs">
              <Rocket className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                Publish Website Changes
              </h3>
              <p className="text-xs text-neutral-500">
                Choose whether to deploy to Staging or directly to the Main Live site.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={publishingTarget !== null}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Banner */}
        {publishedResult && (
          <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex flex-col gap-2.5 animate-fade-in">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{publishedResult.message}</span>
            </div>
            <a
              href={publishedResult.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              <span>Open {publishedResult.target === 'main' ? 'Main Live Website' : 'Staging Site'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* The Two Options */}
        <div className="space-y-3.5">
          {/* Option 1: Staging Site */}
          <div
            onClick={() => !publishingTarget && setSelectedTarget('staging')}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
              selectedTarget === 'staging'
                ? 'border-[#195799] bg-blue-50/40 shadow-sm'
                : 'border-neutral-200 hover:border-neutral-300 bg-white'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#195799] flex items-center justify-center shrink-0 mt-0.5">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-neutral-900">
                      1. Publish to Staging Site
                    </h4>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-[#195799] font-mono">
                      Test Preview
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Saves changes immediately to staging (<code className="font-mono text-[11px] text-neutral-700">localhost:3000</code>). Perfect for testing layouts &amp; images before going live.
                  </p>
                </div>
              </div>

              <input
                type="radio"
                name="publishTarget"
                checked={selectedTarget === 'staging'}
                onChange={() => setSelectedTarget('staging')}
                className="mt-1 w-4 h-4 text-[#195799] focus:ring-[#195799]"
              />
            </div>

            <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-mono">Target: Staging Localhost</span>
              <button
                type="button"
                disabled={publishingTarget !== null}
                onClick={(e) => {
                  e.stopPropagation()
                  handleExecutePublish('staging')
                }}
                className="px-4 py-1.5 rounded-xl bg-[#195799] hover:bg-[#124378] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs disabled:opacity-50"
              >
                {publishingTarget === 'staging' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Publish to Staging</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Option 2: Main Site (Production) */}
          <div
            onClick={() => !publishingTarget && setSelectedTarget('main')}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
              selectedTarget === 'main'
                ? 'border-emerald-500 bg-emerald-50/30 shadow-md'
                : 'border-neutral-200 hover:border-neutral-300 bg-white'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-neutral-900">
                      2. Publish to Main Site (Production Live)
                    </h4>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500 text-white font-mono shadow-xs">
                      Live Worldwide
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Deploys your banners, text, categories, and products directly to the live domain (<code className="font-mono text-[11px] text-emerald-800">shyambabawholesalewebsite.vercel.app</code>) for all customers.
                  </p>
                </div>
              </div>

              <input
                type="radio"
                name="publishTarget"
                checked={selectedTarget === 'main'}
                onChange={() => setSelectedTarget('main')}
                className="mt-1 w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
            </div>

            <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-mono">Target: Live Production Domain</span>
              <button
                type="button"
                disabled={publishingTarget !== null}
                onClick={(e) => {
                  e.stopPropagation()
                  handleExecutePublish('main')
                }}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm disabled:opacity-50"
              >
                {publishingTarget === 'main' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Deploying Live...</span>
                  </>
                ) : (
                  <>
                    <Rocket className="w-3.5 h-3.5" />
                    <span>Publish to Main Site</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            disabled={publishingTarget !== null}
            className="px-5 py-2 rounded-xl border border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-semibold text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
