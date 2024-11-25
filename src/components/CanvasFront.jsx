import { styles } from "../styles";
import { demomode } from "../constants";

import Join from "./Join";
import Volumes from "./Volumes";
import About from "./About";
import Menu from "./Menu";

const demobox = demomode ? styles.demo.front : {};

const CanvasFront = ({ setHoveredItem, hoveredItem, setSelectedItem, selectedItem, setVolumesVideoIndex, volumesVideoIndex, setIsMute, isMute }) => {

  return (
    <div style={demobox} className={`absolute max-h-172 flex items-center h-full w-full`}>      
      <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto my-8`}>
        {selectedItem === "None" && <Menu setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem} />}
        {selectedItem === "About" && <About setSelectedItem={setSelectedItem} />}
        {selectedItem === "Join" && <Join setSelectedItem={setSelectedItem} />}
        {selectedItem === "Volumes" && <Volumes setVolumesVideoIndex={setVolumesVideoIndex} setSelectedItem={setSelectedItem} setIsMute={setIsMute} isMute={isMute} volumesVideoIndex={volumesVideoIndex}/>}   
      </div>                       
    </div> 
  )
}

export default CanvasFront;
