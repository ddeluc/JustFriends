import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { demomode } from "../constants";

const Card = ({ title, content, delay, gridPosition, xPos, yPos }) => {

  return (
    <motion.div className={`p-4 ${gridPosition} ${demomode ? 'border-pink-600 border-2' : ''}`}
      initial={{ opacity: 0, y: yPos, x: xPos }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <motion.div className={`${demomode ? 'border-pink-600 border-2' : ''}`}>
        {title}
      </motion.div>
      <motion.p className={`text-[18px] font-montserrat ${demomode ? 'border-pink-600 border-2' : ''}`}>
        {content}
      </motion.p>
    </motion.div>
  )
}

export default Card;