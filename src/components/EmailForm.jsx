import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { demomode, serviceCards } from "../constants";

import { connectText } from "../constants";

const demobox = demomode ? styles.demo.landing : {};


const EmailForm = ({}) => {
  return (
    <div className={`relative w-full flex flex-col items-center p-20 gap-16 ${demomode ? 'border-purple-600 border-2' : ''}`}>

      <motion.p className={`relative font-noto-mono max-w-10/20 font-light text-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
        {connectText}
      </motion.p>    
      <div class={`grid grid-cols-2 grid-rows-5 gap-5 z-20 text-[18px] font-light font-noto-mono ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <input className={`col-start-1 col-end-2 row-start-1 row-end-2 p-3 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Name"/>
        <input className={`col-start-2 col-end-3 row-start-1 row-end-2 p-3 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Email Address"/>
        <input className={`col-start-1 col-end-3 row-start-2 row-end-3 p-3 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Subject"/>
        <textarea className={`col-start-1 resize-none col-end-3 row-start-3 h-full row-end-6 p-3 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Message"/>
      </div>
      
    </div>
  );
}

export default EmailForm;