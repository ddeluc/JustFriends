import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { demomode } from "../constants";

const Card = ({ title, content }) => {

  return (
    <motion.div className={`p-4 m-4 max-w-[25rem] aspect-square ${demomode ? 'border-pink-600 border-2' : ''}`}>
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