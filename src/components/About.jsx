import { useEffect } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { demomode } from "../constants";
import { aboutText } from "../constants";

const demobox = demomode ? styles.demo.landing : {};

const About = ({ hoveredItem, selectedItem }) => {
  useEffect(() => {
    console.log(hoveredItem);
    console.log(selectedItem);
    console.log("rendered about")
  }, []);

  return (
    <div style={demobox} className={`absolute flex justify-end inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12`}>
      <div style={demobox} className={`w-7/12 my-12 flex items-center justify-center text-[24px]`}>
        {aboutText}        
      </div>      
    </div>
  );
};

export default About;