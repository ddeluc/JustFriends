import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import Volumes from "./Volumes";
import Service from "./Service";

import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import AkiraCity3 from '../assets/videos/AkiraCity3.mp4';
import animatedDJ from '../assets/animatedVideos/Anime_DJ_Mixing_JF.mp4';

import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";
import MenuItem from "./Menu/MenuItem";

const demobox = demomode ? styles.demo.landing : {};

const HomePanel = ({ vidSrc, titleEng, titleJap, link }) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  
  return (
    <motion.div className={`flex-none flex-col relative h-full flex-grow cursor-default`} style={demobox}
        onClick={() => navigate(link)}
        onHoverStart={() => setHovered(1)}
        onHoverEnd={() => setHovered(null)}
    >
     
                  
      <motion.div className={`relative mt-24 flex justify-center ${demomode ? 'border-blue-600 border-2' : ''} z-30`}>
        <motion.h1 className={`relative font-anton text-[110px] text-white ${demomode ? 'border-purple-600 border-2' : ''} ${hovered === 1 ? '' : 'text-gray-400 brightness-75'}`}>
          {titleEng}
        </motion.h1>
        <motion.h1 className={`absolute text-red-600 text-[48px] top-1/2 -translate-y-1/2 z-20 font-mochiy font-bold drop-shadow-glow-red-sm ${demomode ? 'border-orange-600 border-2' : ''}`}
          animate={{
            opacity: hovered === 1 ? 1 : 0,
          }}
        >
          {titleJap}
        </motion.h1>
      </motion.div>          
      <video
        style={demobox}
        className={`top-0 left-0 w-full h-full absolute object-none rounded-lg
          ${hovered === 1 ? 'brightness-50' : 'brightness-20 grayscale '}
        `}
        src={vidSrc} autoPlay muted loop
      />      
          
       
    </motion.div>
  );
};

export default HomePanel;