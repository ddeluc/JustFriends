import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { demomode } from "../../constants";

import volume2 from '../../assets/volumes/vol2short.mp4';


const demobox = demomode ? styles.demo.landing : {};

const DURATION = 0.05;
const STAGGER = 0.025;

const LandingHome = ({ setState, setNextState }) => {

  const homeVideo = useRef();

  const titleEng = "JUST FRIENDS.";
  const titleJap = "友情"
  const subTitleJap2 = "思 い 出 づ く り"

  const updateState = (next) => {
    setNextState(next);
    setState(0);
  }

  return (
    <section 
      className={`relative flex flex-row w-full h-screen m-auto justify-center items-center p-2`}
      style={demobox}
    >
      <video
        ref={homeVideo}
        className={`object-cover w-full h-full brightness-50 rounded-lg`}
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
          className={`text-red-600 text-[78px] absolute z-10`}
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
          className={`text-white text-[78px] z-20`}
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
          className={`absolute block overflow-hidden whitespace-nowrap bottom-0 right-0 translate-y-6 text-[20px] mr-4`}
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
                className={`inline-block text-[36px] mx-0.5 font-mochiy`}
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>            
        </motion.div>
      </motion.div>     
      <div style={demobox} className={`absolute font-mochiy\ left-8 top-8 text-[48px] opacity-45`}> 
        {titleJap}
      </div>         
    </section>
  );
};

export default LandingHome;