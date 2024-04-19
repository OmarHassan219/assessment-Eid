import { createContext, useState } from 'react';

const AudioContext = createContext();

const AppProvider = ({ children }) => {
  const [pauseAudio, setPauseAudio] = useState(true);
  const [langu, setlangu] = useState('عربي')

 



  return <AudioContext.Provider value={{pauseAudio , setPauseAudio , langu, setlangu}}>{children}</AudioContext.Provider>;
};

export { AppProvider, AudioContext };
