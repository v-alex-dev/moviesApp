import {useEffect, useState} from "react";
import {options} from "../api/get-options.js";
import {Link, useParams} from "react-router-dom";
import BtnPlay from "../components/btn-play.jsx";

const Details = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieData();

    }, [id]);

    console.log(movie)
    return (

        <header className={"h-96 w-full bg-cover bg-center flex justify-center items-center relative"}
                style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`}}>
            <BtnPlay link={"/"} isGradiant={false} linkClass={"glass rounded-full p-5 w-16"} linkSvg={"text-Red"}/>
            <Link to={"/"}>
                <svg className={"w-8 absolute left-2 top-12"} xmlns="http://www.w3.org/2000/svg" id="Bold"
                     viewBox="0 0 24 24" fill="white">
                    <path
                        d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z"/>
                </svg>
            </Link>
        </header>

    )
}

export default Details;