import BtnPlay from "./btn-play.jsx";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import ListMovies from "./list-movies.jsx";
import DetailsTitle from "./details-title.jsx";

const DetailsHeader = ({movie}) => {
    const bgImage = () => {

        return movie.backdrop_path ? movie.backdrop_path : movie.poster_path;
    }

    return(
        <section id={"header"} className={"h-96 w-full bg-cover bg-center flex justify-center items-center relative"}
                 style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500/${bgImage()}')`}}>
            <BtnPlay link={movie.homepage} isGradiant={false} linkClass={"glass rounded-full p-5 w-16"} linkSvg={"text-Red"}/>
            <Link to={"/"}>
                <svg className={"w-8 absolute left-2 top-12"} xmlns="http://www.w3.org/2000/svg" id="Bold"
                     viewBox="0 0 24 24" fill="white">
                    <path
                        d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z"/>
                </svg>
            </Link>
        </section>
    )
}

DetailsHeader.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default  DetailsHeader