import { TranslationStructure, LanguageCode } from './types';

/**
 * Get nested translation value using dot notation
 * @param obj Translation object
 * @param path Dot-separated path (e.g., 'navigation.features')
 * @returns Translation value or undefined
 */
export function getNestedTranslation(
  obj: TranslationStructure,
  path: string
): string | undefined {
  const keys = path.split('.');
  let current: any = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  
  return typeof current === 'string' ? current : undefined;
}

/**
 * Interpolate variables in translation string
 * @param template Translation template with {variable} placeholders
 * @param variables Object with variable values
 * @returns Interpolated string
 */
export function interpolate(
  template: string,
  variables: Record<string, string | number>
): string {
  return template.replace(/{(\w+)}/g, (match, key) => {
    return key in variables ? String(variables[key]) : match;
  });
}

/**
 * Check if language is RTL (Right-to-Left)
 * @param language Language code
 * @returns True if RTL language
 */
export function isRTL(language: LanguageCode): boolean {
  return language === 'ar';
}

/**
 * Get text direction for language
 * @param language Language code
 * @returns 'rtl' or 'ltr'
 */
export function getDirection(language: LanguageCode): 'rtl' | 'ltr' {
  return isRTL(language) ? 'rtl' : 'ltr';
}

/**
 * Validate translation completeness
 * Logs warnings for missing translations in development
 * @param base Base translation structure (usually English)
 * @param translation Translation to validate
 * @param language Language code being validated
 */
export function validateTranslationCompleteness(
  base: TranslationStructure,
  translation: TranslationStructure,
  language: LanguageCode
): void {
  if (process.env.NODE_ENV !== 'development') return;
  
  const missingKeys: string[] = [];
  
  function checkKeys(baseObj: any, translationObj: any, path: string = '') {
    for (const key in baseObj) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (!(key in translationObj)) {
        missingKeys.push(currentPath);
      } else if (typeof baseObj[key] === 'object' && !Array.isArray(baseObj[key])) {
        checkKeys(baseObj[key], translationObj[key], currentPath);
      } else if (translationObj[key] === 'TODO') {
        missingKeys.push(currentPath);
      }
    }
  }
  
  checkKeys(base, translation);
  
  if (missingKeys.length > 0) {
    console.warn(
      `[Translation] Missing or incomplete translations for ${language}:`,
      missingKeys
    );
  }
}

/**
 * Format number based on locale
 * @param value Number to format
 * @param language Language code
 * @returns Formatted number string
 */
export function formatNumber(value: number, language: LanguageCode): string {
  const locales = {
    en: 'en-US',
    ar: 'ar-SA',
    nl: 'nl-NL',
  };
  
  return new Intl.NumberFormat(locales[language]).format(value);
}

/**
 * Format currency based on locale
 * @param value Amount to format
 * @param language Language code
 * @param currency Currency code (default: EUR)
 * @returns Formatted currency string
 */
export function formatCurrency(
  value: number,
  language: LanguageCode,
  currency: string = 'EUR'
): string {
  const locales = {
    en: 'en-US',
    ar: 'ar-SA',
    nl: 'nl-NL',
  };
  
  return new Intl.NumberFormat(locales[language], {
    style: 'currency',
    currency,
  }).format(value);
}

/**
 * Get language name in its own language
 * @param language Language code
 * @returns Language name
 */
export function getLanguageName(language: LanguageCode): string {
  const names = {
    en: 'English',
    ar: 'العربية',
    nl: 'Nederlands',
  };
  
  return names[language];
}

/**
 * Get language flag emoji
 * @param language Language code
 * @returns Flag emoji
 */
export function getLanguageFlag(language: LanguageCode): string {
  const flags = {
    en: '🇬🇧',
    ar: '🇸🇦',
    nl: '🇳🇱',
  };
  
  return flags[language];
}