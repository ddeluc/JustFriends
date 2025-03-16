import { motion, transform } from "framer-motion";
import { useEffect, useRef } from "react";

import { styles } from "../../styles";
import { demomode } from "../../constants";

import akiraClip1 from '../../assets/videos/Akira1.mp4';
import champlooClip1 from '../../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../../assets/videos/Kuroko1.mp4';
import cowboy1 from '../../assets/videos/Cowboy1.mp4';
import cityTrain from '../../assets/videos/CityTrain.mp4';
import farine from '../../assets/videos/farinefiveroses.mp4';
import vol4 from '../../assets/volumes/vol4short.mp4';
import vol2 from '../../assets/volumes/vol2short.mp4';
import promo from '../../assets/volumes/promo1.mp4';
import staticNoise from '../../assets/videos/static.mp4';

import { volumesVideoArray } from "../../constants";
import { volumesTitles } from "../../constants";

const demobox = demomode ? styles.demo.back : {};

const MenuBack = ({ hoveredItem }) => {
  const vidRef1 = useRef();
  const vidRef2 = useRef();
  const vidRef3 = useRef();
  // const vidRef4 = useRef();
  // const vidRef5 = useRef();

  useEffect(() => {    
    vidRef1.current.playbackRate = 0.7;
    vidRef2.current.playbackRate = 0.7;
    vidRef3.current.playbackRate = 0.7;  
    // vidRef4.current.playbackRate = 1; 
    // vidRef5.current.playbackRate = 1; 

  }, [hoveredItem]);

  const handleVideoEnd = () => {    
    setCurrentVideoIndex((currentVideoIndex + 1)%videoSources.length);    
  };

  return (
    <>
      <div style={demobox} className={`flex flex-col relative text-center text-[45px] font-shrikhand w-1/3 gap-5`}>
        <video
          style={demobox}
          ref={vidRef1}
          className={hoveredItem == "About" 
            ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
            : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-35 grayscale`}
          src={champlooClip1} onEnded={handleVideoEnd} autoPlay muted loop
        />          
      </div>        
      <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand w-1/3`}>        
        <video
          style={demobox}
          ref={vidRef2}
          className={hoveredItem == "Volumes" 
            ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-75`
            : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-35 grayscale`}
          src={vol2} onEnded={handleVideoEnd} autoPlay muted loop
        />        
      </div>
      <div style={demobox} className={`flex flex-col relative text-center text-[45px] font-shrikhand w-1/3 gap-5`}>
        <video
          style={demobox}
          ref={vidRef3}
          className={hoveredItem == "Join" 
            ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-75`
            : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-35 grayscale`}
          src={cowboy1} onEnded={handleVideoEnd} autoPlay muted loop
        />
      </div>
    </>
  );

  return (
    <>
      <div style={demobox} className={`flex flex-col relative text-center text-[45px] font-shrikhand w-1/3 gap-5`}>
        <div style={demobox} className={`relative h-1/2 text-center text-[45px] font-shrikhand`}>
          <video
            style={demobox}
            ref={vidRef1}
            className={hoveredItem == "About" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-35 grayscale`}
            src={champlooClip1} onEnded={handleVideoEnd} autoPlay muted loop
          />          
        </div >
        <div style={demobox} className={`relative h-1/2 text-center text-[45px] font-shrikhand`}>
          <video
            style={demobox}
            ref={vidRef4}
            className={hoveredItem == "Contact" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-75`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-35 grayscale`}
            src={oceanWaves1} onEnded={handleVideoEnd} autoPlay muted loop
          />          
        </div >
      </div>        
      <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand w-1/3`}>        
        <video
          style={demobox}
          ref={vidRef2}
          className={hoveredItem == "Volumes" 
            ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-75`
            : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-35 grayscale`}
          src={vol2} onEnded={handleVideoEnd} autoPlay muted loop
        />        
      </div>
      <div style={demobox} className={`flex flex-col relative text-center text-[45px] font-shrikhand w-1/3 gap-5`}>
        <div style={demobox} className={`relative h-1/2 text-center text-[45px] font-shrikhand`}>
          <video
            style={demobox}
            ref={vidRef3}
            className={hoveredItem == "Join" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-75`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-35 grayscale`}
            src={cowboy1} onEnded={handleVideoEnd} autoPlay muted loop
          />
        </div> 
        <div style={demobox} className={`relative h-1/2 text-center text-[45px] font-shrikhand`}>
          <video
            style={demobox}
            ref={vidRef5}
            className={hoveredItem == "Service" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-75`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-35 grayscale`}
            src={akiraClip1} onEnded={handleVideoEnd} autoPlay muted loop
          />
        </div>
      </div>
    </>
  );
}

export default MenuBack;