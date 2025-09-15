import React, { useState, useEffect } from "react";
import { HannyaCanvas } from "./components/canvas";
import Service from "./components/Service";

import {
  Landing,
  Navbar,
  Home,
} from './components';

const App = () => {
  const [state, setState] = useState(1);
  const [onLanding, setOnLanding] = useState(true);
  const [nextState, setNextState] = useState(1);
  const [selectedItem, setSelectedItem] = useState("None");

  return (
    <div className={`relative z-0 bg-primary`}>
      {onLanding && <Landing setOnLanding={setOnLanding} setState={setState} state={state} nextState={nextState} setNextState={setNextState}/>}
      {!onLanding && 
        <>
          {/* <Navbar setSelectedItem={setSelectedItem} selectedItem={selectedItem} /> */}
          {/* <HannyaCanvas hScale={16} hpx={0} hpy={-0.25} hpz={0} /> */}
          <Home setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        </>
      }
    </div>
  )
}

export default App
