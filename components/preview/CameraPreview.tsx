"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Mic, Circle, Volume2, VolumeX } from "lucide-react"

interface CameraPreviewProps {
  isDark: boolean
  colors: any
  onTimeUpdate?: (time: number) => void
}

export default function CameraPreview({ isDark, colors, onTimeUpdate }: CameraPreviewProps) {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

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
        border: `1px solid ${colors.border}`
      }}
    >
      {/* MP4 Video Loop */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
      >
        <source src="/camera-preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)'
        }}
      />

      {/* LIVE indicator and Mosque Name - Top Left */}
      <div className="absolute top-4 left-4 flex items-center gap-3">
        <motion.div 
          className="flex items-center gap-2 px-3 py-1 rounded backdrop-blur-sm"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Circle className="w-2 h-2 fill-red-500 text-red-500" />
          <span className="text-sm font-medium text-white">LIVE</span>
        </motion.div>
        
        <span 
          className="text-sm font-medium px-3 py-1 rounded backdrop-blur-sm"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          Al Fourqaan
        </span>
      </div>

      {/* Sound Toggle Button and Camera Label - Top Right */}
      <div className="absolute top-4 right-4 flex items-center gap-3">
        {/* Camera label */}
        <span 
          className="text-sm font-medium px-3 py-1 rounded backdrop-blur-sm"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          Imam Camera
        </span>
        
        {/* Sound Toggle Button */}
        <button
          onClick={toggleSound}
          className="p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </div>
  )
}