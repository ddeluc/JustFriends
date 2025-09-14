import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import Card from "./Card";

import { demomode, serviceCards } from "../constants";
import backroundVideo from '../assets/volumes/promo1.mp4';

import memento from '../assets/images/logos/memento.png';
import brix from '../assets/images/logos/brix.png';

const demobox = demomode ? styles.demo.landing : {};


const Service = () => {   
  const navigate = useNavigate();

  return (
    
    <section 
      className={`relative h-[300vh] w-screen overflow-x-hidden overflow-y-hidden flex flex-col gap-2 p-2 bg-primary`}
      style={demobox}
      key={1}
    >
      
      
      <motion.div className={`relative flex z-30 ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <motion.span className={`relative inline-block font-anton text-[160px] ${demomode ? 'border-purple-600 border-2' : ''}`}>SERVICE</motion.span>
        <motion.span className={`absolute -top-1 left-1 font-shrikhand text-[40px] `}>JUST FRIENDS.</motion.span>
        <motion.span className={`relative inline-block left-2 font-mochiy text-red-600 text-[148px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続</motion.span>    
      </motion.div>

        
               
        
      <div className={`relative ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <motion.div className={`relative`}>
          OUR SERVICES
        </motion.div>
        
        <motion.div className={`grid sm:grid-cols-1 lg:grid-cols-4 ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <Card title={serviceCards[0].title} content={serviceCards[0].content} delay={0.5} gridPosition={"row-start-1 row-end-3 col-start-1 col-end-2"} xPos={0} yPos={-150}/> 
          <Card title={serviceCards[1].title} content={serviceCards[1].content} delay={1.0} gridPosition={"row-start-1 row-end-2 col-start-2 col-end-3"} xPos={-150} yPos={0}/>
          <Card title={serviceCards[2].title} content={serviceCards[2].content} delay={1.5} gridPosition={"row-start-2 row-end-3 col-start-2 col-end-3"} xPos={-150} yPos={0}/>
          <Card title={serviceCards[3].title} content={serviceCards[3].content} delay={2.0} gridPosition={"row-start-1 row-end-3 col-start-3 col-end-4"} xPos={0} yPos={-150}/>
        </motion.div>
      </div>


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
          <motion.div>
            image3
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