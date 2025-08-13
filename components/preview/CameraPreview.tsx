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

      {/* Recording indicator */}
      <motion.div 
        className="absolute top-4 left-4 flex items-center gap-2"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Circle className="w-3 h-3 fill-red-500 text-red-500" />
        <span className="text-xs font-medium text-white drop-shadow-lg">REC</span>
      </motion.div>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110"
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

      {/* Audio indicator */}
      <div className="absolute bottom-4 right-4">
        <motion.div
          className="flex items-center gap-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Mic className="w-4 h-4 text-white drop-shadow-lg" />
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-green-400 rounded-full"
                animate={{
                  height: ['4px', '16px', '4px']
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Camera label */}
      <div 
        className="absolute bottom-4 left-4 text-xs font-medium px-2 py-1 rounded"
        style={{ 
          backgroundColor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.8)',
          color: isDark ? '#fff' : colors.text
        }}
      >
        Imam Camera
      </div>
    </div>
  )
}