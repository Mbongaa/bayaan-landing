'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageCode } from '@/lib/translations/types';
import { getLanguageName, getLanguageFlag } from '@/lib/translations';

const languages: { code: LanguageCode; name: string; flag: string }[] = [
  { code: 'en', name: getLanguageName('en'), flag: getLanguageFlag('en') },
  { code: 'ar', name: getLanguageName('ar'), flag: getLanguageFlag('ar') },
  { code: 'nl', name: getLanguageName('nl'), flag: getLanguageFlag('nl') },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 shadow-lg"
        aria-label={`Current language: ${currentLanguage.name}`}
        title={currentLanguage.name}
      >
        <span className="text-xl">{currentLanguage.flag}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 p-2"
          >
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all hover:scale-110 ${
                    language === lang.code ? 'ring-2 ring-islamic-primary ring-offset-2' : ''
                  }`}
                  title={lang.name}
                  aria-label={`Switch to ${lang.name}`}
                >
                  <span className="text-xl">{lang.flag}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}