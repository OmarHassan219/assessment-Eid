import { createContext, useState } from 'react';

const AudioContext = createContext();

const AppProvider = ({ children }) => {
  const [pauseAudio, setPauseAudio] = useState(true);

 



  return <AudioContext.Provider value={{pauseAudio , setPauseAudio}}>{children}</AudioContext.Provider>;
};

export { AppProvider, AudioContext };
