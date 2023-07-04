import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Vans from "./Pages/Van/Vans";
import VanDetail from "./Pages/Van/VanDetail";
import Layout from "./Component/Layout";
import Income from "./Pages/Host/Income";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetail from "./Pages/Host/HostVanDetail";
import Review from "./Pages/Host/Review";
import Dashboard from './Pages/Host/Dashboard';
import HostLayout from './Component/HostLayout';
import HostVanInfo from './Pages/Host/HostVanInfo';
import HostVanPricing from './Pages/Host/HostVanPricing';
import HostVanPhoto from './Pages/Host/HostVanPhoto';
import "./server";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="review" element={<Review />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="photo" element={<HostVanPhoto />} />
              <Route path="pricing" element={<HostVanPricing />} />
            </Route>  
          </Route>
        </Route>
      </Routes>
  </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// {/* <App /> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
