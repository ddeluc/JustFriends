import React, { useState, useRef, useEffect } from 'react';

const MenuVideo = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Optional: reset to start
    }
  }, [isPlaying]);

  return (
    <video
        ref={videoRef}
        src={src}
        className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`}
        muted loop autoPlay
    /> 
  );
}

export default MenuVideo;