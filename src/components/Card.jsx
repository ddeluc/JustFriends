import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { demomode } from "../constants";

const Card = ({ title, content, delay, gridPosition, xPos, yPos, vidSrc }) => {

  return (
    <motion.div className={`relative p-4 ${gridPosition} ${demomode ? 'border-pink-600 border-2' : ''}`}
      initial={{ opacity: 0, y: yPos, x: xPos }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {/* <video
        className={`top-0 left-0 w-full h-full absolute object-cover brightness-25`}
        src={vidSrc}
        autoPlay  
        loop
        muted
      /> */}
      <motion.div className={`relative`}>
        <motion.div className={`text-[24px] ${demomode ? 'border-pink-600 border-2' : ''}`}>
          {title}
        </motion.div>
        <motion.p className={`text-[16px] font-montserrat ${demomode ? 'border-pink-600 border-2' : ''}`}>
          {content}
        </motion.p>
      </motion.div>
      
    </motion.div>
  )
}

export default Card;