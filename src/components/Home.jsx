import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { landingHover } from "../utils/motion";
import { suffixWords } from "../constants";
import { demomode } from "../constants";

import TitleItems from "./TitleItems";
import TitleVideos from "./TitleVideos";
import About from "./About";
import Join from "./Join";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';
import cityTrain from '../assets/videos/CityTrain.mp4';
import farine from '../assets/videos/farinefiveroses.mp4';

import volume2 from '../assets/volumes/vol2.mp4';
import volume4 from '../assets/volumes/vol4.mp4';


const videoSources = [
  {title: oceanWaves1, opacity: 50},
  {title: kuroko1, opacity: 50},
]

import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";
import MenuItem from "./MenuItem";

const demobox = demomode ? styles.demo.landing : {};

const DURATION = 0.05;
const STAGGER = 0.025;

const Home = ({ setOnLanding }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState("None");
  const [selectedItem, setSelectedItem] = useState("None")

  const titleEng = "Just Friends.";
  const titleJap = "友情"
  const subTitleJap1 = "ゆっくりと"
  const subTitleEng1 = "Taking it slow."
  const subTitleJap2 = "思 い 出 づ く り"
  const subTitleEng2 = "Creating memories."
  
  return (
    <section 
      className={`relative w-full h-screen mx-auto flex items-center bg-black`}
      style={demobox}
    >       
      <div style={demobox} className={`absolute max-h-172 flex items-center h-full w-full`}>
        {selectedItem == "None" ? <TitleItems hoveredItem={hoveredItem} /> 
        : 
        <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto grid grid-cols-3 gap-5 my-8`}>
          <Join />           
        </div>
        }
        <HannyaCanvas hoveredItem={hoveredItem}/>                   
      </div>    
        {selectedItem == "None" ? <TitleVideos setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem} /> : <></> }
    </section>
  );
};

export default Home;