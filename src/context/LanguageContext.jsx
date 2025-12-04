import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Standard-Sprache aus localStorage oder Browser-Sprache, Fallback: 'de'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    if (saved) return saved;
    
    // Browser-Sprache prüfen
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "en" ? "en" : "de";
  });

  // Sprache in localStorage speichern
  useEffect(() => {
    localStorage.setItem("language", language);
    // Optional: HTML lang-Attribut setzen
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

