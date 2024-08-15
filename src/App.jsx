import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Hero,
  Landing,
  About,
  Contact,
  Work,
} from './components';

const App = () => {
  const [onLanding, setOnLanding] = useState(true);
  const [hannyaPos, setHannyaPos] = useState(0);
  const [active, setActive] = useState("");

  if (onLanding) {
    return (
      <>
        <Landing setOnLanding={setOnLanding}/>
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
