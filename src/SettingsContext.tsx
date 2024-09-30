import { createContext } from 'react';

type language = 'en' | 'jp';

interface settingsProps {
  language: language;
  setLanguage: (language: language) => void;
}

const initSettings: settingsProps = {
  language: 'en',
  setLanguage: () => undefined,
};

export const SettingsContext = createContext(initSettings);