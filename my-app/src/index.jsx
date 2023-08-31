import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Vans, {loader as vansLoader}  from "./Pages/Van/Vans";
import Error from "./Error";
import VanDetail, {loader as vansDetailLoader} from "./Pages/Van/VanDetail";
import Layout from "./Component/Layout";
import Income from "./Pages/Host/Income";
import HostVans, {loader as hostVansLoader} from "./Pages/Host/HostVans";
import HostVanDetail, {loader as hostVanDetailLoader} from "./Pages/Host/HostVanDetail";
import Review from "./Pages/Host/Review";
import Login, {loader as logginLoader, action as loginAction } from './Login';
import Dashboard, { loader as dashboardLoader } from './Pages/Host/Dashboard';
import HostLayout from './Component/HostLayout';
import HostVanInfo from './Pages/Host/HostVanInfo';
import HostVanPricing from './Pages/Host/HostVanPricing';
import HostVanPhoto from './Pages/Host/HostVanPhoto';
import NotFound from './Pages/NotFound';
import "./server";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { requireAuth } from './utils';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
  <Route index element={<Home />}/>
  <Route path="about" element={<About />} />
  <Route
      path="login"
      element={<Login />}
      loader={logginLoader}
      action={loginAction}
    />
  <Route
    path="vans"
    element={<Vans />}
    errorElement={<Error />}
    loader={vansLoader}
    
  />
  <Route 
    path="vans/:id"
    element={<VanDetail />}
    errorElement={<Error />}
    loader={vansDetailLoader}  
  />

  <Route path="host" element={<HostLayout />}>
    <Route 
        index 
        element={<Dashboard />}
        loader={dashboardLoader}
     />
    <Route 
      path="income" 
      element={<Income />} 
      loader={async ({ request }) => await requireAuth(request)}
    />
    <Route 
      path="review" 
      element={<Review />} 
      loader={async ({ request }) => await requireAuth(request)}
    />
    <Route 
      path="vans"
      element={<HostVans />}
      errorElement={<Error />} 
      loader={hostVansLoader}
    />
    <Route 
        path="vans/:id" 
        element={<HostVanDetail />}
        errorElement={<Error />}
        loader={hostVanDetailLoader}
      >
       <Route 
          index 
          element={<HostVanInfo />} 
          loader={async ({ request }) => await requireAuth(request)}
        />
       <Route 
          path="photo" 
          element={<HostVanPhoto />} 
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route 
          path="pricing" 
          element={<HostVanPricing />} 
          loader={async ({ request }) => await requireAuth(request)}
        />
    </Route>  
  </Route>
  <Route path="*" element={<NotFound />} />
  </Route>)
  )

export default function App() {
  return (
    <RouterProvider router={router} />
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
