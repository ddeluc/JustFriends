import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';

import volume2 from '../assets/volumes/vol2short.mp4';
import volume4 from '../assets/volumes/vol4.mp4';

// const videoSources = [
//   {title: akiraClip1, opacity: 35},
//   {title: champlooClip1, opacity: 35},
//   {title: cowboy1, opacity: 35},
// ]

const videoSources = [
  {title: volume2, opacity: 40},  
]

import Title from "./Title";
import Home from "./Home";
import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";

const demobox = demomode ? styles.demo.landing : {};

const DURATION = 0.05;
const STAGGER = 0.025;

const Landing = ({ setOnLanding, state, setState, nextState, setNextState }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const titleEng = "JUST FRIENDS.";
  const titleJap = "友情"
  const subTitleJap1 = "ゆっくりと"
  const subTitleEng1 = "Taking it slow."
  const subTitleJap2 = "思 い 出 づ く り"
  const subTitleEng2 = "Creating memories."

  useEffect(() => {

  }, []);  

  const updateState = (next) => {
    setNextState(next);
    setState(0);
  }

  const handleVideoEnd = () => {    
    setCurrentVideoIndex((currentVideoIndex + 1)%videoSources.length);    
  };

  if (state == 0) {
    return (
      <section 
        className={`relative flex flex-row w-full h-screen m-auto justify-center items-center p-8`}
        style={demobox}
      >
        <video
          className={`object-cover w-full h-full rounded-3xl brightness-60`}
          src={whiteNoise} onEnded={() => setState(nextState)} autoPlay muted
        />  
        <div
          className={`flex flex-col text-[72px] text-white justify-end font-bold cursor-default absolute select-none`}
          style={demobox}
        >
          {titleJap}
        </div>       
      </section>
    );    
  } else if (state == 1) {
    return (
      <section 
        className={`relative flex flex-row w-full h-screen m-auto justify-center items-center p-8`}
        style={demobox}
      >
        <video
          className={`object-cover w-full h-full rounded-3xl brightness-50`}
          src={volume2} autoPlay muted loop
        />
        <motion.div  
          className={`flex flex-col justify-end cursor-default absolute select-none font-shrikhand`}
          style={demobox}
          onClick={() => {updateState(2)}}
          initial="initial"
          whileHover="hovered"
        >
          <motion.div
            className={`text-red-600 text-[72px] absolute z-10`}
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
            className={`text-white text-[72px] z-20`}
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
                  className={`inline-block text-[28px] font-bold mx-0.5`}
                  key={i}
                >
                  {l}
                </motion.span>
              ))}
            </div>            
          </motion.div>
        </motion.div>     
        <div style={demobox} className={`absolute flex flex-col inset-16 text-[36px] font-extrabold opacity-40 select-none`}> 
          <div style={demobox} className={`flex`}>
            <div style={demobox}>
              {titleJap}
            </div>
            {/* <div style={demobox}>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>             */}
          </div>  
        </div>         
      </section>
    );
  } else {
    return (
      <Home />
    )
  }
};

export default Landing;