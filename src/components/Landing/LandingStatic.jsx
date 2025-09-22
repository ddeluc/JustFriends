import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "../../styles";
import { demomode } from "../../constants";

const whiteNoise = 'https://github.com/ddeluc/JustFriends/releases/download/v0.1.0-alpha/whiteNoise.mp4'

const demobox = demomode ? styles.demo.landing : {};

const LandingStatic = () => {

  const staticVideo = useRef();
  const navigate = useNavigate();

  return (
    <section 
      className={`relative flex flex-row w-full h-screen m-auto justify-center items-center p-2`}
      style={demobox}
    >
      <video
        ref={staticVideo}
        className={`object-cover w-full h-full rounded-lg brightness-60`}
        src={whiteNoise} onEnded={() => navigate('/home')} autoPlay muted
      />  
    </section>
  ); 
};

export default LandingStatic;