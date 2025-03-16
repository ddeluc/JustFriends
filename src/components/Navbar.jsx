import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { slideIn, textVariant, moveTitle } from "../utils/motion";

import Title from "./Title";
import { demomode } from "../constants";

const demobox = demomode ? styles.demo.navbar : {};

const Navbar = ({ setSelectedItem, selectedItem }) => {
   
  const [onCollection, setOnCollection] = useState(true);
  const [animate, setAnimate] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-7 fixed top-0 z-20 bg-transparent`}
      style={demobox}
    >
      <div className='w-full flex justify-between items-center max-w-full mx-auto' style={demobox}>
        <div 
          style={demobox} 
          className={`font-shrikhand text-[24px]`}
          onClick={() => setSelectedItem("None")}
        >
          <Title />
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-white hover:text-white text-[24px] cursor-pointer`}
              onClick={() => { 
                setOnCollection(nav.collection);
                setSelectedItem(nav.title);
                setAnimate(true);
                console.log(nav.hannyaPosition);
                }
              }
              style={demobox}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>      
    </nav>
  ); 
}

export default Navbar;