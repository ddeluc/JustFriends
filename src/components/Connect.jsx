import React,{ useRef, useEffect } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { demomode, serviceCards } from "../constants";
import grain from "../assets/videos/Effects/grainVid1.mp4";

import { connectText } from "../constants";
import { HannyaCanvas } from "./canvas";

import EmailForm from "./EmailForm";

const demobox = demomode ? styles.demo.landing : {};

const Connect = ({}) => {
  const videoGrainRef = useRef();
  const [hovered, setHovered] = React.useState(false);

  useEffect(() => {
   
    if (videoGrainRef.current) {
      videoGrainRef.current.playbackRate = 0.35;
      window.scrollTo(0, 0);
    }
  }, []);

	return (
		<section 
			className={`relative overflow-x-hidden min-h-[100vh] w-screen items-center gap-20 justify-center flex flex-col bg-primary`}
			style={demobox}
			key={1}
		>
      
        

      <motion.div className={`relative z-20`}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.h1 className={`relative font-mochiy font-bold z-20 text-[120px] text-white ${demomode ? 'border-purple-600 border-2' : ''}`}
          animate={{ y: hovered ? 10 : 0, transition: { duration: 0.25, type: "spring", bounce: 0 } }}
        >
          シ ナ ジ ー
        </motion.h1>
        <motion.span className={`absolute left-1/2 -top-5 text-yellow-400 font-noto-mono ${demomode ? 'border-purple-600 border-2' : ''}`}
          animate={{ x: "-50%", opacity: hovered ? 1 : 0, y: hovered ? 25 : 0, transition: { duration: 0.25, type: "spring", bounce: 0 } }}
        >
          {`[CONNECT]`}
        </motion.span>
      </motion.div>
      
      <div className={`flex flex-col items-center z-20 gap-10`}>
        <motion.p className={`relative font-noto-mono z-20 text-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
          {connectText}
        </motion.p>    
        <div class={`grid grid-cols-2 grid-rows-5 gap-5 z-20 text-[18px] font-light font-noto-mono ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.input className={`col-start-1 col-end-2 row-start-1 row-end-2 p-3 rounded-md bg-transparent backdrop-blur-md border-white border-2 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Name"/>
          <motion.input className={`col-start-2 col-end-3 row-start-1 row-end-2 p-3 rounded-md bg-transparent backdrop-blur-md border-white border-2 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Email Address"/>
          <motion.input className={`col-start-1 col-end-3 row-start-2 row-end-3 p-3 rounded-md bg-transparent backdrop-blur-md border-white border-2 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Subject"/>
          <motion.textarea className={`col-start-1 resize-none col-end-3 row-start-3 rounded-md bg-transparent backdrop-blur-md border-white border-2 h-full row-end-6 p-3 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Message"/>
        </div>
        <motion.div className={`relative font-anton inline-block text-[36px] z-30 bg-red-600 text-white px-4 p-1 rounded-lg ${demomode ? 'border-purple-600 border-2' : ''}`}
          onClick={() => console.log("Clicked!")}
        >
          SEND
        </motion.div>
        
      </div>
      
        
      <video
        style={demobox}
        className={`top-0 left-0 w-full h-full absolute object-cover brightness-25`}
        src={grain}
        ref={videoGrainRef}
        autoPlay  
        loop
        muted
      />
      <HannyaCanvas hScale={18} hpx={0} hpy={0} hpz={0} />
		</section>
	);
}

export default Connect;