import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import Volumes from "./Volumes";
import Service from "./Service";

import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import AkiraCity3 from '../assets/videos/AkiraCity3.mp4';
import animatedDJ from '../assets/animatedVideos/Anime_DJ_Mixing_JF.mp4';

import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";
import MenuItem from "./Menu/MenuItem";

const demobox = demomode ? styles.demo.landing : {};

const Home = ({ setOnLanding, setSelectedItem, selectedItem }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  
  return (
    <section 
      className={`relative w-screen h-screen overflow-x-hidden overflow-y-hidden flex gap-2 p-2 bg-primary`}
      style={demobox}
      key={1}
    >
      {/* LEFT */} 
      <motion.div className={`flex-none flex-col relative h-full w-1/3 ${selectedIndex === null ? 'w-1/3' : ''}`} style={demobox}
          animate={{
            width: selectedIndex === null ? "33.333%" : selectedIndex === 1 ? '100%' : '0%',
          }}
          onClick={() => navigate("/service")}
          onHoverStart={() => setHovered(1)}
          onHoverEnd={() => setHovered(null)}
      >
        {selectedIndex == 1 ?
          <>
            <Service setSelectedIndex={setSelectedIndex} />
          </>
        : selectedIndex == null ?
          <>          
            <motion.div className={`relative mt-8 flex justify-center ${demomode ? 'border-blue-600 border-2' : ''} z-30`}>
              <motion.h1 className={`relative font-anton text-[110px] text-white ${demomode ? 'border-purple-600 border-2' : ''} ${hovered === 1 ? '' : 'opacity-70'}`}>
                SERVICE
              </motion.h1>
              <motion.h1 className={`absolute text-red-600 text-[42px] top-1/2 -translate-y-1/2 z-20 font-mochiy font-bold drop-shadow-glow ${demomode ? 'border-orange-600 border-2' : ''}`}
                animate={{
                  opacity: hovered === 1 ? 1 : 0,
                }}
              >
                コ ミ ュ ニ テ ィ
              </motion.h1>
            </motion.div>
            {/* <motion.div className={`absolute left-0 top-0 h-full w-full ${demomode ? 'border-pink-600 border-2' : ''} z-30`} /> */}
            <video
              style={demobox}
              className={`top-0 left-0 w-full h-full absolute object-none rounded-lg
                ${hovered === 1 ? 'brightness-50' : 'brightness-25 grayscale '}
              `}
              src={animatedDJ} autoPlay muted loop
            />      
          </>  
        :
          <></>
        }        
      </motion.div>

      {/* MIDDLE */}
      <motion.div className={`flex-none flex-col relative h-full w-1/3 ${selectedIndex === null ? 'w-1/3' : ''}`} style={demobox}
          animate={{
            width: selectedIndex === null ? "33.333%" : selectedIndex === 2 ? '100%' : '0%',
          }}
          onClick={() => navigate("/volumes")}
          onHoverStart={() => setHovered(2)}
          onHoverEnd={() => setHovered(null)}
      >
        {selectedIndex == 2 ?
          <>
            <Volumes setSelectedIndex={setSelectedIndex} />
          </>
        : selectedIndex == null ?
          <>
            <motion.div className={`relative mt-8 flex justify-center ${demomode ? 'border-blue-600 border-2' : ''} z-30`}>          
              <motion.h1 className={`relative font-anton text-[110px] text-white ${demomode ? 'border-purple-600 border-2' : ''} ${hovered === 2 ? '' : 'opacity-70'}`}>
                VOLUMES
              </motion.h1>
              <motion.h1 className={`absolute text-red-600 text-[42px] top-1/2 -translate-y-1/2 z-20 font-mochiy font-bold drop-shadow-glow ${demomode ? 'border-orange-600 border-2' : ''}`}
                animate={{
                  opacity: hovered === 2 ? 1 : 0,
                }}
              >
                コ ネ ク シ ョ ン
              </motion.h1>
            </motion.div>
            <video
              style={demobox}
              className={`top-0 left-0 w-full h-full absolute object-none rounded-lg
                ${hovered === 2 ? 'brightness-50' : 'brightness-25 grayscale '}
              `}
              src={AkiraCity3} autoPlay muted loop
            />  
          </>     
        : 
          <></>
        }
        
        {/* <motion.div className={`absolute left-0 top-0 h-full w-full ${demomode ? 'border-pink-600 border-2' : ''} z-30`} /> */}
         
      </motion.div>

      {/* RIGHT */}
      <motion.div className={`flex-none flex-col relative w-1/3 ${selectedIndex === null ? 'w-1/3' : ''}`} style={demobox}
        animate={{
          width: selectedIndex === null ? "33.333%" : selectedIndex === 3 ? '100%' : '0%',
        }}
        onClick={() => setSelectedIndex(3)}
        onHoverStart={() => setHovered(3)}
        onHoverEnd={() => setHovered(null)}
      >
        {selectedIndex == 3 ? 
          <></>
        : selectedIndex == null ?
          <>
            <motion.div className={`relative mt-8 flex justify-center ${demomode ? 'border-blue-600 border-2' : ''} z-30`}>
              <motion.h1 className={`relative font-anton text-[110px] text-white ${demomode ? 'border-purple-600 border-2' : ''} ${hovered === 3 ? '' : 'opacity-70'}`}>
                CONNECT
              </motion.h1>
              <motion.h1 className={`absolute text-red-600 text-[42px] top-1/2 -translate-y-1/2 z-20 font-mochiy font-bold drop-shadow-glow ${demomode ? 'border-orange-600 border-2' : ''}`}
                animate={{
                  opacity: hovered === 3 ? 1 : 0,
                }}
              >
                カ ル チ ャ ー
              </motion.h1>
            </motion.div>
            <video
              style={demobox}
              className={`top-0 left-0 w-full h-full absolute object-none rounded-lg
                ${hovered === 3 ? 'brightness-50' : 'brightness-25 grayscale '}
              `}
              src={oceanWaves1} autoPlay muted loop
            />        
          </>          
        :
          <></>
        }    
        {/* <motion.div className={`absolute left-0 top-0 h-full w-full ${demomode ? 'border-pink-600 border-2' : ''} z-30`} /> */}
      </motion.div>

    </section>    
  );
};

export default Home;