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
  const [selectedIndex, setSelectedIndex] = useState();
  
  return (
    <section 
      className={`relative w-screen h-screen flex bg-primary overflow-hidden`}
      style={demobox}
    >       
      <motion.div className={`w-1/3`} style={demobox}>
        <div>left</div>
      </motion.div>
      <motion.div className={`w-1/3`} style={demobox}>
        <div>left</div>
      </motion.div>
      <motion.div className={`w-1/3`} style={demobox}>
      < div>left</div>
      </motion.div>
    </section>    
  );
};

export default Home;