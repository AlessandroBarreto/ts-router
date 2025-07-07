import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-GB': {
    translation: {
      welcome: 'Welcome to a translated page! (UK)',
      brand: 'Brand (UK)',
      locale: 'Locale (UK)',
    },
  },
  'en-US': {
    translation: {
      welcome: 'Welcome to a translated page! (US)',
      brand: 'Brand (US)',
      locale: 'Locale (US)',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue sur une page traduite!',
      brand: 'Marque',
      locale: 'Langue',
    },
  },
  it: {
    translation: {
      welcome: 'Benvenuto in una pagina tradotta!',
      brand: 'Marca',
      locale: 'Lingua',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en-GB',
  fallbackLng: ['en-GB', 'en-US'],
  load: 'all',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
