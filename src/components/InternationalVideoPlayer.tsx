'use client'

import React, { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react'

interface InternationalVideoPlayerProps {
  videoUrl: string
  posterUrl: string
  countryName: string
}

export default function InternationalVideoPlayer({
  videoUrl,
  posterUrl,
  countryName,
}: InternationalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
      setHasStarted(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
    setHasStarted(false)
  }

  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border-2 border-[#C9A84C]/50 shadow-[0_8px_32px_rgba(0,0,0,0.15)] group">
      {/* Video Element */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          playsInline
          muted={isMuted}
          onEnded={handleVideoEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />

        {/* Ambient Dark Gradient Vignette */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 transition-opacity duration-300 pointer-events-none ${
            isPlaying ? 'opacity-40 hover:opacity-80' : 'opacity-90'
          }`}
        />

        {/* Top Badges */}
        <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 flex items-center justify-between z-10 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C9A84C]/40 text-white text-[10px] sm:text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            Jaipur Export &amp; Quality Process
          </div>
          <span className="text-[10px] sm:text-xs text-white/80 font-medium bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 hidden sm:inline-block">
            {countryName} Delivery Workflow
          </span>
        </div>

        {/* Big Center Play / Pause Trigger */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className={`absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#6B1A2A]/90 hover:bg-[#6B1A2A] text-white flex items-center justify-center shadow-2xl transition-all duration-300 border-2 border-[#C9A84C] active:scale-95 z-20 ${
            isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100 scale-100'
          }`}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {isPlaying ? (
            <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
          ) : (
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-[#C9A84C]" />
          )}
        </button>

        {/* Bottom Control Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between z-20 text-white text-xs">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C]" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#C9A84C]" />
              )}
            </button>
            <span className="text-[11px] sm:text-xs font-medium text-white/90">
              {isPlaying ? 'Playing: Factory to Doorstep Process' : 'Watch How Your Order Is Made & Shipped'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C]" />
              )}
            </button>
            <button
              onClick={handleFullscreen}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors hidden sm:block"
              aria-label="Fullscreen"
            >
              <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
