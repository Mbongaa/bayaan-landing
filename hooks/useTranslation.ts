'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { getNestedTranslation, interpolate } from '@/lib/translations';

/**
 * Custom hook for translation functionality
 * Provides easy access to translations and utility functions
 */
export function useTranslation() {
  const { language, setLanguage, t, isRTL } = useLanguage();

  /**
   * Get translation by dot notation path
   * @param path Dot-separated path (e.g., 'navigation.features')
   * @param variables Optional variables for interpolation
   * @returns Translated string
   */
  const translate = (path: string, variables?: Record<string, string | number>): string => {
    const translation = getNestedTranslation(t, path);
    
    if (!translation) {
      console.warn(`Translation not found for path: ${path}`);
      return path; // Return path as fallback
    }
    
    if (variables) {
      return interpolate(translation, variables);
    }
    
    return translation;
  };

  /**
   * Get translation with fallback
   * @param path Dot-separated path
   * @param fallback Fallback string if translation not found
   * @param variables Optional variables for interpolation
   * @returns Translated string or fallback
   */
  const translateWithFallback = (
    path: string, 
    fallback: string,
    variables?: Record<string, string | number>
  ): string => {
    const translation = getNestedTranslation(t, path);
    
    if (!translation || translation === 'TODO') {
      return fallback;
    }
    
    if (variables) {
      return interpolate(translation, variables);
    }
    
    return translation;
  };

  return {
    // Current language
    language,
    
    // Function to change language
    setLanguage,
    
    // Full translation object
    translations: t,
    
    // Shorthand for translations
    t,
    
    // Translation function with path
    translate,
    
    // Translation function with fallback
    translateWithFallback,
    
    // RTL flag
    isRTL,
    
    // Direction helper
    dir: isRTL ? 'rtl' : 'ltr' as const,
  };
}