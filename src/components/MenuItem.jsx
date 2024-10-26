import { motion, transform } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";


const demobox = demomode ? styles.demo.landing : {};

const MenuItem = ({ titleEng, titleJap, xMovement, setHoveredItem, hoveredItem }) => {

  return (
    <motion.a 
      className={`cursor-pointer block overflow-hidden whitespace-nowrap relative text-yellow-300 
      text-[45px] z-20 font-shrikhand select-none`} 
      style={demobox}
      initial="initial"
      whileHover="hovered"
      onHoverStart={() => setHoveredItem(titleEng)}
      onHoverEnd={() => setHoveredItem("None")}
      onClick={() => console.log(hoveredItem)}
    >
      <motion.div
        className={``}
        style={demobox}
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
        className={`absolute inset-0 text-white text-glow font-bold`}
        style={demobox}
        variants={{
          initial: { opacity: 0, x: 0 },
          hovered: { opacity: 1, x: `${xMovement}%` },
        }}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2
        }}
      >
        {titleJap}
      </motion.div>      
    </motion.a>
  )
}

export default MenuItem;