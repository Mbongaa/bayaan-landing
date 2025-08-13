"use client"

import { useRef, useEffect } from "react"

interface CameraPreviewProps {
  isDark: boolean
  colors: any
  onTimeUpdate?: (time: number) => void
  onSoundInteraction?: () => void
}

export default function CameraPreviewDemo({ isDark, colors, onTimeUpdate, onSoundInteraction }: CameraPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Report video time to parent
  useEffect(() => {
    const video = videoRef.current
    if (!video || !onTimeUpdate) return

    const handleTimeUpdate = () => {
      onTimeUpdate(video.currentTime)
    }

    const handleVideoEnd = () => {
      // When video ends and loops, report time as 0
      onTimeUpdate(0)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleVideoEnd)
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [onTimeUpdate])

  return (
    <div 
      className="relative w-full h-full rounded-xl overflow-hidden shadow-inner"
      style={{ 
        backgroundColor: isDark ? '#000' : colors.card,
        border: `1px solid ${colors.border}`,
        boxShadow: '0 4px 20px rgba(212, 165, 116, 0.2)'
      }}
    >
      {/* MP4 Video Loop */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/camera-preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}