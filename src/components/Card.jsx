import React, { useState, useEffect, useRef } from "react";
import { motion, transform, useInView } from 'framer-motion';
import laughing3 from '../assets/images/people/laughing3.png';
import laughing2 from '../assets/images/people/laughing2.png';

import { styles } from "../styles";
import { demomode } from "../constants";

const imageAnimationVariants = {
  inactive: {
    opacity: 0,
    y: -100,
    x: 50,
    transition: { 
      duration: 0.25, 
      type: "spring",
      bounce: 0,
    },
  },
  active: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { 
      opacity: {
        duration: 0.1,
      },
      y: {
        duration: 0.75, 
        type: "spring",
        bounce: 0,
      },
      x: {
        duration: 0.75, 
        type: "spring",
        bounce: 0,
      }          
    }
  }
}

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
    // Shift top down by 33%, bottom up by 33%
    margin: "-33% 0% -33% 0%",
    amount: "all", // or "all" if you want full visibility in that region
  });
  
  return (
    <motion.div className={`relative flex-shrink-0 max-w-10/20 flex gap-4 p-4`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial="inactive"
      animate={hovered ? "active" : "inactive"}
      ref={ref}
    >
      {/* {hovered && (
        <>
          <motion.img src={laughing3} variants={imageAnimationVariants} alt="Podcast Set" class="w-96 h-auto object-cover absolute z-0 left-[105%] -translate-y-1/4" />
          <motion.img src={laughing2} variants={imageAnimationVariants} alt="Podcast Set" class="w-96 h-auto object-cover absolute z-0 right-[105%] -translate-y-1/4 -translate-x-1" />
        </>
      )} */}
      
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