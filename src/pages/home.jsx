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
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    }, []);
    return (
        <>
            <Header><NowPlaying/></Header>
            <main>
                {movies.map(movie => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                    </div>
                ))}
            </main>
            <Footer/>
        </>
    )
}
export default Home