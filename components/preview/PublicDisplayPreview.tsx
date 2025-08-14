"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  
  // Sound button animation states
  const [hasInteractedWithSound, setHasInteractedWithSound] = useState(false)
  const [soundAnimationPhase, setSoundAnimationPhase] = useState(0)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Progressive sound button animation phases
  useEffect(() => {
    if (hasInteractedWithSound) return;

    // Phase 1: Subtle pulse (starts immediately)
    setSoundAnimationPhase(1);

    // Phase 2: Ripple waves (after 3 seconds)
    const phase2Timer = setTimeout(() => {
      if (!hasInteractedWithSound) {
        setSoundAnimationPhase(2);
      }
    }, 3000);

    // Phase 3: Notification badge (after 6 seconds)
    const phase3Timer = setTimeout(() => {
      if (!hasInteractedWithSound) {
        setSoundAnimationPhase(3);
      }
    }, 6000);

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
    };
  }, [hasInteractedWithSound]);

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

    // Add 3.5 second delay to match the new animation timing and simulate processing
    const delayTimeout = setTimeout(() => {
      wordIntervalRef.current = setInterval(addWord, 600); // Add a word every 600ms
    }, 3500); // 3.5 second delay to let animations settle before starting transcription
    
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
      
      // Restart the Arabic words with 3.5 second delay
      setTimeout(() => {
        let wordIndex = 0;
        const addWord = () => {
          if (wordIndex < demoData.arabicWords.length) {
            setArabicWords(prev => [...prev, demoData.arabicWords[wordIndex]]);
            wordIndex++;
          }
        };
        wordIntervalRef.current = setInterval(addWord, 600);
      }, 3500);
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
    <motion.div 
      className={`relative w-full h-full ${className}`}
      style={{ backgroundColor: colors.background }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      {/* Sound Button Animation Overlay - Desktop only to prevent mobile viewport expansion */}
      <AnimatePresence>
        {soundAnimationPhase > 0 && !hasInteractedWithSound && !isMobile && (
          <div 
            className="absolute pointer-events-none"
            style={{
              // Position to center on the sound button (top-right of camera box)
              // Camera starts at 13vh + 1rem from top, sound button is 16px from top + half button height (20px)
              top: 'calc(13vh + 1rem + 16px + 20px)',
              // The sound button is in the top-right: camera width (40%) - padding (16px) - button position from right (approx 50px for "Imam Camera" + button)
              left: 'calc(40% - 50px)',
              zIndex: 9999
            }}
          >
            {/* Phase 2: Ripple Waves */}
            {soundAnimationPhase >= 2 && (
              <>
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={`ripple-${index}`}
                    className="absolute rounded-full"
                    style={{
                      width: '40px',
                      height: '40px',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      border: '2px solid rgba(212, 165, 116, 0.6)',
                      boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)'
                    }}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{
                      scale: [1, 3, 4],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      delay: index * 0.5,
                      repeat: Infinity,
                      repeatDelay: 0.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </>
            )}

            {/* Phase 1: Subtle Pulse Glow */}
            {soundAnimationPhase >= 1 && (
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '50px',
                  height: '50px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(212, 165, 116, 0.5) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                  willChange: 'transform, opacity'
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}

            {/* Phase 3: Notification Badge with Arrow */}
            {soundAnimationPhase >= 3 && (
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  top: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
                initial={{ scale: 0, opacity: 0, y: 10 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  y: 0
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15
                }}
              >
                <motion.div
                  className="relative px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg"
                  animate={{
                    y: [0, -3, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)'
                  }}
                >
                  SOUND ON
                  {/* Arrow pointing down */}
                  <div 
                    className="absolute w-0 h-0"
                    style={{
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid rgb(239, 68, 68)'
                    }}
                  />
                </motion.div>
              </motion.div>
            )}

          </div>
        )}
      </AnimatePresence>

      {/* Main container with exact padding like original */}
      <div className="relative h-full flex flex-col p-4 md:p-6">
        
        {/* Top Section - Arabic Transcription (reduced height and subtler) */}
        <motion.div 
          className="h-[13vh] min-h-[70px] mb-4 opacity-70"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.43, 0.13, 0.23, 0.96], // More natural easing
            delay: 1.2 // Give header time to settle (increased from 0.6)
          }}
        >
          <TranscriptionTicker 
            words={arabicWords}
            isDark={isDark}
            colors={colors}
          />
        </motion.div>

        {/* Bottom Section - Camera + Translations (remaining height) */}
        <div className="h-[calc(100%-13vh-1rem)] flex flex-col lg:flex-row gap-4">
          
          {/* Camera Feed (40% width on desktop, full on mobile) */}
          <motion.div 
            className="relative h-[30vh] lg:h-full rounded-xl shadow-inner overflow-hidden flex-shrink-0" 
            style={{ 
              backgroundColor: colors.cameraBackground,
              width: !isMobile ? '40%' : '100%',
              minHeight: '200px'
            }}
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.43, 0.13, 0.23, 0.96], // Smoother, more natural easing
              delay: 1.6 // After transcription starts appearing (increased from 0.8)
            }}
          >
            <CameraPreview 
              isDark={isDark} 
              colors={colors} 
              onTimeUpdate={handleVideoTimeUpdate}
              onSoundInteraction={() => setHasInteractedWithSound(true)}
            />
          </motion.div>

          {/* Translation Cards (60% width on desktop, full on mobile) */}
          <motion.div 
            className="h-full flex flex-col overflow-hidden transition-[width] duration-75"
            style={{
              width: !isMobile ? '60%' : '100%'
            }}
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.43, 0.13, 0.23, 0.96], // Consistent easing
              delay: 1.9 // Staggered after camera (increased from 1.0)
            }}
          >
            <TranslationCards 
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
    </motion.div>
  )
}