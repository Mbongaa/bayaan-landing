"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import TranscriptionTicker from "./TranscriptionTicker"
import TranslationCards from "./TranslationCards"
import CameraPreview from "./CameraPreview"
import { demoData, timedTranscript } from "./demoData"

interface PublicDisplayPreviewProps {
  className?: string
  isDark?: boolean
}

export default function PublicDisplayPreview({ className = "", isDark = false }: PublicDisplayPreviewProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentTranslationIndex, setCurrentTranslationIndex] = useState(0)
  const [arabicWords, setArabicWords] = useState<string[]>([])
  const [translations, setTranslations] = useState<{ lang: string; text: string }[]>([])
  const [isDevMode, setIsDevMode] = useState(true) // Demo mode enabled by default for preview
  const [isMobile, setIsMobile] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [currentSegment, setCurrentSegment] = useState<typeof timedTranscript[0] | null>(null)
  const [processedSegments, setProcessedSegments] = useState<Set<number>>(new Set())
  const videoTimeRef = useRef<number>(0)
  const wordIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simple word-by-word display for Arabic transcription
  useEffect(() => {
    if (!isDevMode) return;

    let wordIndex = 0;

    const addWord = () => {
      if (wordIndex < demoData.arabicWords.length) {
        // Add words one by one
        setArabicWords(prev => [...prev, demoData.arabicWords[wordIndex]]);
        wordIndex++;
      } else {
        // Loop back to beginning after a pause
        setTimeout(() => {
          wordIndex = 0;
          setArabicWords([]);
        }, 3000);
      }
    };

    // Start adding words immediately
    const wordInterval = setInterval(addWord, 600); // Add a word every 600ms
    
    return () => {
      clearInterval(wordInterval);
    };
  }, [isDevMode]);

  // Sync translation cards with video time
  useEffect(() => {
    if (!isDevMode) return;

    // Find current segment based on video time
    const segment = timedTranscript.find(
      s => videoTimeRef.current >= s.startTime && videoTimeRef.current < s.endTime
    );

    // Only process if we have a new segment
    if (segment && segment.id !== currentSegment?.id) {
      console.log('New segment:', segment.id, 'at time:', videoTimeRef.current);
      setCurrentSegment(segment);
      
      // Add translation card (check if not already added)
      if (!processedSegments.has(segment.id)) {
        setProcessedSegments(prev => {
          const newSet = new Set(prev);
          newSet.add(segment.id);
          return newSet;
        });
        
        const newTranslation = {
          lang: "en",
          text: segment.translation.en
        };
        
        setTranslations(prev => {
          // Check if this translation already exists to prevent duplicates
          const exists = prev.some(t => t.text === newTranslation.text);
          if (!exists) {
            const updated = [...prev, newTranslation];
            return updated.slice(-15);
          }
          return prev;
        });
      }
    }
  }, [currentTime, isDevMode]);

  // Update video time from CameraPreview
  const handleVideoTimeUpdate = (time: number) => {
    // Check if video has looped/reset (time jumped backwards significantly)
    if (videoTimeRef.current > 60 && time < 5) {
      console.log('Video reset detected, clearing displays');
      // Reset everything when video loops
      setArabicWords([]);
      setTranslations([]);
      setProcessedSegments(new Set());
      setCurrentSegment(null);
    }
    
    videoTimeRef.current = time;
    setCurrentTime(time);
  };

  // EXACT colors from original QuranDisplayView
  const colors = {
    background: '#fdf1f4', // Exact warm cream background
    foreground: '#0a3a3a', // Exact text color
    card: 'rgba(255, 255, 255, 0.5)', // Exact card opacity
    cardHover: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(10, 58, 58, 0.15)', // Exact border
    muted: 'rgba(10, 58, 58, 0.7)', // Exact muted text
    primary: '#d4a574', // Exact primary golden color
    cameraBackground: 'rgba(10, 58, 58, 0.05)', // Exact camera bg
  }

  return (
    <div 
      className={`relative w-full h-full ${className}`}
      style={{ backgroundColor: colors.background }}
    >
      {/* Main container with exact padding like original */}
      <div className="relative h-full flex flex-col p-4 md:p-6">
        
        {/* Top Section - Arabic Transcription (15vh like original) */}
        <div className="h-[15vh] min-h-[80px] mb-4">
          <TranscriptionTicker 
            words={arabicWords}
            isDark={isDark}
            colors={colors}
          />
        </div>

        {/* Bottom Section - Camera + Translations (remaining height) */}
        <div className="h-[calc(100%-15vh-1rem)] flex flex-col lg:flex-row gap-4">
          
          {/* Camera Feed (40% width on desktop, full on mobile) */}
          <div 
            className="relative h-[30vh] lg:h-full rounded-xl shadow-inner overflow-hidden flex-shrink-0" 
            style={{ 
              backgroundColor: colors.cameraBackground,
              width: !isMobile ? '40%' : '100%',
              minHeight: '200px'
            }}
          >
            <CameraPreview 
              isDark={isDark} 
              colors={colors} 
              onTimeUpdate={handleVideoTimeUpdate}
            />
          </div>

          {/* Translation Cards (60% width on desktop, full on mobile) */}
          <div className="h-full flex flex-col overflow-hidden transition-[width] duration-75"
            style={{
              width: !isMobile ? '60%' : '100%'
            }}
          >
            <TranslationCards 
              translations={translations}
              isDark={isDark}
              colors={colors}
            />
          </div>
        </div>


        {/* Live indicator - top right */}
        <motion.div 
          className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ 
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)'
          }}
        >
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-medium text-red-600">
            LIVE PREVIEW
          </span>
        </motion.div>
      </div>
    </div>
  )
}