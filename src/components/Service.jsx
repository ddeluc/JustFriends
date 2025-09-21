import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import Card from "./Card";
import Navbar from "./Navbar";
import Title from "./Title";
import Footer from "./Footer";

import { demomode, serviceCards } from "../constants";
import grain from "../assets/videos/Effects/grainVid1.mp4";

import memento from '../assets/images/logos/memento.png';
import brix from '../assets/images/logos/brixWhite.svg';
import offTheTop from '../assets/images/logos/offthetop.png';

const demobox = demomode ? styles.demo.landing : {};

const BusinessCard = ({ imgSrc, name, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div className={`relative w-48 h-auto border-2 border-white p-2 ${demomode ? 'border-purple-600 border-2' : ''}`} 
      animate={{ y: hovered ? 10 : 0, backgroundColor: hovered ? "#dc2626" : "#000000", transition: { duration: 0.25, type: "spring", bounce: 0 } }}
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      onHoverEnd={() => setHovered(false)} 
      onHoverStart={() => setHovered(true)}
    >
      <img src={imgSrc} alt="Example" className="w-full h-full object-cover rounded-lg" />
      <motion.span className={`absolute left-1/2 text-yellow-400 font-noto-mono ${demomode ? 'border-purple-600 border-2' : ''}`}
        animate={{ x: "-50%", opacity: hovered ? 1 : 0, y: hovered ? 10 : 0, transition: { duration: 0.25, type: "spring", bounce: 0 } }}
      >
        {name}
      </motion.span>
    </motion.div>
  )
}


const Service = () => {   
  const navigate = useNavigate();
  const videoGrainRef = useRef();

  useEffect(() => {
    if (videoGrainRef.current) {
      videoGrainRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    
    <section 
      className={`relative overflow-x-hidden overflow-y-hidden items-center flex flex-col bg-primary pb-20`}
      style={demobox}
      key={1}
    >
      <Navbar /> 

      <div className={`relative flex flex-col p-20 w-full gap-18 items-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <video
          style={demobox}
          className={`top-0 left-0 w-full h-full absolute object-cover brightness-25`}
          src={grain}
          ref={videoGrainRef} 
          autoPlay  
          loop
          muted
        />

        <motion.div className={`relative flex gap-2 z-30 ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.span className={`relative inline-block font-anton text-[160px] ${demomode ? 'border-purple-600 border-2' : ''}`}>SERVICE</motion.span>
          <motion.span className={`relative inline-block font-mochiy drop-shadow-glow-red-sm text-red-600 text-[148px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続</motion.span>    
        </motion.div>
        
      </div>
  
      
      <div className={`relative flex flex-col items-center p-20 gap-20 ${demomode ? 'border-purple-600 border-2' : ''}`}>          
          <Card title={serviceCards[0].title} content={serviceCards[0].content} kanji={serviceCards[0].kanji} translation={serviceCards[0].translation}/>                 
          <Card title={serviceCards[1].title} content={serviceCards[1].content} kanji={serviceCards[1].kanji} translation={serviceCards[1].translation}/>         
          <Card title={serviceCards[2].title} content={serviceCards[2].content} kanji={serviceCards[2].kanji} translation={serviceCards[2].translation}/>         
          <Card title={serviceCards[3].title} content={serviceCards[3].content} kanji={serviceCards[3].kanji} translation={serviceCards[3].translation}/>         
      </div>

      <div className={`border-b-2 border-white max-w-16 w-full`}/>

      <div className={`relative flex flex-col items-center p-20 gap-16 ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <motion.div className={`relative text-[28px] font-light font-noto-mono ${demomode ? 'border-purple-600 border-2' : ''}`}>
          They Trusted Us
        </motion.div>  
        <motion.div className={`flex gap-24 ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <BusinessCard imgSrc={memento} name={"[MEMENTO]"} link={"https://www.brasseriememento.com/"} />
          <BusinessCard imgSrc={brix} name={"[BRIX]"} link={"https://brixmtl.com/"} />
          <BusinessCard imgSrc={offTheTop} name={"[OFFTHETOP]"} link={"https://www.studiooffthetop.com/"} />
        </motion.div>
      </div>

      <div className={`border-b-2 border-white max-w-16 w-full`}/>
      
      <div className={`p-20`}>
        <Title titleEng={"CONNECT"} titleJap={"友情"} submitFunction={() => navigate('/connect')}/>
      </div>      
          
      <Footer />
    </section>   
  );
};

export default Service;