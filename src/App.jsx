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
  const [state, setState] = useState(1);
  const [onLanding, setOnLanding] = useState(true);
  const [hannyaPos, setHannyaPos] = useState(0);
  const [nextState, setNextState] = useState(1);
  const [active, setActive] = useState("");


  return (
    <div className={`relative z-0 bg-primary`}>
      {onLanding && <Landing setOnLanding={setOnLanding} setState={setState} state={state} nextState={nextState} setNextState={setNextState}/>}
      {!onLanding && <Home />}
    </div>
  )
}

export default App
