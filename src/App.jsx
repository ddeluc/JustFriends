import React, { useState, useEffect } from "react";
import { HannyaCanvas } from "./components/canvas";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";

import LandingHome from "./components/Landing/LandingHome";
import Service from "./components/Service";
import Volumes from "./components/Volumes";
import Connect from "./components/Connect";
import Home from "./components/Home";

const router = createBrowserRouter([
  {path: "/", element: <LandingHome />},
  {path: "/service", element: <Service />},
  {path: "/volumes", element: <Volumes />},
  {path: "/connect", element: <Connect />},
  {path: "/home", element: <Home />}
]);

const App = () => {

  return (
    <div className={`relative z-0 bg-primary`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
