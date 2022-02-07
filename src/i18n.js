import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


import { ESPAÑOL } from "./locales/es/translation";
import { INGLES } from "./locales/en/translation";
import { PORTUGUES } from "./locales/po/translation";


// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(Backend)
//.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: ESPAÑOL
      },
      en: {
        translation: INGLES
      },
      po: {
        translation: PORTUGUES
      },
    }
  });


export default i18n;