import { useLanguage } from "../context/LanguageContext.jsx";
import translations from "../locales/index.js";

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key, fallback = key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return fallback;
      }
    }

    return value || fallback;
  };

  return { t, language };
}

