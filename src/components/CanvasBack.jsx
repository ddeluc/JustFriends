import { styles } from "../styles";
import { demomode } from "../constants";

import MenuBack from "./MenuBack";
import AboutBack from "./AboutBack";
import JoinBack from "./JoinBack";
import VolumesBack from "./VolumesBack";
import ContactBack from "./ContactBack";

const demobox = demomode ? styles.demo.back : {};

const CanvasBack = ({ hoveredItem, selectedItem, volumesVideoIndex, isMute }) => {

  return (
    <div style={demobox} className={`absolute flex inset-0 max-h-172 max-w-5xl justify-center mx-auto gap-5 my-6`}>
      {selectedItem === "None" && <MenuBack hoveredItem={hoveredItem} />}
      {selectedItem === "About" && <AboutBack />}
      {selectedItem === "Join" && <JoinBack />}
      {selectedItem === "Volumes" && <VolumesBack selectedItem={selectedItem} isMute={isMute} volumesVideoIndex={volumesVideoIndex} />}
      {selectedItem === "Contact" && <ContactBack />}
    </div>
  )
}

export default CanvasBack;

