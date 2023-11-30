import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListMovies = ({ movies }) => {
    return (
        <>
            {movies.map((movie) => (
                <Link to={`/discover/${movie.id}`} key={movie.id} className={"relative"}>
                    <div className={"h-80 text-center w-56 mx-8"}>
                        <div
                            className={"w-full h-full rounded-2xl bg-cover bg-center flex flex-col justify-end"}
                            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')` }}
                        >
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
        </>
    );
};

ListMovies.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default ListMovies