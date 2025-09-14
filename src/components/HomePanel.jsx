import React, { useState, useRef, useEffect } from "react";
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

const HomePanel = ({ setOnLanding, setSelectedItem, selectedItem }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hovered, setHovered] = useState(null);
  
  return (
    <>          
        <motion.div className={`relative mt-8 flex justify-center ${demomode ? 'border-blue-600 border-2' : ''} z-30`}>
            <motion.h1 className={`relative font-anton text-[110px] text-white ${demomode ? 'border-purple-600 border-2' : ''} ${hovered === 1 ? '' : 'opacity-70'}`}>
              SERVICE
            </motion.h1>
            <motion.h1 className={`absolute text-red-600 text-[42px] top-1/2 -translate-y-1/2 z-20 font-mochiy font-bold drop-shadow-glow ${demomode ? 'border-orange-600 border-2' : ''}`}
            animate={{
                opacity: hovered === 1 ? 1 : 0,
            }}
            >
            コ ミ ュ ニ テ ィ
            </motion.h1>
        </motion.div>
        {/* <motion.div className={`absolute left-0 top-0 h-full w-full ${demomode ? 'border-pink-600 border-2' : ''} z-30`} /> */}
        <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-none rounded-lg
            ${hovered === 1 ? 'brightness-50' : 'brightness-25 grayscale '}
            `}
            src={animatedDJ} autoPlay muted loop
        />      
    </>
  );
};

export default Home;