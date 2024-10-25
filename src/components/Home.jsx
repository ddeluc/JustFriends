import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { landingHover } from "../utils/motion";
import { suffixWords } from "../constants";
import { demomode } from "../constants";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';
import cityTrain from '../assets/videos/CityTrain.mp4';

import volume2 from '../assets/volumes/vol2.mp4';
import volume4 from '../assets/volumes/vol4.mp4';


const videoSources = [
  {title: oceanWaves1, opacity: 50},
  {title: kuroko1, opacity: 50},
]

import Title from "./Title";
import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";

const demobox = demomode ? styles.demo.landing : {};

const DURATION = 0.05;
const STAGGER = 0.025;

const Home = ({ setOnLanding }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const titleEng = "Just Friends.";
  const titleJap = "友情"
  const subTitleJap1 = "ゆっくりと"
  const subTitleEng1 = "Taking it slow."
  const subTitleJap2 = "思 い 出 づ く り"
  const subTitleEng2 = "Creating memories."

  const handleVideoEnd = () => {    
    setCurrentVideoIndex((currentVideoIndex + 1)%videoSources.length);    
  };

    return (
      <section 
        className={`relative w-full h-screen mx-auto flex items-center bg-black`}
        style={demobox}
      >
               
        {/* <div className={`absolute flex flex-col inset-8 select-none`}> 
          <video
            style={demobox}
            className={`object-cover w-full h-full absolute rounded-3xl brightness-40`}
            src={volume4} onEnded={handleVideoEnd} autoPlay muted 
          />          
        </div> */}

        
        <div style={demobox} className={`absolute max-h-172 flex items-center h-full w-full`}>
          <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto flex flex-row justify-evenly gap-5 my-8`}>
            <div className={`text-yellow-300 text-[40px] z-20 font-shrikhand`}>
              About
            </div >
            <div className={`text-yellow-300 text-[40px] z-20 font-shrikhand`}>
              Volumes
            </div>
            <div className={`text-yellow-300 text-[40px] z-20 font-shrikhand`}>
              Radio
            </div>
          </div>
          <HannyaCanvas hannyaPos={0} />
        </div>                 
      </section>
    );
  };

export default Home;