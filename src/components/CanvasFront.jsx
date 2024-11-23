import { motion, transform } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import MenuItem from "./MenuItem";
import Join from "./Join";

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

const CanvasFront = ({ setHoveredItem, hoveredItem, setSelectedItem, selectedItem, setVolumesVideoIndex, volumesVideoIndex }) => {

  const incrementVolumesVideoIndex = () => {
    let nextIndex = Math.abs(volumesVideoIndex + 1) % 2;
    setVolumesVideoIndex(nextIndex);
    console.log(volumesVideoIndex);
  };

  const decrementVolumesVideoIndex = () => {
    let nextIndex = Math.abs(volumesVideoIndex - 1) % 2;
    setVolumesVideoIndex(nextIndex);
    console.log(volumesVideoIndex);
  }

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
              {/* <div style={demobox} className={`w-7/12 my-12 p-6 translate-x-20 flex flex-col gap-5 text-[24px] ml-12`}>
                <div style={demobox} className={`text-[45px] font-shrikhand mb-6`}>
                  Subscribe to our Newsletter.
                  <div style={demobox} className={`font-poppins text-[24px]`}>
                    Join the family and stay updated.
                  </div>
                </div>
                <input 
                  style={demobox} 
                  type="text" 
                  placeholder="Email" 
                  className={`w-full bg-white focus:outline-none text-slate-900 px-2.5 py-1.5 rounded-md text-[20px] font-shrikhand tracking-wider`} 
                />
                <div style={demobox} className={`flex justify-end font-shrikhand`}>
                  <motion.div 
                    style={demobox} 
                    className={`w-max cursor-pointer select-none`} 
                    initial="initial" 
                    whileHover="hovered"
                    onClick={() => setSelectedItem("None")}
                    variants={{
                      hovered: { opacity: 1, x: "10%" }
                    }}
                    transition={{
                      type: 'spring',
                      bounce: 0,
                      duration: 0.2
                    }}
                  >
                    SUBMIT
                  </motion.div>
                </div>
              </div> */}
            </div>
          :
            <>
              {selectedItem == "About" ? 
                <div style={demobox} className={`absolute flex justify-end inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12 font-poppins`}>  
                  <div style={demobox} className={`w-7/12 flex flex-col text-[24px] justify-evenly items-end mr-6`}>
                    <div style={demobox} className={`text-[24px] cursor-default select-none`}>                    
                      {aboutText}                           
                    </div>
                    <motion.div 
                      style={demobox} 
                      className={`text-[30px] w-max mr-12 font-shrikhand cursor-pointer select-none`} 
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
                  </div>              
                </div>
              : 
                <>
                <div style={demobox} className={`absolute w-full flex justify-center space-x-12 text-[30px] font-shrikhand`}>
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
                </div>     
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
