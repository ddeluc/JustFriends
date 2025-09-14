import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import './index.css'
import Volumes from './components/Volumes';
import Service from './components/Service';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/service", element: <Service />},
  {path: "/volumes", element: <Volumes />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
