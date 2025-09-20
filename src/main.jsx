import React,{ useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import App from './App'
import './index.css'
import Volumes from './components/Volumes';
import Service from './components/Service';
import Home from './components/Home';
import Connect from './components/Connect';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/service", element: <Service />},
  {path: "/volumes", element: <Volumes />},
  {path: "/connect", element: <Connect />},
  {path: "/home", element: <Home />}
]);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
