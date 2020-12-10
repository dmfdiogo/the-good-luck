// Language Context - src/context/Language
import React, { useState, createContext } from "react";
import languages from '../Languages';

const defaultLanguage = languages.enUs;

const LanguageContext = createContext();

export const LanguageProvider = ({ children, language }) => {
   const [currentLanguage, setCurrentLanguage] = useState(language || defaultLanguage);

   const switchLanguage = (values) => {
      setCurrentLanguage(values)
   };

   return (
      <LanguageContext.Provider
         value={{ language: currentLanguage, switchLanguage }}
      >
         {children}
      </LanguageContext.Provider>
   );
};

// export const LanguageConsumer = LanguageContext.Consumer;

export default LanguageContext;
export { languages };