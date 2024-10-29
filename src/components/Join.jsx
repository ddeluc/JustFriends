import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { demomode } from "../constants";

const demobox = demomode ? styles.demo.landing : {};

const Join = () => {
  return (
    <div style={demobox} className={`absolute flex inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12`}>
      <div style={demobox} className={`w-2/3 my-12 flex items-center text-[24px] ml-6`}>
        {/* Add input for email */}
      </div>
    </div>
  );
};

export default Join;