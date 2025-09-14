import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import Card from "./Card";

import { demomode, serviceCards } from "../constants";
import backroundVideo from '../assets/volumes/promo1.mp4';
import grain from "../assets/videos/Effects/grainVid1.mp4"

import memento from '../assets/images/logos/memento.png';
import brix from '../assets/images/logos/brix.png';
import offTheTop from '../assets/images/logos/offthetop.png';
import podcastSet from '../assets/videos/Clips/podcastSet.mp4';

const demobox = demomode ? styles.demo.landing : {};


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
      className={`relative overflow-x-hidden overflow-y-hidden flex flex-col gap-2 p-4 bg-primary`}
      style={demobox}
      key={1}
    >
      <motion.div className={`relative flex flex-col p-20 gap-20 items-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
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
          <motion.span className={`absolute -top-1 left-1 font-shrikhand text-[40px] `}>JUST FRIENDS.</motion.span>
          <motion.span className={`relative inline-block font-mochiy drop-shadow-glow text-red-600 text-[148px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続</motion.span>    
        </motion.div>

        {/* <motion.p className={`relative font-montserrat text-[18px] max-w-2xl ${demomode ? 'border-purple-600 border-2' : ''}`}>
          {volumesDescription}
        </motion.p> */}
        
      </motion.div>
      
      
      

        
               
        
      <motion.div className={`relative ${demomode ? 'border-purple-600 border-2' : ''}`}>
        
        <motion.div className={`grid min-h-screen sm:grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] lg:grid-rows-2 gap-2 ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <Card title={serviceCards[0].title} content={serviceCards[0].content} delay={0.5} gridPosition={"col-start-1 col-end-2 row-start-1 row-end-3"} xPos={0} yPos={-150} vidSrc={null}/> 
          <Card title={serviceCards[1].title} content={serviceCards[1].content} delay={1.0} gridPosition={"col-start-2 col-end-3 row-start-1 row-end-2"} xPos={-150} yPos={0} vidSrc={podcastSet}/>
          <Card title={serviceCards[2].title} content={serviceCards[2].content} delay={1.5} gridPosition={"col-start-2 col-end-3 row-start-2 row-end-3"} xPos={-150} yPos={0} vidSrc={null}/>
          <Card title={serviceCards[3].title} content={serviceCards[3].content} delay={2.0} gridPosition={"col-start-3 col-end-4 row-start-1 row-end-3"} xPos={-150} yPos={0} vidSrc={null}/>
        </motion.div>
      </motion.div>


      <div className={`relative z-20 pointer-events-none ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <motion.div className={`${demomode ? 'border-purple-600 border-2' : ''}`}>
          They Trusted Us
        </motion.div>  
        <motion.div className={`flex ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.div className={`w-64 h-64 ${demomode ? 'border-purple-600 border-2' : ''}`}>
            <img src={memento} alt="Example" class="w-full h-full object-cover rounded-lg" />
          </motion.div>
          <motion.div className={`h-64 ${demomode ? 'border-purple-600 border-2' : ''}`}>
            <img src={brix} alt="Example" class="w-full h-full object-cover rounded-lg" />
          </motion.div>
          <motion.div className={`h-64 ${demomode ? 'border-purple-600 border-2' : ''}`}>
            <img src={offTheTop} alt="Example" class="w-full h-full object-cover rounded-lg" />
          </motion.div>
        </motion.div>
      </div>

      <div className={`relative z-20 ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <motion.div className={`${demomode ? 'border-purple-600 border-2' : ''}`}>
          Plug into JustFriends
        </motion.div>  
        <motion.div className={`relative font-anton inline-block text-[36px] z-30 bg-red-600 text-white px-2 p-1 rounded-lg ${demomode ? 'border-purple-600 border-2' : ''}`}
          onClick={() => navigate("/contact")}
        >
          CONNECT
        </motion.div>
      </div>
      
    </section>   
  );
};

export default Service;