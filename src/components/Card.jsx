import React, { useState, useRef } from "react";
import { motion, useInView } from 'framer-motion';

import { demomode } from "../constants";

const titleAnimationVariants = {
  inactive:{
    y: 0,
    transition: { 
      duration: 0.25, 
      type: "spring",
      bounce: 0,
    } 
  },
  active: { 
    y: 10, 
    transition: { 
      duration: 0.25, 
      type: "spring",
      bounce: 0,
      delay: 0.1,
    } 
  },
}

const boxAnimationVariants = {
  inactive:{
    y: 0,
    transition: { 
      duration: 0.25, 
      type: "spring",
      bounce: 0,
    } 
  },
  active: { 
    y: 10,
    transition: { 
      duration: 0.25, 
      type: "spring",
      bounce: 0,
    } 
  },
}

const contentAnimationVariants = {
  inactive:{
    y: 0,
    transition: { 
      duration: 0.25, 
      type: "spring",
      bounce: 0,
    } 
  },
  active: { 
    y: 15, 
    transition: { 
      duration: 0.25, 
      type: "spring",
      bounce: 0,
      delay: 0.1,
    } 
  },
}

const Card = ({ title, content, kanji, translation }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-33% 0% -33% 0%",
    amount: "all",
  });
  
  return (
    <motion.div className={`relative flex-shrink-0 max-w-10/20 flex gap-4 p-4 cursor-default`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial="inactive"
      animate={hovered ? "active" : "inactive"}
      ref={ref}
    >
      <motion.div className={`relative`}>
        <motion.div className={` bg-red-600 flex flex-col ${hovered && "drop-shadow-glow-red-lg"} justify-evenly text-[72px] py-3 px-6 pr-7`} variants={boxAnimationVariants}>
          <span className={"-m-3 font-bold"}>{kanji[0]}</span>
          <span className={"-m-3 font-bold"}>{kanji[1]}</span>
        </motion.div>
        <motion.span className={`absolute left-1/2 -top-10 text-yellow-400 font-noto-mono ${demomode ? 'border-purple-600 border-2' : ''}`}
          animate={{ x: "-50%", opacity: hovered ? 1 : 0, y: hovered ? 10 : 0, transition: { duration: 0.25, type: "spring", bounce: 0 } }}
        >
          {`[${translation}]`}
        </motion.span>
      </motion.div>
      
      <motion.div className={`relative`} >
        <motion.div className={`text-[28px] ${demomode ? 'border-pink-600 border-2' : ''}`} variants={titleAnimationVariants}>
          {title}
        </motion.div>
        <motion.p className={`text-[18px] font-light font-noto-mono ${demomode ? 'border-pink-600 border-2' : ''}`} variants={contentAnimationVariants}>
          {content}
        </motion.p>
      </motion.div>
      
    </motion.div>
  )
}

export default Card;