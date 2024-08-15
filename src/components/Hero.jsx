import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { HannyaCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import Card from "./Card";

import { demomode } from "../constants";

const demobox = demomode ? styles.demo.hero : {};

const Hero = ({ hannyaPos, active }) => {

  return (
    <section className={`relative w-full h-screen mx-auto`} style={demobox}>      

      <Card active={active} />

      <HannyaCanvas hannyaPos={hannyaPos} />
              
    </section>
  );
};

export default Hero;