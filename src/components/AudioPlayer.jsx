import React, { useState, useEffect, useContext } from 'react'; 
import { AudioContext } from '../context/AudioContext';
 
const AudioPlayer = ({ src }) => { 
  const [audio] = useState(new Audio(src)); 
  const { pauseAudio, setPauseAudio } = useContext(AudioContext);

  useEffect(() => { 
    if(pauseAudio){
        audio.pause();
audio.currentTime = 0; 
    }else{
        
        audio.play(); 
    }
    return () => { 
      audio.pause(); 
      audio.currentTime = 0; 
    }; 
  }, [audio, pauseAudio]); 
 
  return null; // This component doesn't render anything visible 
}; 
 
export default AudioPlayer;