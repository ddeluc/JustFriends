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

const videoSources = [
  {title: whiteNoise, opacity: 50},
  {title: akiraClip1, opacity: 50},
  {title: champlooClip1, opacity: 50},
  {title: oceanWaves1, opacity: 50},
  {title: kuroko1, opacity: 50},
  {title: cowboy1, opacity: 50},
]

import Title from "./Title";
import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";

const demobox = demomode ? styles.demo.landing : {};

const DURATION = 0.05;
const STAGGER = 0.025;

const Landing = ({ setOnLanding }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const titleEng = "Just Friends.";
  const titleJap = "友情 | MTL"
  const subTitleJap1 = "ゆっくりと"
  const subTitleEng1 = "Taking it slow."
  const subTitleJap2 = "思 い 出 づ く り"
  const subTitleEng2 = "Creating memories."

  const handleVideoEnd = () => {    
    setCurrentVideoIndex((currentVideoIndex + 1)%videoSources.length);    
  };

  return (
    <section 
      className={`relative flex flex-row w-full h-screen m-auto bg-black justify-center items-center p-8`}
      style={demobox}
    >
      {/* <video
        className={`absolute object-cover w-full h-full rounded-3xl brightness-50`}
        style={demobox}
        src={whiteNoise} loop autoPlay muted 
      />  */}
      <video
        className={`object-cover w-full h-full rounded-3xl brightness-${videoSources[currentVideoIndex].opacity}`}
        // style={demobox}
        // style={{boxShadow: '0 0 30px #ffffff'}}
        src={videoSources[currentVideoIndex].title} onEnded={handleVideoEnd} autoPlay muted 
      />
      
      <motion.div 
        className={`flex flex-col justify-end font-bold cursor-default absolute select-none`}
        style={demobox}
        initial="initial"
        whileHover="hovered"
      >
        <motion.div
          className={`text-red-500 text-[72px] absolute z-10`}
          style={demobox}
          variants={{
            hovered: { 
              y: 2, 
              x: 2,
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.1
              }
            }
          }}          
        >
          {titleEng}
        </motion.div>
        <motion.div 
          className={`text-yellow-300 text-[72px] z-20`}
          style={demobox}
          variants={{            
            hovered: { 
              y: -4, 
              x: -4,
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.1
              }
            }
          }}  
        >
          {titleEng}
        </motion.div>
        <motion.div
          className={`absolute block overflow-hidden whitespace-nowrap bottom-0 right-0 translate-y-4 text-[24px] mr-4`}
          style={demobox}
        >
          <div>
            {subTitleJap2.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: "-100%",
                  },
                  hovered: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>            
        </motion.div>
      </motion.div>     
      <div className={`absolute flex flex-col inset-16 text-[36px] font-extrabold opacity-40 select-none`}> 
        <div>
          {currentVideoIndex != 0 ? titleJap : ""}
        </div>    
      </div>         
    </section>
  );
};

export default Landing;