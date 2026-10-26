'use client'

import React, { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

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

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
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
  }

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black border border-[#C9A84C]/40 shadow-md group">
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
          className="w-full h-full object-cover cursor-pointer"
          onClick={togglePlay}
        />

        {/* Subtle Vignette Overlay when paused */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 pointer-events-none ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Big Center Play Button (visible when paused) */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            aria-label="Play video"
            className="absolute inset-0 m-auto w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#195799] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#C9A84C] z-20 cursor-pointer"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Play className="w-7 h-7 fill-current ml-1 text-[#C9A84C]" />
          </button>
        )}

        {/* Minimal Bottom Controls Bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between z-20 text-white transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
          }`}
        >
          <button
            onClick={togglePlay}
            className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 fill-current text-[#C9A84C]" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white/80" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#C9A84C]" />
              )}
            </button>
            <button
              onClick={handleFullscreen}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors hidden sm:block"
              aria-label="Fullscreen"
            >
              <Maximize className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
