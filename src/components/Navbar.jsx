import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { slideIn, textVariant, moveTitle } from "../utils/motion";

import Title from "./Title";
import { demomode } from "../constants";

const demobox = demomode ? styles.demo.navbar : {};

const Navbar = ({ setHannyaPos, hannyaPos, active, setActive }) => {
   
  const [onCollection, setOnCollection] = useState(true);
  const [animate, setAnimate] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-7 fixed top-0 z-20 bg-transparent`}
      style={demobox}
    >
      <div className='w-full flex justify-between items-center max-w-full mx-auto' style={demobox}>
        <Link
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            setHannyaPos(0);
            setAnimate(false);
          }}
        >
          <Title />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-white hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => { 
                setActive(nav.title);
                setOnCollection(nav.collection);
                setHannyaPos(nav.hannyaPosition);
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