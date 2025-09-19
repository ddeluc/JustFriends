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

import dj from "../assets/images/people/cutout/whiteOutline/dj.png";
import handShake from "../assets/images/people/cutout/whiteOutline/handShake.png";
import man from "../assets/images/people/cutout/whiteOutline/man.png";
import business from "../assets/images/people/cutout/whiteOutline/business.png";
import saxaphone from "../assets/images/people/cutout/whiteOutline/saxaphone.png";
import girlTalking from "../assets/images/people/cutout/whiteOutline/girlTalking.png";
import manHoldingProduct from "../assets/images/people/cutout/whiteOutline/manHoldingProduct.png";
import { aboutText } from "../constants";

import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";
import MenuItem from "./Menu/MenuItem";
import { homePanels } from "../constants";
import HomePanel from "./HomePanel";

const demobox = demomode ? styles.demo.landing : {};

const Home = ({}) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.25]);

  useEffect(() => {
    
  }, []);
  
  return (
    <section 
      className={`relative h-[300vh] bg-primary`}
      style={demobox}
      ref={container}
      key={1}
    >
      
        

      <Hero parentScrollYProgress={scrollYProgress} />
      
      
      <div className={`relative w-screen h-screen flex gap-2 bg-primary`}>
        <HomePanel vidSrc={homePanels[0].vidSrc} titleEng={homePanels[0].titleEng} titleJap={homePanels[0].titleJap} link={homePanels[0].link} />
        <HomePanel vidSrc={homePanels[1].vidSrc} titleEng={homePanels[1].titleEng} titleJap={homePanels[1].titleJap} link={homePanels[1].link} />
        <HomePanel vidSrc={homePanels[2].vidSrc} titleEng={homePanels[2].titleEng} titleJap={homePanels[2].titleJap} link={homePanels[2].link} />
      </div>
      
    </section>    
  );
};

const Hero = ({ parentScrollYProgress }) => {
  const videoGrainRef = useRef();
  const container = useRef();

  const opacity = useTransform(parentScrollYProgress, [0.66, 0.75], [1, 0]);
  const imagePositionY = useTransform(parentScrollYProgress, [0, 0.33], ["0%", "100%"]);
  const titlePositionY = useTransform(parentScrollYProgress, [0, 0.33], ["0%", "-25%"]);
  const titleScale = useTransform(parentScrollYProgress, [0, 0.33], [1, 0.33]);
  
  useEffect(() => {
    if (videoGrainRef.current) {
      videoGrainRef.current.playbackRate = 0.35;
    }
  }, []);

  return (
    <motion.div className={`sticky top-0 w-screen h-[200vh] bg-primary`}
      ref={container}
    >
      <video
        style={demobox}
        className={`top-0 left-0 w-full h-full absolute object-cover opacity-20`}
        src={grain}
        ref={videoGrainRef} 
        autoPlay  
        loop
        muted
      />
      <div className={`sticky top-0 overflow-x-hidden overflow-y-hidden h-screen flex flex-col`}>
        <motion.div className={`flex justify-center h-[50vh] items-center ${demomode ? 'border-blue-600 border-2' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 4 }}}
          style={{ opacity: opacity}}
        >
          <motion.span className={`font-mochiy font-bold text-[15vw] text-red-600 drop-shadow-glow-red-lg`}
            style={{ y: titlePositionY, scale: titleScale }}
          >
            コネクション
          </motion.span>
          <motion.span className={`absolute text-[1.5vw] text-yellow-400 font-noto-mono top-8`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 4.5, duration: 0 }}}
          >
            {"[CONNECTION]"}
          </motion.span>
        </motion.div>

        {/* <motion.div className={`absolute flex flex-col top-0 h-screen items-center justify-center`}>
          <motion.p className={`font-noto-mono text-[18px] max-w-6/20 font-light text-center`}>
            {aboutText}
          </motion.p>
        </motion.div> */}
       
    
        <motion.img src={saxaphone} alt="DJ" className={`absolute bottom-0 rotate-8 -left-4 grayscale w-[30vw] brightness-60 drop-shadow-xl`} 
          style={{ y: imagePositionY, opacity: opacity}}
        />
        
        <motion.img src={handShake} alt="DJ" className={`absolute bottom-0 rotate-8 right-1/2 grayscale w-[32vw] brightness-60 drop-shadow-xl`} 
          style={{ y: imagePositionY, opacity: opacity}}
        />

        <motion.img src={man} alt="DJ" className={`absolute rotate-3 bottom-0 -right-14 grayscale w-[37vw] brightness-60 drop-shadow-xl`}  
          style={{ y: imagePositionY, opacity: opacity}}
        />

        <motion.img src={dj} alt="DJ" className={`absolute -bottom-44 rotate-3 right-20 grayscale w-[37vw] brightness-60 drop-shadow-xl`} 
          style={{ y: imagePositionY, opacity: opacity}}
        />

        <motion.img src={manHoldingProduct} alt="DJ" className={`absolute -bottom-24 rotate-3 right-96 grayscale w-[28vw] brightness-60 drop-shadow-xl`} 
          style={{ y: imagePositionY, opacity: opacity}}
        />
      </div>
      
      
    </motion.div>
  )
}

export default Home;