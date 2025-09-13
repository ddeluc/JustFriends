import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import Card from "./Card";

import { demomode, serviceCards } from "../constants";
import backroundVideo from '../assets/volumes/promo1.mp4';

const demobox = demomode ? styles.demo.landing : {};


const Service = () => {   

  return (
    <div className={`relative flex flex-col items-center gap-8 h-full mt-8`} style={demobox}>
      {/* <div className={`relative flex flex-col items-center space-y-12 h-full p-4`} style={demobox}> */}
      
        <motion.div className={`relative w-full max-w-[80rem] py-8 flex justify-center ${demomode ? 'border-green-600 border-2' : ''}`}>
          <motion.div className={`relative flex z-30 ${demomode ? 'border-purple-600 border-2' : ''}`}>
            <motion.span className={`relative inline-block font-anton text-[110px] ${demomode ? 'border-purple-600 border-2' : ''}`}>SERVICE</motion.span>
            <motion.span className={`absolute -top-1 left-1 font-shrikhand text-[32px] `}>JUST FRIENDS.</motion.span>
            <motion.span className={`relative inline-block font-mochiy text-red-600 text-[101px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続</motion.span>    
          </motion.div>
          <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-cover rounded-lg brightness-50`}
            src={backroundVideo} autoPlay muted loop
          />     
        </motion.div>
        
               
        
        <div className={`relative flex flex-col max-w-[80rem] items-center z-20 ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.div className={`relative`}>
            OUR SERVICES
          </motion.div>
          <motion.div className={`grid sm:grid-cols-1 lg:grid-cols-4 gap-6 ${demomode ? 'border-purple-600 border-2' : ''}`}>
            <Card title={serviceCards[0].title} content={serviceCards[0].content}/> 
            <Card title={serviceCards[1].title} content={serviceCards[1].content}/>
            <Card title={serviceCards[2].title} content={serviceCards[2].content}/>
            <Card title={serviceCards[3].title} content={serviceCards[3].content}/>
          </motion.div>
        </div>
        <div className={`relative z-20 pointer-events-none ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.div className={`${demomode ? 'border-purple-600 border-2' : ''}`}>
            They Trusted Us
          </motion.div>  
          <motion.div className={`flex ${demomode ? 'border-purple-600 border-2' : ''}`}>
            <motion.div className={`flex ${demomode ? 'border-pink-600 border-2' : ''}`}>
               *Carousel of brands*
            </motion.div>
          </motion.div>
        </div>
      {/* </div> */}
    </div>   
  );
};

export default Service;