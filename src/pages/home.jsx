import {useEffect, useState} from "react";
import {options} from "../api/get-options.js";
import Header from "../layouts/header.jsx";
import Footer from "../layouts/footer.jsx";
import NowPlaying from "../components/now-playing.jsx";
import {Link} from "react-router-dom";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));
    }, []);


    return (
        <>
            <Header><NowPlaying/></Header>
            <main className={"mx-3 max-h"}>
                <section className={"text-left text-white mt-12"}>
                    <h2 className={"ml-4 text-2xl"}>Trending</h2>
                    <div className={"flex snap-proximity  overflow-x-scroll"} >
                        {movies.map(movie => (
                            <Link to={`/discover/${movie.id}`} key={movie.id} className={"relative"}>
                                <div className={"h-80 text-center w-56  mx-8"}>
                                    <div className={"w-full h-full rounded-2xl bg-cover bg-center flex flex-col justify-end"}
                                         style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`}}>
                                        <div className={"glass mx-8 w-1/2 rounded-2xl"}>
                                            <h2>{movie.title}</h2>
                                        </div>
                                        <div className={"w-1/4 glass absolute top-2 right-16 p-2 rounded-2xl"}>
                                            <blockquote className={"scale-50"}>IMDb</blockquote>
                                            <span className={"text-sm"}>{movie.vote_average}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </section>

            </main>
            <Footer/>
        </>
    )
}
export default Home