import {useEffect, useState} from "react";
import {options} from "../api/get-options.js";

const NowPlaying = () => {
    const [movie, setMovie] = useState({});
    const [movieIndex, setMovieIndex] = useState(0);
    const getRandomIndex = () => {
        return Math.floor(Math.random() * 20);
    };
    useEffect(() => {
        setMovieIndex(getRandomIndex());
    }, []);
    console.log(movie)

    useEffect(() => {


        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setMovie(response.results[movieIndex]))
            .catch(err => console.error(err));
    }, [movieIndex]);


    return (
        <>
            <div className={"text-white bg-cover bg-center rounded-2xl h-44 relative flex items-end"} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`}}>
                <div className={"glass flex w-2/3 h-1/4 rounded-full items-center px-4 mb-4 ml-2  justify-between"} >
                    <div className={"ml-2 indent-1"}><img src="../../public/play.svg" alt=""/></div>
                    <div className={' flex flex-col mr-2'}>
                        <blockquote className={"text-gray"}>Movie Spotlight</blockquote>
                        <h2>{movie.original_title}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NowPlaying;