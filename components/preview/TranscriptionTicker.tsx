"use client"

import { useEffect, useRef } from "react"

interface TranscriptionTickerProps {
  words: string[]
  isDark: boolean
  colors: any
}

export default function TranscriptionTicker({ words, isDark, colors }: TranscriptionTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  
  // Join all words into a single text string
  const transcriptionText = words.join(' ')
  
  // Use transform to move text when it overflows (exact logic from conversation page)
  useEffect(() => {
    if (!containerRef.current || !textRef.current) return

    const container = containerRef.current
    const text = textRef.current
    
    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      const containerWidth = container.offsetWidth
      const textWidth = text.scrollWidth
      
      if (textWidth > containerWidth) {
        // Text overflows, need to scroll
        // For RTL (Arabic): Move text to the right to show the left (newest) part
        const offset = textWidth - containerWidth
        text.style.transform = `translateX(${offset}px)`
      } else {
        // No overflow, reset transform
        text.style.transform = 'translateX(0)'
      }
    })
  }, [transcriptionText])

  return (
    <div className="transcription-container w-[calc(100vw-3rem)] mx-auto p-3 sm:p-4 md:p-6 h-full">
      <div 
        ref={containerRef}
        className="relative overflow-hidden h-full flex items-center"
      >
        <div 
          ref={textRef}
          className="absolute whitespace-nowrap transition-transform duration-300 ease-out"
          dir="rtl"
          style={{
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            color: colors.foreground,
            fontWeight: 600,
            fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
            textShadow: isDark 
              ? '0 2px 8px rgba(0, 0, 0, 0.3)' 
              : '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          {transcriptionText || (
            <span style={{ color: colors.muted }}>
              في انتظار النص العربي...
            </span>
          )}
        </div>
      </div>
    </div>
  )
}