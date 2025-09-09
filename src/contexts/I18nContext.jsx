import { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '../i18n/en.json';
import csTranslations from '../i18n/cs.json';

const translations = {
  en: enTranslations,
  cs: csTranslations
};

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', lang);
    console.log('Language changed to:', lang);
  }, [lang]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    
    // Navigate through nested keys
    for (const k of keys) {
      if (value && typeof value === 'object' && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to English if translation is missing
        let fallbackValue = translations.en;
        for (const fallbackKey of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fallbackValue[fallbackKey] !== undefined) {
            fallbackValue = fallbackValue[fallbackKey];
          } else {
            return key; // Return key if translation is completely missing
          }
        }
        return fallbackValue;
      }
    }
    
    return value || key;
  };

  const toggleLanguage = () => {
    console.log('Toggling language from:', lang);
    setLang(prevLang => prevLang === 'en' ? 'cs' : 'en');
  };

  const value = {
    lang,
    setLang,
    toggleLanguage,
    t
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};


