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
import staticNoise from '../assets/videos/static.mp4';

import { volumesVideoArray } from "../constants";
import { volumesTitles } from "../constants";

const demobox = demomode ? styles.demo.back : {};

const VolumesBack = ({ selectedItem, volumesVideoIndex, isMute }) => {
  const volumesVideoRef = useRef();

  useEffect(() => {
    changeVideoSource();

  }, [volumesVideoIndex, selectedItem]);

  const changeVideoSource = () => {
    if (volumesVideoRef.current) {
      volumesVideoRef.current.src = staticNoise;
      volumesVideoRef.current.volume = 0.4;
      volumesVideoRef.current.load();
      volumesVideoRef.current.play();      
    }
  }  

  return (
    <>
      <motion.div style={demobox} className={`relative text-yellow-300 text-center w-1/3 text-[45px] font-shrikhand`}
        initial="initial" 
        animate="animate"
        variants={{
          initial: { opacity: 1, scale: "100%" },
          animate: { opacity: 1, scale: "110%"}
        }}
        transition={{
          duration: 0.5
        }}
      > 
        <div style={demobox} className={`flex flex-col justify-end h-full w-full`}>               
          <video
            style={demobox}
            ref={volumesVideoRef}
            className={`top-0 left-0 w-full h-full absolute object-cover rounded-3xl brightness-85`}
            src={volumesVideoArray[volumesVideoIndex]} onEnded={(event) => {
              event.target.src = volumesVideoArray[volumesVideoIndex];
            }} 
            autoPlay
            muted={isMute}                
          />
          {/* <div style={demobox} className={`absolute text-white text-[40px] m-3 ml-4`}>
            {volumesTitles[volumesVideoIndex]}
          </div>                 */}
        </div>   
      </motion.div> 
    </>
  );
}

export default VolumesBack;