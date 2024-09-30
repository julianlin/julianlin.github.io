import { useContext } from 'react';
import { SettingsContext } from '../SettingsContext';
import { i18nEN } from '../i18n.ts/en';
import { i18nJP } from '../i18n.ts/jp';

export const useI18n = () => {
  const { language, setLanguage } = useContext(SettingsContext);
  let i18n = i18nEN;
  if (language === 'jp') i18n = i18nJP;
  return { i18n, setLanguage };
};
