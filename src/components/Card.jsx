import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import laughing3 from '../assets/images/people/laughing3.png';
import laughing2 from '../assets/images/people/laughing2.png';

import { styles } from "../styles";
import { demomode } from "../constants";

const Card = ({ title, content, kanji }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div className={`relative max-w-8/20 flex gap-4 p-4`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {hovered && (
        <>
          <img src={laughing3} alt="Podcast Set" class="w-96 h-auto object-cover absolute z-0 left-[105%] -translate-y-1/4" />
          <img src={laughing2} alt="Podcast Set" class="w-96 h-auto object-cover absolute z-0 right-[105%] -translate-y-1/4 -translate-x-1" />
        </>
      )}
      
      <motion.div className={`bg-red-600 flex flex-col ${hovered && "drop-shadow-glow"} justify-evenly text-[72px] py-3 px-6 pr-7`}>
        <span className={"-m-3 font-bold"}>{kanji[0]}</span>
        <span className={"-m-3 font-bold"}>{kanji[1]}</span>
      </motion.div>
      <motion.div className={`relative`}>
        <motion.div className={`text-[28px] ${demomode ? 'border-pink-600 border-2' : ''}`}>
          {title}
        </motion.div>
        <motion.p className={`text-[18px] font-light font-noto-mono ${demomode ? 'border-pink-600 border-2' : ''}`}>
          {content}
        </motion.p>
      </motion.div>
      
    </motion.div>
  )
}

export default Card;