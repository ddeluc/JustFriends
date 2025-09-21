import { motion, transform } from "framer-motion";

import { moveTitle } from "../utils/motion";
import { styles } from "../styles";
import { demomode } from "../constants";


const demobox = demomode ? styles.demo.title : {};

const Title = ({ titleEng, titleJap, submitFunction }) => {

  return (
    <motion.div 
      className={`text-white 
      cursor-pointer whitespace-nowrap overflow-hidden relative px-4 rounded-lg border-2 border-white`} 
      variants={{
        initial: { borderColor: "#ffffff" },
        hovered: { borderColor: "#dc2626" },
      }}
      onClick={submitFunction}
      initial="initial"
      whileHover="hovered"
    >
      <motion.div
        className={`text-[64px] font-anton`}
        variants={{
          initial: { opacity: 1, y: 0 },
          hovered: { opacity: 0 },
        }}
        transition={{
          duration: 0.1
        }}
      >
        {titleEng}
      </motion.div>
      <motion.div
        className={`text-[64px] absolute top-1/2 left-1/2 -mt-1 text-red-600 font-mochiy`}
        style={demobox}
        variants={{
          initial: { opacity:0, x: "-50%", y: "-100%" },
          hovered: { opacity: 1, x: "-50%", y: "-50%" },
        }}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2
        }}
      >
        {titleJap}
      </motion.div>      
    </motion.div>
  )
}

export default Title;