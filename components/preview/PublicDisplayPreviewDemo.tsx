"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import TranscriptionTickerDemo from "./TranscriptionTickerDemo"
import TranslationCardsDemo from "./TranslationCardsDemo"
import CameraPreviewDemo from "./CameraPreviewDemo"
import { demoData, timedTranscript } from "./demoData"

interface PublicDisplayPreviewProps {
  className?: string
  isDark?: boolean
}

export default function PublicDisplayPreviewDemo({ className = "", isDark = false }: PublicDisplayPreviewProps) {
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
        // Stop adding words when we reach the end
        // The video loop will handle the reset
        if (wordIntervalRef.current) {
          clearInterval(wordIntervalRef.current);
          wordIntervalRef.current = null;
        }
      }
    };

    // Add 2 second delay to simulate real-world processing delay
    const delayTimeout = setTimeout(() => {
      wordIntervalRef.current = setInterval(addWord, 600); // Add a word every 600ms
    }, 2000); // 2 second delay before starting transcription
    
    return () => {
      clearTimeout(delayTimeout);
      if (wordIntervalRef.current) {
        clearInterval(wordIntervalRef.current);
        wordIntervalRef.current = null;
      }
    };
  }, [isDevMode]);

  // Sync translation cards with video time
  useEffect(() => {
    if (!isDevMode) return;

    // Don't process translations until 2 seconds have passed (processing delay)
    if (videoTimeRef.current < 2.0) {
      return;
    }

    // Add 2 second delay to simulate real-world processing delay
    // Adjust the time check to account for the delay
    const adjustedTime = videoTimeRef.current - 2.0;
    
    // Find current segment based on adjusted video time
    const segment = timedTranscript.find(
      s => adjustedTime >= s.startTime && adjustedTime < s.endTime
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
      // Reset everything immediately when video loops
      setArabicWords([]);
      setTranslations([]);
      setProcessedSegments(new Set());
      setCurrentSegment(null);
      
      // Clear the word interval if it exists
      if (wordIntervalRef.current) {
        clearInterval(wordIntervalRef.current);
        wordIntervalRef.current = null;
      }
      
      // Restart the Arabic words with 2 second delay
      setTimeout(() => {
        let wordIndex = 0;
        const addWord = () => {
          if (wordIndex < demoData.arabicWords.length) {
            setArabicWords(prev => [...prev, demoData.arabicWords[wordIndex]]);
            wordIndex++;
          }
        };
        wordIntervalRef.current = setInterval(addWord, 600);
      }, 2000);
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
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Main container with exact padding like original */}
      <div className="relative h-full flex flex-col p-4 md:p-6">
        
        {/* Top Section - Arabic Transcription (reduced height and subtler) */}
        <motion.div 
          className="h-[60px] mb-3 opacity-70"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.23, 1, 0.32, 1],
            delay: 0.6 // After title (0.3s) + buffer
          }}
        >
          <TranscriptionTickerDemo 
            words={arabicWords}
            isDark={isDark}
            colors={colors}
          />
        </motion.div>

        {/* Bottom Section - Camera + Translations (remaining height) */}
        <div className="h-[calc(100%-60px-0.75rem)] flex flex-col lg:flex-row gap-4">
          
          {/* Camera Feed (40% width on desktop, full on mobile) */}
          <motion.div 
            className="relative h-[30vh] lg:h-full rounded-xl shadow-inner overflow-hidden flex-shrink-0" 
            style={{ 
              backgroundColor: colors.cameraBackground,
              width: !isMobile ? '40%' : '100%',
              minHeight: '200px'
            }}
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.23, 1, 0.32, 1],
              delay: 0.8 // After transcription box
            }}
          >
            <CameraPreviewDemo 
              isDark={isDark} 
              colors={colors} 
              onTimeUpdate={handleVideoTimeUpdate}
            />
          </motion.div>

          {/* Translation Cards (60% width on desktop, full on mobile) */}
          <motion.div 
            className="h-full flex flex-col overflow-hidden transition-[width] duration-75"
            style={{
              width: !isMobile ? '60%' : '100%'
            }}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.23, 1, 0.32, 1],
              delay: 1.0 // After camera box
            }}
          >
            <TranslationCardsDemo 
              translations={translations}
              isDark={isDark}
              colors={colors}
            />
          </motion.div>
        </div>


        {/* Invisible spacer to maintain layout - same dimensions as removed live indicator */}
        <div 
          className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full invisible"
          style={{ 
            backgroundColor: 'transparent',
            border: '1px solid transparent'
          }}
        >
          <div className="w-2 h-2 rounded-full" />
          <span className="text-xs font-medium">
            LIVE PREVIEW
          </span>
        </div>
      </div>
    </div>
  )
}