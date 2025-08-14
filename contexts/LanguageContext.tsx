'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, TranslationStructure } from '@/lib/translations/types';
import { getTranslation, isRTL } from '@/lib/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: TranslationStructure;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language');
      if (stored === 'ar' || stored === 'nl') {
        return stored;
      }
    }
    return 'en';
  });

  const setLanguage = (newLanguage: LanguageCode) => {
    setLanguageState(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
      
      // Update document direction and class
      document.documentElement.dir = isRTL(newLanguage) ? 'rtl' : 'ltr';
      document.documentElement.classList.toggle('rtl', isRTL(newLanguage));
      document.documentElement.lang = newLanguage;
    }
  };

  useEffect(() => {
    // Set initial direction and language
    if (typeof window !== 'undefined') {
      document.documentElement.dir = isRTL(language) ? 'rtl' : 'ltr';
      document.documentElement.classList.toggle('rtl', isRTL(language));
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = getTranslation(language);
  const isRTLLang = isRTL(language);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      isRTL: isRTLLang 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};