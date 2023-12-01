import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListMovies = ({ movies }) => {
    const bgImage = (movie) => {
        return movie.backdrop_path ? movie.backdrop_path : movie.poster_path;
    }
    return (
        <>
            {movies.map((movie) => (
                <Link to={`/details/${movie.id}`} key={movie.id} className={"relative h-full"}>
                    <div className={"text-center w-56 mx-8 h-4/5"}>
                        <div
                            className={"w-full h-full rounded-2xl bg-cover bg-center flex flex-col justify-end"}
                            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${bgImage(movie)}')` }}
                        >
                            <div className={"glass  flex items-center justify-center  mx-3.5  h-20  mb-10  rounded-2xl p-2"}>
                                <h2 className={"overflow-hidden line-clamp-1"}>{movie.title}</h2>
                            </div>
                            <div className={"w-1/4 flex glass absolute top-2 right-16 p-2 rounded-2xl"}>
                                <div  className={"w-full fill-yellow-300 flex items-center justify-center"}>
                                    <svg  xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                        <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"/>
                                    </svg>
                                </div>
                                <div>
                                    <blockquote className={"scale-50"}>IMDb</blockquote>
                                    <span className={"text-sm"}>{movie.vote_average}</span>
                                </div>
                            </div></div>
                    </div>
                </Link>
            ))}
        </>
    );
};

ListMovies.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default ListMovies