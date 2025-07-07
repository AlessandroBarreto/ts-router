import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useBrandLocaleTranslation(locale: string) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return { t, i18n, language: i18n.language };
}
