import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { demomode } from "../constants";

const demobox = demomode ? styles.demo.navbar : {};

const Navbar = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <nav
      className={`p-3 px-6 w-full flex items-center justify-between fixed top-0 bg-transparent z-50 cursor-default`}
      style={demobox}
    >
      <motion.div  
        className={`font-shrikhand text-[42px]`}
        onClick={() => navigate('/home#menu')}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{ opacity: hovered ? 1 : 0.75, transition: { duration: 0.1 } }}
      >
        JF
      </motion.div>
      <div className={`flex gap-4 justify-evenly text-[18px]`}> 
        <motion.a href="mailto:hello@justfriends.com" target="_blank" rel="noopener noreferrer" className={`font-noto-mono cursor-default`}>{`EMAIL`}</motion.a>
        <motion.a href="https://www.instagram.com/justfriends.zz/" target="_blank" rel="noopener noreferrer" className={`font-noto-mono cursor-default`}>{`INSTAGRAM`}</motion.a>
      </div>
    </nav>
  ); 
}

export default Navbar;