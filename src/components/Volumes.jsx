import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { HannyaCanvas } from "./canvas";


import { styles } from "../styles";

import { demomode, volumesVideoArray } from "../constants";
import { volumesDescription } from "../constants";

import coverImg from "../assets/photos/volumeCovers/Vol1CoverGib.png"
import vol1 from "../assets/videos/Volumes/Vol2.mp4"
import staticNoise from "../assets/videos/WhiteNoise/whiteNoise.mp4"

const demobox = demomode ? styles.demo.landing : {};


const Volumes = ({ setSelectedIndex }) => {  
  const videoRef = useRef();
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    changeVideoSource();
  }, [videoIndex]);

  const incrementVideoIndex = () => {
    let nextIndex = Math.abs(videoIndex + 1) % 5;
    setVideoIndex(nextIndex);
    console.log(videoIndex);
  };

  const decrementVideoIndex = () => {
    let nextIndex = videoIndex;
    if (videoIndex == 0) {
      nextIndex = 4;
    } else {
      nextIndex = nextIndex - 1;
    }
    setVideoIndex(nextIndex);
    console.log(videoIndex);
  };

  const changeVideoSource = () => {
    if (videoRef.current) {
      videoRef.current.src = staticNoise;
      videoRef.current.volume = 0.4;
      videoRef.current.load();
      videoRef.current.play();      
    }
  }

  return (
    <div className={`relative justify-center gap-8 flex h-full overflow-hidden`} style={demobox}>
      <div className={`relative flex flex-col justify-between h-full p-4 max-w-[40rem]`} style={demobox}>
        <div className={`relative z-20 pointer-events-none ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.div className={`relative flex ${demomode ? 'border-purple-600 border-2' : ''}`}>
            <motion.span className={`relative inline-block font-anton text-[110px] ${demomode ? 'border-purple-600 border-2' : ''}`}>VOLUMES</motion.span>
            <motion.span className={`absolute -top-1 left-1 font-shrikhand text-[32px] z-30`}>JUST FRIENDS.</motion.span>
            <motion.span className={`relative inline-block font-mochiy text-red-600 text-[101px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続</motion.span>
          </motion.div>       
          <motion.div className={`relative backdrop-blur-sm -top-4 break-words text-[18px] font-montserrat ${demomode ? 'border-purple-600 border-2' : ''}`}>
            {volumesDescription}
          </motion.div> 
        </div>
        <div className={`relative flex justify-between items-center h ${demomode ? 'border-purple-600 border-2' : ''}`}>
          {/* <motion.div className={`relative font-anton inline-block text-[28px] z-20 ${demomode ? 'border-purple-600 border-2' : ''}`}>
            BACK
          </motion.div> */}
          <motion.div className={`relative font-anton inline-block text-[36px] z-20 bg-red-600 text-white px-2 p-1 rounded-lg ${demomode ? 'border-purple-600 border-2' : ''}`}>
            TICKETS
          </motion.div>
        </div>       
        
        <HannyaCanvas hScale={14} hpx={0} hpy={-0.7} hpz={0} />
      </div>
      <div className={`relative flex-1 h-full max-w-[40rem] p-4`} style={demobox}>
        <video
          ref={videoRef}
          style={demobox}          
          className={`relative object-cover w-full h-full rounded-lg`}
          src={volumesVideoArray[videoIndex].src}
          onEnded={(event) => {event.target.src = volumesVideoArray[videoIndex].src}}
          autoPlay
          muted
        />
        <div className={`absolute flex items-center opacity-75 font-dot-gothic bottom-16 left-16 z-20`}>
          <div className={`w-0 h-0 
            border-t-[20px] border-t-transparent 
            border-b-[20px] border-b-transparent 
            border-r-[20px] border-l-white mr-8`}
            onClick={() => decrementVideoIndex()}
          />
          <div className={`${demomode ? 'border-purple-600 border-2' : ''}`}>
            <div className={`font-dot-gothic text-[40px] font-bold`}>{volumesVideoArray[videoIndex].displayTitle}</div>
            <div className={`font-dot-gothic text-[30px]`}>{volumesVideoArray[videoIndex].location}</div>
            <div className={`font-dot-gothic text-[30px]`}>4/26/2025</div>
          </div>
          <div className={`w-0 h-0 
            border-t-[20px] border-t-transparent 
            border-b-[20px] border-b-transparent 
            border-l-[20px] border-l-white ml-6`}
            onClick={() => incrementVideoIndex()}
          />
        </div>
        
      </div>
    </div>   
  );
};

export default Volumes;