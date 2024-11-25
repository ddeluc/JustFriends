import { styles } from "../styles";
import { demomode } from "../constants";

import MenuBack from "./MenuBack";
import AboutBack from "./AboutBack";
import JoinBack from "./JoinBack";
import VolumesBack from "./VolumesBack";

const demobox = demomode ? styles.demo.landing : {};

const CanvasBack = ({ hoveredItem, selectedItem, volumesVideoIndex, isMute }) => {

  return (
    <div style={demobox} className={`absolute flex inset-0 max-h-172 max-w-5xl justify-center mx-auto gap-5 my-8`}>
      {selectedItem === "None" && <MenuBack hoveredItem={hoveredItem} />}
      {selectedItem === "About" && <AboutBack />}
      {selectedItem === "Join" && <JoinBack />}
      {selectedItem === "Volumes" && <VolumesBack selectedItem={selectedItem} isMute={isMute} volumesVideoIndex={volumesVideoIndex} />}
    </div>
  )
}

export default CanvasBack;

