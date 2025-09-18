import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { HannyaCanvas } from "./canvas";


import { styles } from "../styles";

import { demomode, volumesVideoArray } from "../constants";
import { volumesDescription } from "../constants";

import coverImg from "../assets/photos/volumeCovers/Vol1CoverGib.png"
import vol1 from "../assets/videos/Volumes/Vol2.mp4"
import staticNoise from "../assets/videos/WhiteNoise/whiteNoise.mp4"
import grain from "../assets/videos/Effects/grainVid1.mp4"

const demobox = demomode ? styles.demo.landing : {};

const volumeSelectionParentVariants = {
  initial: { x: 0 },
  hover: { x: 20 },
}

const volumeSelectionChildVariants = {
  initial: { opacity: 0, x: 0 },
  hover: { opacity: 1, x: 10 },
}

const VideoCard = ({ volume }) => {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div className={`pb-8 relative ${demomode ? 'border-purple-600 border-2' : ''}`} 
      whileHover="hover" 
      initial="initial"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {hovered && (
        <video
          style={demobox}
          className={`top-0 left-0 w-full h-full absolute object-cover ${volume.active ? "brightness-50" : "brightness-25"}`}
          src={volume.src} 
          autoPlay  
          loop
          muted
          ref={videoRef}
        />  
      )}      
      <motion.hr className={`relative border-t-2 border-white my-4`}></motion.hr>
      <motion.div className={`mx-4 relative flex justify-between mb-4`} >
        <motion.div variants={volumeSelectionParentVariants} transition={{ type: "tween"}}>
          <motion.p className={`font-dot-gothic font-bold text-[36px] ${demomode ? 'border-purple-600 border-2' : ''}`}>
            V O L {volume.id} • <motion.span className={`text-red-600 font-dot-gothic ${hovered && volume.active ? 'drop-shadow-glow-red-xs' : ''}`}>{volume.titleJap}</motion.span>
          </motion.p>
          <motion.div className={`font-dot-gothic text-[24px]`} variants={volumeSelectionChildVariants}>{volume.location}</motion.div>
        </motion.div>
        <motion.div className={`font-dot-gothic text-[24px] ${demomode ? 'border-purple-600 border-2' : ''}`}>{volume.date}</motion.div>
      </motion.div>          
    </motion.div>
  )
}


const Volumes = ({ setSelectedIndex }) => {  
  const videoRef = useRef();
  const videoGrainRef = useRef();
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    changeVideoSource();
    if (videoGrainRef.current) {
      videoGrainRef.current.playbackRate = 0.4;
    }
  }, [videoIndex]);

  const incrementVideoIndex = () => {
    let nextIndex = Math.abs(videoIndex + 1) % 5;
    setVideoIndex(nextIndex);
    console.log(videoIndex);
  };

  const decrementVideoIndex = () => {
    let nextIndex = videoIndex;
    if (videoIndex == 0) {
      nextIndex = 4;
    } else {
      nextIndex = nextIndex - 1;
    }
    setVideoIndex(nextIndex);
    console.log(videoIndex);
  };

  const changeVideoSource = () => {
    if (videoRef.current) {
      videoRef.current.src = staticNoise;
      videoRef.current.volume = 0.4;
      videoRef.current.load();
      videoRef.current.play();      
    }
  }

  return (
    <section 
      className={`relative overflow-x-hidden overflow-y-hidden flex flex-col bg-primary`}
      style={demobox}
      key={1}
    >
      <div className={`relative flex flex-col p-20 gap-20 items-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <video
          style={demobox}
          className={`top-0 left-0 w-full h-full absolute object-cover brightness-25`}
          src={grain}
          ref={videoGrainRef} 
          autoPlay  
          loop
          muted
        />

        <motion.div className={`relative flex gap-2 z-30 ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.span className={`relative inline-block font-anton text-[160px] ${demomode ? 'border-purple-600 border-2' : ''}`}>VOLUMES</motion.span>
          <motion.span className={`absolute -top-1 left-1 font-shrikhand text-[40px] z-30`}>JUST FRIENDS.</motion.span>
          <motion.span className={`relative inline-block font-mochiy drop-shadow-glow-red-sm text-red-600 text-[148px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続
            {/* <motion.span>接</motion.span>
            <motion.span>続</motion.span> */}
          </motion.span>
        </motion.div>

        <motion.p className={`relative font-noto-mono max-w-10/20 font-light text-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
          {volumesDescription}
        </motion.p>
        
      </div>

      {/* <div className={`relative flex flex-col items-center p-20 ${demomode ? 'border-purple-600 border-2' : ''}`}>
        <motion.p className={`relative font-noto-mono max-w-10/20 font-light text-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
          {volumesDescription}
        </motion.p>
      </div> */}
        
      <div className={`relative p-20 ${demomode ? 'border-purple-600 border-2' : ''}`}>
        {volumesVideoArray.map((volume) => (
          <VideoCard volume={volume} />
        ))}
      </div>


      <div className={`relative z-20 ${demomode ? 'border-purple-600 border-2' : ''}`}>
          
        <motion.div className={`relative font-anton inline-block text-[36px] z-30 bg-red-600 text-white px-2 p-1 rounded-lg ${demomode ? 'border-purple-600 border-2' : ''}`}
          onClick={() => console.log("Clicked!")}
        >
          TICKETS
        </motion.div>
      </div>
      
    </section>
  )
};

export default Volumes;