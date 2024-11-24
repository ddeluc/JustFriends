import { useEffect } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { demomode } from "../constants";
import { aboutText } from "../constants";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';
import cityTrain from '../assets/videos/CityTrain.mp4';
import farine from '../assets/videos/farinefiveroses.mp4';

const demobox = demomode ? styles.demo.landing : {};

const Volumes = ({ setSelectedItem, setVolumesVideoIndex, volumesVideoIndex, setIsMute, isMute }) => {

  const incrementVolumesVideoIndex = () => {
    let nextIndex = Math.abs(volumesVideoIndex + 1) % 2;
    setVolumesVideoIndex(nextIndex);
    console.log(volumesVideoIndex);
  };

  const decrementVolumesVideoIndex = () => {
    let nextIndex = Math.abs(volumesVideoIndex - 1) % 2;
    setVolumesVideoIndex(nextIndex);
    console.log(volumesVideoIndex);
  }

  return (
    <>
      <div style={demobox} className={`absolute w-full flex justify-center space-x-12 text-[24px] font-shrikhand`}>
        <motion.div 
          style={demobox} 
          className={`w-28 h-max cursor-pointer select-none text-end`}
          onClick={() => setSelectedItem("None")}
          initial="initial" 
          whileHover="hovered"
          variants={{
            hovered: { opacity: 1, x: "-10%" }
          }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2
          }}
        >
          BACK
        </motion.div>
        <div style={demobox} className={`w-1/3 flex justify-end items-center`}>
          <div 
            style={demobox} 
            className={`mr-2 cursor-pointer`}
            onClick={() => {setIsMute(!isMute); console.log(isMute);}}
          >
            {isMute ? 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7 opacity-85">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
              </svg>          
            : 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7 opacity-85">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
              </svg>
            }            
            
          </div>          
        </div>
        <motion.div 
          style={demobox} 
          className={`w-28 h-max cursor-pointer select-none`}
          onClick={() => setSelectedItem("Join")}
          initial="initial" 
          whileHover="hovered"
          variants={{
            hovered: { opacity: 1, x: "10%" }
          }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2
          }}
        >
          JOIN
        </motion.div>
      </div>               
      <div style={demobox} className={`h-full flex justify-center items-center space-x-12 text-[54px] font-shrikhand`}>                  
        <motion.div 
          style={demobox} 
          className={`w-max h-max cursor-pointer select-none`}
          onClick={() => decrementVolumesVideoIndex()}
          initial="initial" 
          whileHover="hovered"
          variants={{
            hovered: { opacity: 1, x: "-10%" }
          }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2
          }}
        >
          {'<'}
        </motion.div>         
        <div style={demobox} className={`w-1/3`}>
          
        </div>
        <motion.div 
          style={demobox} 
          className={`w-max h-max cursor-pointer select-none`}
          onClick={() => incrementVolumesVideoIndex()}
          initial="initial" 
          whileHover="hovered"
          variants={{
            hovered: { opacity: 1, x: "10%" }
          }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2
          }}
        >
          {">"}
        </motion.div> 
      </div>                 
    </>    
  );
};

export default Volumes;