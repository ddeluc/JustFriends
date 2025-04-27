import { styles } from "../styles";
import { demomode } from "../constants";

import MenuBack from "./Menu/MenuBack";
import JoinBack from "./JoinBack";
import VolumesBack from "./VolumesBack";
import ContactBack from "./ContactBack";

const demobox = demomode ? styles.demo.back : {};

const CanvasBack = ({ hoveredItem, selectedItem, volumesVideoIndex, isMute }) => {

  return (
    <div style={demobox} className={`absolute flex inset-0 max-h-[700px] h-full max-w-5xl justify-center mx-auto gap-5`}>
      {selectedItem === "None" && <MenuBack hoveredItem={hoveredItem} />}
      {selectedItem === "About" && <AboutBack />}
      {selectedItem === "Join" && <JoinBack />}
      {selectedItem === "Volumes" && <VolumesBack selectedItem={selectedItem} isMute={isMute} volumesVideoIndex={volumesVideoIndex} />}
      {selectedItem === "Contact" && <ContactBack />}
    </div>
  )
}

export default CanvasBack;

