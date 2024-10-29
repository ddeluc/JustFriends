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
      <>
      <section 
        className={`relative w-full h-screen mx-auto flex items-center bg-black`}
        style={demobox}
      >
               
        {/* <div className={`absolute flex flex-col inset-8 select-none`}> 
          <video
            style={demobox}
            className={`object-cover w-full h-full absolute rounded-3xl brightness-40`}
            src={farine} onEnded={handleVideoEnd} autoPlay muted 
          />          
        </div> */}

        
        <div style={demobox} className={`absolute max-h-172 flex items-center h-full w-full`}>
          <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto grid grid-cols-3 gap-5 my-8`}>
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
              <video
                style={demobox}
                className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
                src={akiraClip1} onEnded={handleVideoEnd} autoPlay muted loop
              />                   
              {/* <MenuItem titleEng={"About"} titleJap={"話"} xMovement={0} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}/> */}
            </div >
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
              <video
                style={demobox}
                className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
                src={champlooClip1} onEnded={handleVideoEnd} autoPlay muted loop
              />  
              {/* <MenuItem titleEng={"Volumes"} titleJap={"章"} xMovement={0} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}/> */}
            </div>
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
              <video
                style={demobox}
                className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
                src={cityTrain} onEnded={handleVideoEnd} autoPlay muted loop
              />
              {/* <MenuItem titleEng={"Join"} titleJap={"音楽"} xMovement={0} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}/> */}
            </div>                       
          </div>
          <HannyaCanvas hoveredItem={hoveredItem}/>                   
        </div>

        
        
        
        <div style={demobox} className={`absolute max-h-172 flex items-center h-full w-full`}>
          <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto grid grid-cols-3 gap-5 my-8 pt-4`}>
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
              <MenuItem titleEng={"About"} titleJap={"話"} xMovement={0} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}/>
            </div >
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
              <MenuItem titleEng={"Volumes"} titleJap={"章"} xMovement={0} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}/>
            </div>
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
              <MenuItem titleEng={"Join"} titleJap={"音楽"} xMovement={0} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}/>
            </div>            
          </div>                  
        </div>
        
                           
      </section>
        

      </>
    );
  };

export default Home;