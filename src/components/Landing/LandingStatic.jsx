import React, { useState, useRef, useEffect } from "react";

import { styles } from "../../styles";
import { demomode } from "../../constants";

import whiteNoise from '../../assets/videos/WhiteNoise/whiteNoise.mp4'


const demobox = demomode ? styles.demo.landing : {};

const LandingStatic = ({ setOnLanding, setState, setNextState }) => {

  const staticVideo = useRef();

  const titleJap = "友情"

  return (
    <section 
      className={`relative flex flex-row w-full h-screen m-auto justify-center items-center p-2`}
      style={demobox}
    >
      <video
        ref={staticVideo}
        className={`object-cover w-full h-full rounded-lg brightness-60`}
        src={whiteNoise} onEnded={() => setOnLanding(false)} autoPlay muted
      />  
      <div
        className={`flex flex-col font-moichy font-bold text-[96px] text-white justify-end cursor-default absolute select-none`}
        style={demobox}
      >
        {titleJap}
      </div>       
    </section>
  ); 
};

export default LandingStatic;