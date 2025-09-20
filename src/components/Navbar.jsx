import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, transform } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { slideIn, textVariant, moveTitle } from "../utils/motion";

import Title from "./Title";
import { demomode } from "../constants";

const demobox = demomode ? styles.demo.navbar : {};

const Navbar = ({ setSelectedItem, selectedItem }) => {
  const navigate = useNavigate();
   
  const [onCollection, setOnCollection] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  return (
    <nav
      className={`py-6 px-12 w-full flex items-center fixed top-0 bg-transparent z-20`}
      style={demobox}
    >
      <motion.div 
        style={demobox} 
        className={`font-shrikhand text-[42px] pointer-default`}
        onClick={() => navigate('/home')}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{ opacity: hovered ? 1 : 0.75, transition: { duration: 0.1 } }}
      >
        JF.
      </motion.div>
        
    </nav>
  ); 
}

export default Navbar;