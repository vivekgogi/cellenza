// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    keySeparator: false, // keys in form namespace:key
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
