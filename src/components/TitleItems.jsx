import { motion, transform } from "framer-motion";

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


const demobox = demomode ? styles.demo.landing : {};

const TitleItems = ({ hoveredItem }) => {

  const handleVideoEnd = () => {    
    setCurrentVideoIndex((currentVideoIndex + 1)%videoSources.length);    
  };

  return (
    <div style={demobox} className={`absolute inset-0 max-h-172 max-w-5xl mx-auto grid grid-cols-3 gap-5 my-8`}>
      <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
        {hoveredItem == "About" ?
          <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
            src={akiraClip1} onEnded={handleVideoEnd} autoPlay muted loop
          />
          : <></>
        }               
      </div >
      <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
        {hoveredItem == "Volumes" ?
            <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
            src={oceanWaves1} onEnded={handleVideoEnd} autoPlay muted loop
          />
          : <></>
        }      
      </div>
      <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand`}>
        {hoveredItem == "Join" ?
            <video
            style={demobox}
            className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
            src={cityTrain} onEnded={handleVideoEnd} autoPlay muted loop
          />
          : <></>
        }
      </div>                       
    </div>
  )
}

export default TitleItems;