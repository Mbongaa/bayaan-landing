"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"

interface Translation {
  lang: string
  text: string
}

interface TranslationCardsProps {
  translations: Translation[]
  isDark: boolean
  colors: any
}

const languageLabels = {
  en: 'English',
  nl: 'Nederlands',
  ar: 'العربية',
}

export default function TranslationCardsDemo({ translations, isDark, colors }: TranslationCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Auto-scroll to bottom when new translations arrive (like original)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [translations])
  
  return (
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto px-3 pb-3 space-y-2 scroll-smooth scrollbar-hide"
    >
      <AnimatePresence mode="popLayout">
        {translations.length > 0 ? (
          translations.filter(t => t && t.text).map((translation, index) => {
            const isLatest = index === translations.length - 1
            
            return (
              <motion.div
                key={`${translation.lang || 'en'}-${index}-${translation.text?.substring(0, 20) || index}`}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ 
                  opacity: isLatest ? 1 : 0.7,
                  y: 0,
                  scale: 1
                }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
                className="relative"
              >
                <div 
                  className="rounded-xl p-3 backdrop-blur-sm transition-all duration-300"
                  style={{ 
                    backgroundColor: isLatest ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
                    border: `1px solid ${isLatest ? 'rgba(10, 58, 58, 0.2)' : 'rgba(10, 58, 58, 0.1)'}`,
                    boxShadow: isLatest ? '0 4px 20px rgba(212, 165, 116, 0.2)' : 'none'
                  }}
                >
                  {/* Golden Indicator Bar for latest */}
                  {isLatest && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                      style={{ backgroundColor: colors.primary }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    />
                  )}
                  
                  {/* Translation text - with italic for Qur'anic verses */}
                  <p 
                    className="leading-relaxed"
                    style={{ 
                      fontFamily: "'Noto Sans Arabic', system-ui, sans-serif",
                      color: colors.foreground,
                      opacity: isLatest ? 1 : 0.8,
                      fontSize: '0.875rem',
                      fontStyle: translation.text.includes("'") ? 'italic' : 'normal'
                    }}
                  >
                    {translation.text}
                  </p>
                </div>
              </motion.div>
            )
          })
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-full"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 mx-auto mb-4 rounded-full"
                style={{ backgroundColor: `${colors.primary}20` }}
              >
                <div 
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${colors.primary}40` }}
                >
                  <Globe className="w-8 h-8" style={{ color: colors.primary }} />
                </div>
              </motion.div>
              <p style={{ color: colors.muted }}>
                Waiting for translations...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}