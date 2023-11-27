import { useState } from 'react'

import './App.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import Error404 from "./errors/404.jsx";
import Home from "./pages/home.jsx";
import Discover from "./pages/discover.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <>
          <Outlet/>
        </>
    ),
    errorElement:<Error404/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'discover',
        element: <Discover/>
      }
    ]
  }
])
function App() {


  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
