import  { useRef } from 'react';

const Sound = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="path/to/your/audio/file.mp3" />
      <button onClick={playSound}>Play Sound</button>
      <button onClick={pauseSound}>Pause Sound</button>
    </div>
  );
};

export default Sound;
