import { motion, transform } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import MenuItem from "./MenuItem";
import Join from "./Join";
import Volumes from "./Volumes";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';
import cityTrain from '../assets/videos/CityTrain.mp4';
import farine from '../assets/videos/farinefiveroses.mp4';

import { aboutText } from "../constants";


const demobox = demomode ? styles.demo.front : {};

const CanvasFront = ({ setHoveredItem, hoveredItem, setSelectedItem, selectedItem, setVolumesVideoIndex, volumesVideoIndex, setIsMute, isMute }) => {
  

  return (
    <div style={demobox} className={`absolute max-h-172 flex items-center h-full w-full`}>
      
      <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto my-8`}>
      {selectedItem == "None" ?
        <div className={`absolute inset-0 max-h-172 max-w-5xl mx-auto grid grid-cols-3 gap-5`}>
          <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand mt-4`}>
            <MenuItem titleEng={"About"} titleJap={"話"} xMovement={35} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
          </div >
          <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand mt-4`}>
            <MenuItem titleEng={"Volumes"} titleJap={"章"} xMovement={35} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
          </div>
          <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand mt-4`}>
            <MenuItem titleEng={"Join"} titleJap={"音楽"} xMovement={30} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
          </div>
        </div>
        :
        <>
          {selectedItem == "Join" ? 
            <div style={demobox} className={`absolute flex inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12`}>      
              <Join setSelectedItem={setSelectedItem} />    
            </div>
          :
            <>
              {selectedItem == "About" ? 
                <div style={demobox} className={`absolute flex justify-end inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12 font-poppins`}>  
                  <div style={demobox} className={`w-7/12 flex flex-col justify-center text-[24px] mr-6`}>
                    <motion.div 
                      style={demobox} 
                      className={`font-shrikhand text-[36px] select-none cursor-default`}
                      initial={{ opacity: 0, x: -150 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                    >
                      A Collective...
                    </motion.div>
                    <motion.div 
                      style={demobox} 
                      className={`text-[22px] cursor-default select-none`}
                      initial={{ opacity: 0, x: -150 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{duration: 0.5, type: "spring", bounce: 0.3, delay: 0.3 }}
                    >                    
                      {aboutText}                           
                    </motion.div>
                    <div style={demobox} className={`flex justify-between mt-6`}>
                      <motion.div 
                        style={demobox} 
                        className={`text-[24px] w-max font-shrikhand cursor-pointer select-none`} 
                        initial="initial" 
                        whileHover="hovered"
                        onClick={() => setSelectedItem("None")}
                        variants={{
                          hovered: { opacity: 1, x: "-10%" }
                        }}
                        transition={{
                          type: 'spring',
                          bounce: 0,
                          duration: 0.2
                        }}
                      >
                        BACK
                      </motion.div>
                      <motion.div 
                        style={demobox} 
                        className={`text-[24px] w-max font-shrikhand cursor-pointer select-none`} 
                        initial="initial" 
                        whileHover="hovered"
                        onClick={() => setSelectedItem("Join")}
                        variants={{
                          hovered: { opacity: 1, x: "10%" }
                        }}
                        transition={{
                          type: 'spring',
                          bounce: 0,
                          duration: 0.2
                        }}
                      >
                        JOIN
                      </motion.div>
                    </div>
                    
                  </div>              
                </div>
              : 
                <>
                  <Volumes setVolumesVideoIndex={setVolumesVideoIndex} setSelectedItem={setSelectedItem} setIsMute={setIsMute} isMute={isMute} volumesVideoIndex={volumesVideoIndex}/>
                  {/* <div style={demobox} className={`absolute w-full flex justify-center space-x-12 text-[30px] font-shrikhand`}>
                    <motion.div 
                      style={demobox} 
                      className={`w-28 h-max cursor-pointer select-none text-end`}
                      onClick={() => setSelectedItem("None")}
                      initial="initial" 
                      whileHover="hovered"
                      variants={{
                        hovered: { opacity: 1, x: "-10%" }
                      }}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2
                      }}
                    >
                      BACK
                    </motion.div>
                    <div style={demobox} className={`w-1/3`}>

                    </div>
                    <motion.div 
                      style={demobox} 
                      className={`w-28 h-max cursor-pointer select-none`}
                      onClick={() => setSelectedItem("Join")}
                      initial="initial" 
                      whileHover="hovered"
                      variants={{
                        hovered: { opacity: 1, x: "10%" }
                      }}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2
                      }}
                    >
                      JOIN
                    </motion.div>
                  </div>               
                  <div style={demobox} className={`h-full flex justify-center items-center space-x-12 text-[64px] font-shrikhand`}>                  
                    <motion.div 
                      style={demobox} 
                      className={`w-max h-max cursor-pointer select-none`}
                      onClick={() => decrementVolumesVideoIndex()}
                      initial="initial" 
                      whileHover="hovered"
                      variants={{
                        hovered: { opacity: 1, x: "-10%" }
                      }}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2
                      }}
                    >
                      {'<'}
                    </motion.div>         
                    <div style={demobox} className={`w-1/3`}>

                    </div>
                    <motion.div 
                      style={demobox} 
                      className={`w-max h-max cursor-pointer select-none`}
                      onClick={() => incrementVolumesVideoIndex()}
                      initial="initial" 
                      whileHover="hovered"
                      variants={{
                        hovered: { opacity: 1, x: "10%" }
                      }}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2
                      }}
                    >
                      {">"}
                    </motion.div>
                  </div>      */}
                </>           
              }            
            </>           
          }               
        </> 
      }     
      </div>                       
    </div> 
  )
}

export default CanvasFront;



<>
  <div style={demobox} className={`absolute flex justify-end inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12`}>      
    <div style={demobox} className={`w-7/12 my-12 flex items-center justify-center text-[24px]`}>
      {aboutText}        
    </div>      
  </div>
</> 
