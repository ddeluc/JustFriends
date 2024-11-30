import React, { useState } from "react";

import LandingHome from "./LandingHome";
import LandingStatic from "./LandingStatic";

const Landing = ({ setOnLanding, state, setState, setNextState }) => {

  return (
    <>
      {state == 1 && <LandingHome setState={setState} setNextState={setNextState} />}
      {state == 0 && <LandingStatic setOnLanding={setOnLanding} setState={setState} setNextState={setNextState} />}
    </>    
  );    
};

export default Landing;