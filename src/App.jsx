import './App.css'
import {createBrowserRouter, defer, RouterProvider} from "react-router-dom";

import Error404 from "./errors/404.jsx";
import Home from "./pages/home.jsx";
import Details from "./pages/details.jsx";
import Layout from "./layouts/layout.jsx";

import {options} from "./api/get-options.js";


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Layout/>
            </>
        ),
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: () => {
                    const nowMovies =  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
                        .then(res =>res.json())
                        .then(res=>res.results);
                    const movies = fetch('https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US&page=1', options)
                        .then(res => res.json())
                        .then(res => res.results);
                    return ({
                        movies,
                        nowMovies
                    })
                }
            },
            {
                path: 'discover/:id',
                element: <Details/>
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
