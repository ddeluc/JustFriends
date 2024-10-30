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

const About = ({ hoveredItem, selectedItem }) => {
  useEffect(() => {
    console.log(hoveredItem);
    console.log(selectedItem);
    console.log("rendered about")
  }, []);

  return (
    <>
      <video
        style={demobox}
        className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
        src={akiraClip1} autoPlay muted loop
      />
      <div style={demobox} className={`absolute flex justify-end inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12`}>      
        <div style={demobox} className={`w-7/12 my-12 flex items-center justify-center text-[24px]`}>
          {aboutText}        
        </div>      
      </div>
    </>    
  );
};

export default About;