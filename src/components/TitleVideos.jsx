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


const demobox = demomode ? styles.demo.landing : {};

const TitleVideos = ({ setHoveredItem, hoveredItem, setSelectedItem }) => {

  return (
    <div style={demobox} className={`absolute max-h-172 flex items-center h-full w-full`}>
      <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto grid grid-cols-3 gap-5 my-8 pt-4`}>
        <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
          <MenuItem titleEng={"About"} titleJap={"話"} xMovement={35} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
        </div >
        <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
          <MenuItem titleEng={"Volumes"} titleJap={"章"} xMovement={35} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
        </div>
        <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
          <MenuItem titleEng={"Join"} titleJap={"音楽"} xMovement={30} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
        </div>            
      </div>                  
    </div> 
  )
}

export default TitleVideos;