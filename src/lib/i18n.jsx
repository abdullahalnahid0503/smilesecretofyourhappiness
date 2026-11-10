import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('smile-lang') || 'en');

  useEffect(() => {
    localStorage.setItem('smile-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key;
  // tx: pick the current language from a bilingual object { en, bn } — falls back to en / raw value
  const tx = (value) =>
    value && typeof value === 'object' && !Array.isArray(value) ? value[lang] ?? value.en : value;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);