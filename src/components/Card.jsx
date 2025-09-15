import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { demomode } from "../constants";

const Card = ({ title, content, delay, gridPosition, xPos, yPos, kanji }) => {

  return (
    <motion.div className={`relative max-w-8/20 flex gap-4 p-4 ${gridPosition} ${demomode ? 'border-pink-600 border-2' : ''}`}
      initial={{ opacity: 0, y: yPos, x: xPos }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <motion.div className={`bg-red-600 flex flex-col text-[72px] py-3 px-6 pr-7`}>
        <span className={"-m-3 font-bold"}>{kanji[0]}</span>
        <span className={"-m-3 font-bold"}>{kanji[1]}</span>
      </motion.div>
      <motion.div className={`relative`}>
        <motion.div className={`text-[24px] ${demomode ? 'border-pink-600 border-2' : ''}`}>
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