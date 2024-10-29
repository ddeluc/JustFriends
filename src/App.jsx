import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Hero,
  Landing,
  About,
  Contact,
  Work,
  Home,
} from './components';

const App = () => {
  const [onLanding, setOnLanding] = useState(true);
  const [state, setState] = useState(1);
  const [hannyaPos, setHannyaPos] = useState(0);
  const [nextState, setNextState] = useState(1);
  const [active, setActive] = useState("");

  if (onLanding) {
    return (
      <>
        <Landing setOnLanding={setOnLanding} setState={setState} state={state} nextState={nextState} setNextState={setNextState}/>     
        {/* <Home /> */}
      </>
    )
  } else {
    return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <Navbar setHannyaPos={setHannyaPos} hannyaPos={hannyaPos} setActive={setActive} />
          <Hero hannyaPos={hannyaPos} active={active} />
        </div>
      </BrowserRouter>
    )
  } 
}

export default App
