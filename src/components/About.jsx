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

const About = ({ setSelectedItem }) => {

  return (
    <div style={demobox} className={`absolute flex justify-end inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12 font-poppins`}>  
      <div style={demobox} className={`w-7/12 flex flex-col justify-center text-[24px] mr-6`}>
        <motion.div 
          style={demobox} 
          className={`font-shrikhand text-[36px] select-none cursor-default`}
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
        >
          A Collective...
        </motion.div>
        <motion.div 
          style={demobox} 
          className={`text-[22px] cursor-default select-none`}
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{duration: 0.5, type: "spring", bounce: 0.3, delay: 0.3 }}
        >                    
          {aboutText}                           
        </motion.div>
        <div style={demobox} className={`flex justify-between mt-6`}>
          <motion.div 
            style={demobox} 
            className={`text-[24px] w-max font-shrikhand cursor-pointer select-none`} 
            initial="initial" 
            whileHover="hovered"
            onClick={() => setSelectedItem("None")}
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
          <motion.div 
            style={demobox} 
            className={`text-[24px] w-max font-shrikhand cursor-pointer select-none`} 
            initial="initial" 
            whileHover="hovered"
            onClick={() => setSelectedItem("Join")}
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
      </div>              
    </div>
  );
};

export default About;