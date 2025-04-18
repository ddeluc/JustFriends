import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { HannyaCanvas } from "./components/canvas";

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
          {/* <HannyaCanvas /> */}
          <Home setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        </>
      }
    </div>
  )
}

export default App
