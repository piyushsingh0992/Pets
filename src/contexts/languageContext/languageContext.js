import React, { createContext, useContext, useReducer, useState } from "react";
import { languageReduer } from "./languageReducer.js";
import { English } from "./data.js";
let LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // const [language, languageSetter] = useState(English);
  const [language, languageSetter] = useReducer(languageReduer, English);

  return (
    <LanguageContext.Provider value={{ language, languageSetter }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
