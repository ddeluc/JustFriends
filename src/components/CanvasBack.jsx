import { motion, transform } from "framer-motion";
import { useEffect, useRef } from "react";

import { styles } from "../styles";
import { demomode } from "../constants";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';
import cityTrain from '../assets/videos/CityTrain.mp4';
import farine from '../assets/videos/farinefiveroses.mp4';
import vol4 from '../assets/volumes/vol4short.mp4';
import vol2 from '../assets/volumes/vol2short.mp4';
import promo from '../assets/volumes/promo1.mp4';



const demobox = demomode ? styles.demo.landing : {};

const CanvasBack = ({ hoveredItem, selectedItem, volumesVideoIndex, isMute }) => {
  const vidRef1 = useRef();
  const vidRef2 = useRef();
  const vidRef3 = useRef();
  const volumesVideoRef = useRef();

  const volumesVideoArray = [vol2, vol4];
  const volumesTitles = ["Volume 1", "Volume 2"];

  // vidRef1.current.playbackRate = 0.8;
  // vidRef2.current.playbackRate = 0.8;
  // vidRef3.current.playbackRate = 0.8;

  useEffect(() => {
    if (selectedItem == "None") {
      vidRef1.current.playbackRate = 0.8;
      vidRef2.current.playbackRate = 0.8;
      vidRef3.current.playbackRate = 0.8;
    } else if (selectedItem == "Volumes") {
      changeVideoSource();
    }

  //   if (hoveredItem == "About") {
  //     vidRef1.current.play();
  //   } else {
  //     vidRef1.current.pause();
  //   }

  //   if (hoveredItem == "Volumes") {
  //     vidRef2.current.play();
  //   } else {
  //     vidRef2.current.pause();
  //   }

  //   if (hoveredItem == "Join") {
  //     vidRef3.current.play();
  //   } else {
  //     vidRef3.current.pause();
  //   }

    // if (selectedItem != "None") {
    //   vidRef1.current.play();
    //   vidRef2.current.play();
    //   vidRef3.current.play();
    // } 

  }, [hoveredItem, volumesVideoIndex, selectedItem]);

  const changeVideoSource = () => {
    if (volumesVideoRef.current) {
      volumesVideoRef.current.src = whiteNoise;
      volumesVideoRef.current.volume = 0.4;
      volumesVideoRef.current.load();
      volumesVideoRef.current.play();
      
    }
  }

  const handleVideoEnd = () => {    
    setCurrentVideoIndex((currentVideoIndex + 1)%videoSources.length);    
  };

  return (
    <div style={demobox} className={`absolute flex inset-0 max-h-172 max-w-5xl justify-center mx-auto gap-5 my-8`}>
      {selectedItem == "None" ? 
      <>
        <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand w-1/3`}>
          <video
            style={demobox}
            ref={vidRef1}
            className={hoveredItem == "About" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50 grayscale`}
            src={vol4} onEnded={handleVideoEnd} autoPlay muted loop
          />              
        </div >
        <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand w-1/3`}>        
          <video
            style={demobox}
            ref={vidRef2}
            className={hoveredItem == "Volumes" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50 grayscale`}
            src={vol2} onEnded={handleVideoEnd} autoPlay muted loop
          />        
        </div>
        <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand w-1/3`}>
          <video
            style={demobox}
            ref={vidRef3}
            className={hoveredItem == "Join" 
              ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
              : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50 grayscale`}
            src={promo} onEnded={handleVideoEnd} autoPlay muted loop
          />
        </div> 
      </>
      :
        <>
        {selectedItem == "About" ?
          <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
            src={vol4} autoPlay muted loop
          />
        : 
        <>
        {selectedItem == "Join" ?
          <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
            src={promo} autoPlay muted loop
          />
        :
          <>
            <motion.div style={demobox} className={`relative text-yellow-300 text-center w-1/3 text-[45px] font-shrikhand`}
              initial="initial" 
              animate="animate"
              variants={{
                initial: { opacity: 1, scale: "100%" },
                animate: { opacity: 1, scale: "110%"}
              }}
              transition={{
                duration: 0.5
              }}
            > 
            <div style={demobox} className={`flex flex-col justify-end h-full w-full`}>               
              <video
                style={demobox}
                ref={volumesVideoRef}
                className={`top-0 left-0 w-full h-full absolute object-fill rounded-3xl brightness-85`}
                src={volumesVideoArray[volumesVideoIndex]} onEnded={(event) => {
                  event.target.src = volumesVideoArray[volumesVideoIndex];
                }} 
                autoPlay
                muted={isMute}                
              />
              <div style={demobox} className={`absolute text-white text-[40px] m-3 ml-4`}>
                {volumesTitles[volumesVideoIndex]}
              </div>                
            </div>
                   
              
            </motion.div>            
          </>
        }
        </>          
        }
        </>
      }     

    </div>
  )

  // return (
  //   <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto grid grid-cols-3 gap-5 my-8`}>
  //     {selectedItem == "None" ? 
  //     <>
  //       <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
  //         <video
  //           style={demobox}
  //           ref={vidRef1}
  //           className={hoveredItem == "About" 
  //             ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
  //             : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50 grayscale`}
  //           src={vol4} onEnded={handleVideoEnd} autoPlay muted loop
  //         />              
  //       </div >
  //       <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>        
  //         <video
  //           style={demobox}
  //           ref={vidRef2}
  //           className={hoveredItem == "Volumes" 
  //             ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
  //             : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50 grayscale`}
  //           src={vol2} onEnded={handleVideoEnd} autoPlay muted loop
  //         />        
  //       </div>
  //       <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
  //         <video
  //           style={demobox}
  //           ref={vidRef3}
  //           className={hoveredItem == "Join" 
  //             ? `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-85`
  //             : `top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50 grayscale`}
  //           src={promo} onEnded={handleVideoEnd} autoPlay muted loop
  //         />
  //       </div> 
  //     </>
  //     :
  //       <>
  //       {selectedItem == "About" ?
  //         <video
  //           style={demobox}
  //           className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
  //           src={vol4} autoPlay muted loop
  //         />
  //       : 
  //       <>
  //       {selectedItem == "Join" ?
  //         <video
  //           style={demobox}
  //           className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
  //           src={promo} autoPlay muted loop
  //         />
  //       :
  //         <>
  //           {/* <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
                    
  //           </div > */}
  //           <motion.div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>        
  //             <video
  //               style={demobox}
  //               ref={vidRef2}
  //               className={`top-0 left-0 w-full h-full absolute object-fill rounded-3xl brightness-85`}
  //               src={vol2} onEnded={handleVideoEnd} autoPlay muted loop
  //             />        
  //           </motion.div>
  //           {/* <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
              
  //           </div>  */}
  //         </>
  //       }
  //       </>          
  //       }
  //       </>
  //     }     

  //   </div>
  // )
}

export default CanvasBack;

