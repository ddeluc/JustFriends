import { motion, transform } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import MenuItem from "./MenuItem";

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

const CanvasFront = ({ setHoveredItem, hoveredItem, setSelectedItem, selectedItem }) => {

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
              <div style={demobox} className={`w-7/12 my-12 p-6 translate-x-20 flex flex-col gap-5 text-[24px] ml-12`}>
                <div style={demobox} className={`text-[45px] font-shrikhand`}>
                  Subscribe to our Newsletter.
                </div>
                {/* <div style={demobox} className={`font-poppins`}>
                  Subscribe to our newletter and stay updated.
                </div> */}
                <input style={demobox} className={`w-full`} />
                <div style={demobox} className={`flex justify-end font-shrikhand`}>
                  <button style={demobox} className={`p-3`}>
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          :
            <>
              {selectedItem == "About" ? 
                <div style={demobox} className={`absolute flex justify-end inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12 font-poppins`}>      
                  <div style={demobox} className={`w-7/12 my-12 flex items-center justify-center text-[24px] mr-6`}>
                    {aboutText}        
                  </div>      
                </div>
              :
                <>
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
