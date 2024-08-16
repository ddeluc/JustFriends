import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { landingHover } from "../utils/motion";
import { suffixWords } from "../constants";
import { demomode } from "../constants";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';

const videoSources = [
  {title: oceanWaves1, opacity: 50},
  {title: kuroko1, opacity: 50},
]

import Title from "./Title";
import { HannyaCanvas } from "./canvas";
import { init } from "@emailjs/browser";

const demobox = demomode ? styles.demo.landing : {};

const DURATION = 0.05;
const STAGGER = 0.025;

const Home = ({ setOnLanding }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const titleEng = "Just Friends.";
  const titleJap = "友情"
  const subTitleJap1 = "ゆっくりと"
  const subTitleEng1 = "Taking it slow."
  const subTitleJap2 = "思 い 出 づ く り"
  const subTitleEng2 = "Creating memories."

  const handleVideoEnd = () => {    
    setCurrentVideoIndex((currentVideoIndex + 1)%videoSources.length);    
  };

    return (
      <section 
        className={`relative flex flex-row w-full h-screen m-auto bg-black justify-center items-center p-8`}
        style={demobox}
      >
        {/* <video
          className={`absolute object-cover w-full h-full rounded-3xl brightness-50`}
          style={demobox}
          src={whiteNoise} loop autoPlay muted 
        />  */}
        <video
          className={`object-cover w-full h-full rounded-3xl brightness-${videoSources[currentVideoIndex].opacity}`}
          // style={demobox}
          // style={{boxShadow: '0 0 30px #ffffff'}}
          src={videoSources[currentVideoIndex].title} onEnded={handleVideoEnd} autoPlay muted 
        />
        <div style={demobox} className={`absolute flex flex-col inset-16 text-[36px] font-extrabold select-none`}> 
          <div style={demobox} className={`flex flex-row`}>
            <div className={`w-1/3 opacity-40`} style={demobox}>
              {titleJap}
            </div>
            <div className={`w-1/3 flex justify-center text-[40px] text-yellow-300`} style={demobox}>
              {titleEng}
            </div>
            <div className={`w-1/3 flex justify-end text-[24px] items-center font-semibold`} style={demobox}>
              <div
                className={`flex flex-row space-x-8`}
              >
                <div>
                  Volumes
                </div>
                <div>
                  About
                </div>
              </div>
            </div>
          </div>
              
        </div>         
      </section>
    );
  };

export default Home;