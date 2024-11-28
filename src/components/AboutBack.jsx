import React from "react";

import { styles } from "../styles";
import { demomode } from "../constants";

import vol4 from '../assets/volumes/vol4short.mp4';

const demobox = demomode ? styles.demo.back : {};

const AboutBack = ({}) => {

  return (
    <video
      style={demobox}
      className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
      src={vol4} autoPlay muted loop
    />
  );
};

export default AboutBack;