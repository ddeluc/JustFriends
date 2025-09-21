import React,{ useRef, useEffect } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { demomode, serviceCards } from "../constants";
import grain from "../assets/videos/Effects/grainVid1.mp4";

import { connectText } from "../constants";
import { HannyaCanvas } from "./canvas";
import Navbar from "./Navbar";
import Title from "./Title";
import Footer from "./Footer";

import EmailForm from "./EmailForm";

const demobox = demomode ? styles.demo.landing : {};

const Connect = ({}) => {
  const videoGrainRef = useRef();
  const [hovered, setHovered] = React.useState(false);

  useEffect(() => {
   
    if (videoGrainRef.current) {
      videoGrainRef.current.playbackRate = 0.35;
    }
    // window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

	return (
		<section 
			className={`relative overflow-x-hidden overflow-y-hidden min-h-screen items-center flex flex-col pb-20 bg-primary`}
			style={demobox}
			key={1}
		>
      <Navbar />

      <motion.div className={`relative flex flex-col p-20 z-20 w-full gap-18 items-center ${demomode ? 'border-purple-600 border-2' : ''}`}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.h1 className={`relative font-mochiy font-bold text-[120px] z-10 text-white ${demomode ? 'border-purple-600 border-2' : ''}`}
          animate={{ y: hovered ? 10 : 0, transition: { duration: 0.25, type: "spring", bounce: 0 } }}
        >
          シ ナ ジ ー
        </motion.h1>
        <motion.span className={`absolute left-1/2 top-10 text-yellow-400 z-10 font-noto-mono ${demomode ? 'border-purple-600 border-2' : ''}`}
          animate={{ x: "-50%", opacity: hovered ? 1 : 0, y: hovered ? 25 : 0, transition: { duration: 0.25, type: "spring", bounce: 0 } }}
        >
          {`[CONNECT]`}
        </motion.span>
        
      </motion.div>
      
      <div className={`relative flex flex-col items-center z-20 gap-10 p-20`}>
        <motion.p className={`relative font-noto-mono z-20 text-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
          {connectText}
        </motion.p>    
        <div class={`grid grid-cols-2 grid-rows-5 gap-5 z-20 text-[18px] font-light font-noto-mono ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.input className={`col-start-1 col-end-2 row-start-1 row-end-2 p-3 rounded-md bg-transparent backdrop-blur-md border-white border-2 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Name"/>
          <motion.input className={`col-start-2 col-end-3 row-start-1 row-end-2 p-3 rounded-md bg-transparent backdrop-blur-md border-white border-2 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Email Address"/>
          <motion.input className={`col-start-1 col-end-3 row-start-2 row-end-3 p-3 rounded-md bg-transparent backdrop-blur-md border-white border-2 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Subject"/>
          <motion.textarea className={`col-start-1 resize-none col-end-3 row-start-3 rounded-md bg-transparent backdrop-blur-md border-white border-2 h-full row-end-6 p-3 ${demomode ? 'border-purple-600 border-2' : ''}`} placeholder="Message"/>
        </div>
        <Title titleEng={"SEND"} titleJap={"送信"} submitFunction={() => alert("Form submission is currently disabled for demo purposes.")}/>

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

      <div className={`absolute top-0 left-0 w-full h-full max-h-[100vh] ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <HannyaCanvas hScale={18} hpx={0} hpy={0} hpz={0} />
      </div>
      
      <Footer />
		</section>
	);
}

export default Connect;