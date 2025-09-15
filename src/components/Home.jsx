import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import Volumes from "./Volumes";
import Service from "./Service";

import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import AkiraCity3 from '../assets/videos/AkiraCity3.mp4';
import animatedDJ from '../assets/animatedVideos/Anime_DJ_Mixing_JF.mp4';
import grain from "../assets/videos/Effects/grainVid1.mp4"

import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";
import MenuItem from "./Menu/MenuItem";
import { homePanels } from "../constants";
import HomePanel from "./HomePanel";

const demobox = demomode ? styles.demo.landing : {};

const Home = ({ setOnLanding, setSelectedItem, selectedItem }) => {
  const videoGrainRef = useRef();

  useEffect(() => {
    if (videoGrainRef.current) {
      videoGrainRef.current.playbackRate = 0.35;
    }
  }, []);
  
  return (
    <section 
      className={`relative overflow-y-hidden bg-primary`}
      style={demobox}
      key={1}
    >
      <div className={`relative w-screen h-screen bg-primary`}>
        <video
          style={demobox}
          className={`top-0 left-0 w-full h-full absolute object-cover opacity-20`}
          src={grain}
          ref={videoGrainRef} 
          autoPlay  
          loop
          muted
        />
        <HannyaCanvas hScale={16} hpx={0} hpy={-0.25} hpz={0} />
        
      </div>
      <div className={`relative w-screen h-screen flex gap-2 bg-primary`}>
        <HomePanel vidSrc={homePanels[0].vidSrc} titleEng={homePanels[0].titleEng} titleJap={homePanels[0].titleJap} link={homePanels[0].link} />
        <HomePanel vidSrc={homePanels[1].vidSrc} titleEng={homePanels[1].titleEng} titleJap={homePanels[1].titleJap} link={homePanels[1].link} />
        <HomePanel vidSrc={homePanels[2].vidSrc} titleEng={homePanels[2].titleEng} titleJap={homePanels[2].titleJap} link={homePanels[2].link} />
      </div>
      
    </section>    
  );
};

export default Home;