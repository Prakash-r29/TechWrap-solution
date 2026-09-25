import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { languages } from "../locales/languages";
import { translations } from "../locales/translations";

interface LanguageContextType {
  language: string;
  setLanguage: (code: string) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(() => {
    return localStorage.getItem("techwrap-language") || "en";
  });

  const setLanguage = (code: string) => {
    const selectedLanguage = languages.find(
      (item) => item.code === code
    );

    if (!selectedLanguage) return;

    setLanguageState(code);

    localStorage.setItem("techwrap-language", code);

    document.documentElement.lang = code;
    document.documentElement.dir = selectedLanguage.dir;
  };

  useEffect(() => {
    const selectedLanguage = languages.find(
      (item) => item.code === language
    );

    document.documentElement.lang = language;

    document.documentElement.dir =
      selectedLanguage?.dir || "ltr";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language] || translations.en,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
};