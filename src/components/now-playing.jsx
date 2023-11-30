
import BtnPlay from "./btn-play.jsx";
import PropTypes from "prop-types";


const NowPlaying = ({nowMovies}) => {

    const getRandomIndex = () => {
        return Math.floor(Math.random() * 20);
    };

    const movieIndex = getRandomIndex();

    const movie = nowMovies[movieIndex]


    return (
        <>
            <div className={"text-white text-center bg-cover bg-center rounded-2xl h-52 relative flex items-end"} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`}}>
                <div className={"glass flex w-2/3 h-1/4 rounded-full items-center px-4 mb-4 ml-2 justify-between"} >
                    <div className={"ml-0.5 min-w-1/5 "}>
                        <BtnPlay linkSvg={"w-9 rounded-full bg-Red p-3"} link={"#"} isGradiant={true} linkClass={""}/>
                    </div>
                    <div className={' flex flex-col mr-0.5 '}>
                        <blockquote className={"text-gray text-xs "}>Movie Spotlight</blockquote>
                        <h2 className={"text-xs overflow-hidden line-clamp-1 max-w-2/3"}>{movie.original_title}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

NowPlaying.Proptype = {
    nowMovies: PropTypes.object.isRequired
}
export default NowPlaying;