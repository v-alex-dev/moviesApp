import {useEffect, useState} from "react";
import {options} from "../api/get-options.js";
import Header from "../layouts/header.jsx";
import Footer from "../layouts/footer.jsx";
import NowPlaying from "../components/now-playing.jsx";
const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {

        fetch('https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));
    }, []);


    console.log(movies)
    return (
        <>
            <Header><NowPlaying/></Header>
            <main>
                <section className={"text-left text-white "}>
                    <h2>trending</h2>
                    <div className={"flex snap-align-none overflow-x-scroll"}>
                        {movies.map(movie => (
                            <div className={"h-56 text-center mx-8"} key={movie.id}>
                                <div className={"w-full h-full bg-cover bg-center flex flex-col justify-end"} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`}}>
                                    <div className={"glass mx-8 rounded-2xl"}>
                                        <h2>{movie.title}</h2>
                                    </div>
                                    <div>
                                        <span className={""}>{movie.vote_average}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>

            </main>
            <Footer/>
        </>
    )
}
export default Home