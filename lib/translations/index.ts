import { TranslationStructure, LanguageCode } from './types';
import { en } from './en';
import { ar } from './ar';
import { nl } from './nl';
import { getNestedTranslation, validateTranslationCompleteness } from './utils';

// Translation registry
const translationRegistry: Record<LanguageCode, TranslationStructure> = {
  en,
  ar,
  nl,
};

// Validate translations in development
if (process.env.NODE_ENV === 'development') {
  // Validate Arabic translations against English base
  validateTranslationCompleteness(en, ar, 'ar');
  // Validate Dutch translations against English base
  validateTranslationCompleteness(en, nl, 'nl');
}

/**
 * Get all available translations
 */
export const translations = translationRegistry;

/**
 * Get translation for a specific language with fallback to English
 * @param language Language code
 * @returns Translation object
 */
export function getTranslation(language: LanguageCode): TranslationStructure {
  return translationRegistry[language] || translationRegistry.en;
}

/**
 * Get available language codes
 */
export function getAvailableLanguages(): LanguageCode[] {
  return Object.keys(translationRegistry) as LanguageCode[];
}

/**
 * Check if a language is available
 * @param language Language code to check
 */
export function isLanguageAvailable(language: string): language is LanguageCode {
  return language in translationRegistry;
}

// Re-export utilities
export { 
  getNestedTranslation, 
  interpolate, 
  isRTL, 
  getDirection,
  formatNumber,
  formatCurrency,
  getLanguageName,
  getLanguageFlag 
} from './utils';
export type { TranslationStructure, LanguageCode, TranslationKey } from './types';