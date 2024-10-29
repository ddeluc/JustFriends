import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import akiraClip1 from '../assets/videos/Akira1.mp4';
import champlooClip1 from '../assets/videos/SamuraiChamploo1.mp4';
import oceanWaves1 from '../assets/videos/oceanWaves1.mp4';
import whiteNoise from '../assets/videos/WhiteNoise/whiteNoise.mp4'
import kuroko1 from '../assets/videos/Kuroko1.mp4';
import cowboy1 from '../assets/videos/Cowboy1.mp4';
import cityTrain from '../assets/videos/CityTrain.mp4';
import farine from '../assets/videos/farinefiveroses.mp4';

import { demomode } from "../constants";

const demobox = demomode ? styles.demo.landing : {};

const Join = () => {
  return (
    <>
      <video
        style={demobox}
        className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-40`}
        src={cityTrain} autoPlay muted loop
      />
      <div style={demobox} className={`absolute flex inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12`}>
        <div style={demobox} className={`w-2/3 my-12 flex items-center text-[24px] ml-6`}>
            {/* Add input for email */}
        </div>
      </div>
    </>
    
  );
};

export default Join;