import React,{ useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LandingHome from "./components/Landing/LandingHome";
import Landing from "./components/Landing/Landing";
import Service from "./components/Service";
import Volumes from "./components/Volumes";
import Connect from "./components/Connect";
import Home from "./components/Home";

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === "#menu") {
      // scroll to section if hash is present
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    } else {
      // otherwise scroll to top
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/volumes" element={<Volumes />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
