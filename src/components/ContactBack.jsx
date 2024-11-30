import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import promo from '../assets/volumes/promo1.mp4';

const demobox = demomode ? styles.demo.back : {};

const ContactBack = ({}) => {

  return (
    <motion.div
      style={demobox} 
      className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}
      initial="initial" 
      animate="animate"
      variants={{
        initial: { width: 0 },
        animate: { width: '100%' }
      }}
      transition={{
        duration: 0.5
      }}
    >
      <video
        style={demobox}
        className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
        src={promo} muted loop
      />
    </motion.div>     
  );
};

export default ContactBack;