import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";

import { demomode, volumesVideoArray } from "../constants";
import { volumesDescription } from "../constants";
import Navbar from "./Navbar";
import Title from "./Title";
import Footer from "./Footer";

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
  const previewVid = useRef(null);
  const fullVid = useRef(null)
  const [hovered, setHovered] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
  }, [play])

  return (
    <>
      <motion.div className={`pb-8 relative ${play && 'z-20'} ${demomode ? 'border-purple-600 border-2' : ''}`} 
        whileHover="hover" 
        initial="initial"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => {if (volume.active) setPlay(true)}}
      >
        {hovered && (
          <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-cover ${volume.active ? "brightness-50" : "brightness-25"}`}
            src={volume.shortSrc} 
            autoPlay  
            loop
            muted
            ref={previewVid}
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

      {play && (
        <div className={`fixed inset-0 bg-black bg-opacity-90 z-30 flex items-center justify-center`}
          onClick={() => setPlay(false)}
        >
          <div className={`relative`}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              style={demobox}
              className={`h-[90vh] ${volume.active ? "brightness-50" : "brightness-25"}`}
              src={volume.src} 
              autoPlay  
              loop
              ref={fullVid}
              onClick={() => {
                if (fullVid.current) {
                  if (fullVid.current.paused) {
                    fullVid.current.play();
                  } else {
                    fullVid.current.pause();
                  }
                }
              }}    
            />  
          </div>
          
        </div>
      )}
    </>
    
  )
}

const Volumes = ({  }) => {  
  const videoRef = useRef();
  const videoGrainRef = useRef();
  const [videoIndex, setVideoIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    changeVideoSource();
    if (videoGrainRef.current) {
      videoGrainRef.current.playbackRate = 0.4;
    }
  }, []);

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
      className={`relative overflow-x-hidden overflow-y-hidden flex flex-col items-center pb-20 bg-primary`}
      style={demobox}
      key={1}
    >
      <Navbar />

      {/* TITLE */}
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

        <motion.div className={`relative flex gap-2 ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.span className={`relative inline-block font-anton text-[160px] ${demomode ? 'border-purple-600 border-2' : ''}`}>VOLUMES</motion.span>
          <motion.span className={`relative inline-block font-mochiy drop-shadow-glow-red-sm text-red-600 text-[148px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続
          </motion.span>
        </motion.div>

        <motion.p className={`relative font-noto-mono max-w-10/20 font-light text-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
          {volumesDescription}
        </motion.p>        
      </div>
      
      {/* VOLUMES LIST */}
      <div className={`relative z-10 w-full p-20`}>
        {volumesVideoArray.map((volume) => (          
          <VideoCard volume={volume} />                   
        ))}
      </div>
      
      {/* LINE */}
      <div className={`relative border-b-2 border-white max-w-16 w-full`}/>
        
      {/* CONNECT */}
      <div className={`relative p-20`}>
        <Title titleEng={"CONNECT"} titleJap={"友情"} submitFunction={() => navigate('/connect')}/>
      </div>     
      
      <Footer />
    </section>
  )
};

export default Volumes;