import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import CanvasBack from "./CanvasBack";
import CanvasFront from "./CanvasFront";
import About from "./About";
import Join from "./Join";
import Navbar from "./Navbar";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';
import cityTrain from '../assets/videos/CityTrain.mp4';
import farine from '../assets/videos/farinefiveroses.mp4';
import AkiraCity from '../assets/videos/AkiraCity.mp4';
import AkiraCity1 from '../assets/videos/AkiraCity1.mp4';
import AkiraCity2 from '../assets/videos/AkiraCity2.mp4';
import AkiraCity3 from '../assets/videos/AkiraCity3.mp4';

import volume2 from '../assets/volumes/vol2.mp4';
import volume4 from '../assets/volumes/vol4.mp4';


const videoSources = [
  {title: oceanWaves1, opacity: 50},
  {title: kuroko1, opacity: 50},
]

import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";
import MenuItem from "./Menu/MenuItem";

const demobox = demomode ? styles.demo.landing : {};

const DURATION = 0.05;
const STAGGER = 0.025;

const Home = ({ setOnLanding, setSelectedItem, selectedItem }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  
  
  return (
    <section 
      className={`relative w-screen h-screen flex bg-primary overflow-hidden`}
      style={demobox}
      key={1}
    >
      {/* LEFT */}       
      <motion.div className={`flex flex-col mr-1 ml-2 my-2 relative m-2 p-8 ${selectedIndex === null ? 'w-1/3' : ''}`} style={demobox}
          animate={{
            width: selectedIndex === null ? "33.333%" : selectedIndex === 1 ? '100%' : '0%',
          }}
          onClick={() => setSelectedIndex(selectedIndex === 1 ? null : 1)}
      >
        <motion.div className={`relative flex justify-center ${demomode ? 'border-blue-600 border-2' : ''} z-30`}>
          <motion.h1 className={`relative font-anton text-[90px] text-white ${demomode ? 'border-purple-600 border-2' : ''}`}>
            SERVICE
          </motion.h1>
          <motion.h1 className={`absolute text-red-600 text-[32px] top-1/2 -translate-y-1/2 z-20 font-mochiy font-bold drop-shadow-glow ${demomode ? 'border-orange-600 border-2' : ''}`}>
            コ ミ ュ ニ テ ィ
          </motion.h1>
        </motion.div>
        <video
          style={demobox}
          className={`top-0 left-0 w-full h-full absolute object-none brightness-25 grayscale rounded-lg`}
          src={champlooClip1} autoPlay muted loop
        />        
      </motion.div>

      {/* MIDDLE */}
      <motion.div className={`flex flex-col mx-1 my-2 p-8 relative ${selectedIndex === null ? 'w-1/3' : ''}`} style={demobox}
          animate={{
            width: selectedIndex === null ? "33.333%" : selectedIndex === 2 ? '100%' : '0%',
          }}
          onClick={() => setSelectedIndex(selectedIndex === 2 ? null : 2)}
      >
        <motion.div className={`relative flex justify-center ${demomode ? 'border-blue-600 border-2' : ''} z-30`}>
          <motion.h1 className={`relative font-anton text-[90px] text-white ${demomode ? 'border-purple-600 border-2' : ''}`}>
            VOLUMES
          </motion.h1>
          <motion.h1 className={`absolute text-red-600 text-[32px] top-1/2 -translate-y-1/2 z-20 font-mochiy font-bold drop-shadow-glow ${demomode ? 'border-orange-600 border-2' : ''}`}>
            コ ネ ク シ ョ ン
          </motion.h1>
        </motion.div>
        <video
          style={demobox}
          className={`top-0 left-0 w-full h-full absolute object-none brightness-25 grayscale rounded-lg`}
          src={AkiraCity1} autoPlay muted loop
        />        
      </motion.div>

      {/* RIGHT */}
      <motion.div className={`flex flex-col my-2 ml-1 mr-2 p-8 relative ${selectedIndex === null ? 'w-1/3' : ''}`} style={demobox}
          animate={{
            width: selectedIndex === null ? "33.333%" : selectedIndex === 3 ? '100%' : '0%',
          }}
          onClick={() => setSelectedIndex(selectedIndex === 3 ? null : 3)}
      >
        <motion.div className={`relative flex justify-center ${demomode ? 'border-blue-600 border-2' : ''} z-30`}>
          <motion.h1 className={`relative font-anton text-[90px] text-white ${demomode ? 'border-purple-600 border-2' : ''}`}>
            CONNECT
          </motion.h1>
          <motion.h1 className={`absolute text-red-600 text-[32px] top-1/2 -translate-y-1/2 z-20 font-mochiy font-bold drop-shadow-glow ${demomode ? 'border-orange-600 border-2' : ''}`}>
            カ ル チ ャ ー
          </motion.h1>
        </motion.div>
        <video
          style={demobox}
          className={`top-0 left-0 w-full h-full absolute object-none brightness-25 grayscale rounded-lg`}
          src={oceanWaves1} autoPlay muted loop
        />        
      </motion.div>
    </section>    
  );
};

export default Home;