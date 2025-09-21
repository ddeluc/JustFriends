import React, { useState } from "react";

import LandingHome from "./LandingHome";
import LandingStatic from "./LandingStatic";

const Landing = ({ }) => {
  const [state, setState] = useState(1);

  return (
    <div className={`bg-black`}>
      {state == 1 && <LandingHome setState={setState} />}
      {state == 0 && <LandingStatic />}
    </div>    
  );    
};

export default Landing;