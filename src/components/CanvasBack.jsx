import { motion, transform } from "framer-motion";
import { useEffect, useRef } from "react";

import { styles } from "../styles";
import { demomode } from "../constants";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';
import cityTrain from '../assets/videos/CityTrain.mp4';
import farine from '../assets/videos/farinefiveroses.mp4';
import vol4 from '../assets/volumes/vol4short.mp4';
import vol2 from '../assets/volumes/vol2short.mp4';
import promo from '../assets/volumes/promo1.mp4';



const demobox = demomode ? styles.demo.landing : {};

const CanvasBack = ({ hoveredItem, selectedItem }) => {
  const vidRef1 = useRef();
  const vidRef2 = useRef();
  const vidRef3 = useRef();

  useEffect(() => {
    // if (hoveredItem == "About") {
    //   vidRef1.current.play();
    // } else {
    //   vidRef1.current.pause();
    // }

    // if (hoveredItem == "Volumes") {
    //   vidRef2.current.play();
    // } else {
    //   vidRef2.current.pause();
    // }

    // if (hoveredItem == "Join") {
    //   vidRef3.current.play();
    // } else {
    //   vidRef3.current.pause();
    // }
    if (selectedItem != "None") {
      vidRef1.current.play();
      vidRef2.current.play();
      vidRef3.current.play();
    }
    
  }, [hoveredItem]);

  const handleVideoEnd = () => {    
    setCurrentVideoIndex((currentVideoIndex + 1)%videoSources.length);    
  };

  return (
    <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto grid grid-cols-3 gap-5 my-8`}>
      {selectedItem == "None" ? 
      <>
        <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
          <video
            style={demobox}
            ref={vidRef1}
            className={hoveredItem == "About" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50 grayscale`}
            src={vol4} onEnded={handleVideoEnd} autoPlay muted loop
          />              
        </div >
        <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>        
          <video
            style={demobox}
            ref={vidRef2}
            className={hoveredItem == "Volumes" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50 grayscale`}
            src={vol2} onEnded={handleVideoEnd} autoPlay muted loop
          />        
        </div>
        <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
          <video
            style={demobox}
            ref={vidRef3}
            className={hoveredItem == "Join" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50 grayscale`}
            src={promo} onEnded={handleVideoEnd} autoPlay muted loop
          />
        </div> 
      </>
      :
        <>
        {selectedItem == "About" ?
          <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
            src={vol4} autoPlay muted loop
          />
        : 
          <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
            src={promo} autoPlay muted loop
          />
        }
        </>
      }     

    </div>
  )
}

export default CanvasBack;