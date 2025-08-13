"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Mic, Circle, Volume2, VolumeX } from "lucide-react"

interface CameraPreviewProps {
  isDark: boolean
  colors: any
  onTimeUpdate?: (time: number) => void
  onSoundInteraction?: () => void
}

export default function CameraPreview({ isDark, colors, onTimeUpdate, onSoundInteraction }: CameraPreviewProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      setHasInteracted(true) // Stop animation after first interaction
      // Notify parent that sound button was interacted with
      if (onSoundInteraction) {
        onSoundInteraction()
      }
    }
  }

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

      {/* Desktop: LIVE indicator and Mosque Name together - Top Left */}
      {!isMobile && (
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
      )}

      {/* Mobile: LIVE indicator top-left, Mosque Name bottom-left */}
      {isMobile && (
        <>
          <div className="absolute top-4 left-4">
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
          </div>

          <div className="absolute bottom-4 left-4">
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
        </>
      )}

      {/* Sound Toggle Button and Camera Label - Top Right */}
      <div className="absolute top-4 right-4 flex items-center gap-3">
        {/* Camera label - Hidden on mobile */}
        {!isMobile && (
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
        )}
        
        {/* Sound Toggle Button with Animation (Mobile Only) */}
        <motion.button
          onClick={toggleSound}
          className="relative p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          animate={!hasInteracted && isMobile ? {
            scale: [1, 1.15, 1],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: hasInteracted ? 0 : Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Glowing ring animation - Mobile only */}
          {!hasInteracted && isMobile && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(212, 165, 116, 0.8)',
                boxShadow: '0 0 15px rgba(212, 165, 116, 0.6)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.8, 1.3, 1.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                repeatDelay: 0.5
              }}
            />
          )}
          
          {/* Icon with subtle glow when not interacted - Mobile only */}
          <div className={!hasInteracted && isMobile ? "animate-pulse" : ""}>
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white relative z-10" />
            ) : (
              <Volume2 className="w-5 h-5 text-white relative z-10" />
            )}
          </div>
          
          {/* Subtle golden glow background when not interacted - Mobile only */}
          {!hasInteracted && isMobile && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(212, 165, 116, 0.3) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.button>
      </div>
    </div>
  )
}