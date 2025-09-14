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
  initial: { opacity: 0 },
  hover: { opacity: 1 },
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
          className={`top-0 left-0 w-full h-full absolute object-cover brightness-50`}
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
          <motion.p className={`font-dot-gothic font-bold text-[48px] ${demomode ? 'border-purple-600 border-2' : ''}`}>
            V O L {volume.id} • <motion.span className={`text-red-600 font-dot-gothic`}>初 め</motion.span>
          </motion.p>
          <motion.div className={`font-dot-gothic text-[28px]`} variants={volumeSelectionChildVariants}>{volume.location}</motion.div>
        </motion.div>
        <motion.div className={`font-dot-gothic text-[28px] ${demomode ? 'border-purple-600 border-2' : ''}`}>4/26/2025</motion.div>
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
      className={`relative overflow-x-hidden overflow-y-hidden flex flex-col gap-2 p-4 bg-primary`}
      style={demobox}
      key={1}
    >
      <motion.div className={`relative flex flex-col p-20 gap-20 items-center ${demomode ? 'border-purple-600 border-2' : ''}`}>
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
          <motion.span className={`relative inline-block font-mochiy drop-shadow-glow text-red-600 text-[148px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続
            {/* <motion.span>接</motion.span>
            <motion.span>続</motion.span> */}
          </motion.span>
        </motion.div>

        {/* <motion.p className={`relative font-montserrat text-[18px] max-w-2xl ${demomode ? 'border-purple-600 border-2' : ''}`}>
          {volumesDescription}
        </motion.p> */}
        
      </motion.div>

      

               
        
      <div className={`relative ${demomode ? 'border-purple-600 border-2' : ''}`}>
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

  return (
    <div className={`relative justify-center gap-8 flex h-full overflow-hidden`} style={demobox}>
      <div className={`relative flex flex-col justify-between h-full p-4 max-w-[40rem]`} style={demobox}>
        <div className={`relative z-20 pointer-events-none ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <motion.div className={`relative flex ${demomode ? 'border-purple-600 border-2' : ''}`}>
            <motion.span className={`relative inline-block font-anton text-[110px] ${demomode ? 'border-purple-600 border-2' : ''}`}>VOLUMES</motion.span>
            <motion.span className={`absolute -top-1 left-1 font-shrikhand text-[32px] z-30`}>JUST FRIENDS.</motion.span>
            <motion.span className={`relative inline-block font-mochiy text-red-600 text-[101px] ${demomode ? 'border-purple-600 border-2' : ''}`}>接続</motion.span>
          </motion.div>       
          <motion.div className={`relative backdrop-blur-sm -top-4 break-words text-[18px] font-montserrat ${demomode ? 'border-purple-600 border-2' : ''}`}>
            {volumesDescription}
          </motion.div> 
        </div>
        <div className={`relative flex justify-between items-center h ${demomode ? 'border-purple-600 border-2' : ''}`}>
          {/* <motion.div className={`relative font-anton inline-block text-[28px] z-20 ${demomode ? 'border-purple-600 border-2' : ''}`}>
            BACK
          </motion.div> */}
          <motion.div className={`relative font-anton inline-block text-[36px] z-20 bg-red-600 text-white px-2 p-1 rounded-lg ${demomode ? 'border-purple-600 border-2' : ''}`}>
            TICKETS
          </motion.div>
        </div>       
        
        <HannyaCanvas hScale={14} hpx={0} hpy={-0.7} hpz={0} />
      </div>
      <div className={`relative flex-1 h-full max-w-[40rem] p-4`} style={demobox}>
        <video
          ref={videoRef}
          style={demobox}          
          className={`relative object-cover w-full h-full rounded-lg`}
          src={volumesVideoArray[videoIndex].src}
          onEnded={(event) => {event.target.src = volumesVideoArray[videoIndex].src}}
          autoPlay
          muted
        />
        <div className={`absolute flex items-center opacity-75 font-dot-gothic bottom-16 left-16 z-20`}>
          <div className={`w-0 h-0 
            border-t-[20px] border-t-transparent 
            border-b-[20px] border-b-transparent 
            border-r-[20px] border-l-white mr-8`}
            onClick={() => decrementVideoIndex()}
          />
          <div className={`${demomode ? 'border-purple-600 border-2' : ''}`}>
            <div className={`font-dot-gothic text-[40px] font-bold`}>{volumesVideoArray[videoIndex].displayTitle}</div>
            <div className={`font-dot-gothic text-[30px]`}>{volumesVideoArray[videoIndex].location}</div>
            <div className={`font-dot-gothic text-[30px]`}>4/26/2025</div>
          </div>
          <div className={`w-0 h-0 
            border-t-[20px] border-t-transparent 
            border-b-[20px] border-b-transparent 
            border-l-[20px] border-l-white ml-6`}
            onClick={() => incrementVideoIndex()}
          />
        </div>
        
      </div>
    </div>   
  );
};

export default Volumes;