

import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Error404 from "./errors/404.jsx";
import Home from "./pages/home.jsx";
import Discover from "./pages/discover.jsx";
import Layout from "./layouts/layout.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <>
          <Layout/>
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
      <RouterProvider router={router}/>
    </>
  )
}

export default App
