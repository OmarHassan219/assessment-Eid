import { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AudioContext = createContext();

const AppProvider = ({ children }) => {
    const {i18n} = useTranslation()
  const [pauseAudio, setPauseAudio] = useState(true);
  const [langu, setlangu] = useState(i18n.language === "en" ? "English" : "عربي");

 



  return <AudioContext.Provider value={{pauseAudio , setPauseAudio , langu, setlangu}}>{children}</AudioContext.Provider>;
};

export { AppProvider, AudioContext };
