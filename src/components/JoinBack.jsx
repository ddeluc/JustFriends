import React from "react";

import { styles } from "../styles";
import { demomode } from "../constants";

import promo from '../assets/volumes/promo1.mp4';

const demobox = demomode ? styles.demo.landing : {};

const JoinBack = ({}) => {

  return (
    <video
      style={demobox}
      className={`top-0 left-0 w-full h-full absolute object-none rounded-3xl brightness-50`}
      src={promo} autoPlay muted loop
    />
  );
};

export default JoinBack;