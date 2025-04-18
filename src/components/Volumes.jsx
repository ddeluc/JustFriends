import { useEffect } from "react";
import { motion } from "framer-motion";

import { HannyaCanvas } from "./canvas";


import { styles } from "../styles";

import { demomode } from "../constants";

const demobox = demomode ? styles.demo.landing : {};


const Volumes = () => {

  

  return (
    <div className={`relative m-4 flex h-full`} style={demobox}>
      <div className={`relative`} style={demobox}>
        
        <motion.div className={`relative m-2 flex ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.span className={`relative inline-block font-anton text-[110px] ${demomode ? 'border-purple-600 border-2' : ''}`}>VOLUMES</motion.span>
          <motion.span className={`absolute -top-1 left-1 font-shrikhand text-[32px]`}>JUST FRIENDS.</motion.span>
          <motion.span className={`relative inline-block font-mochiy text-red-600 text-[101px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続</motion.span>
        </motion.div>        
        <HannyaCanvas />
      </div>
      <div className={`relative flex-1`} style={demobox}>
        Content
      </div>
    </div>   
  );
};

export default Volumes;