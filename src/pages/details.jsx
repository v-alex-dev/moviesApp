import {useEffect, useState} from "react";
import {options} from "../api/get-options.js";
import {Link, useParams} from "react-router-dom";


import BtnPlay from "../components/btn-play.jsx";
import Badge from "../components/badge.jsx";
import DetailsHeader from "../components/details-header.jsx";
import DetailsTitle from "../components/details-title.jsx";

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

    }, []);


    console.log(movie)

    const date = new Date(movie.release_date)


    const optionsDate = {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    };

    const dateRelease = date.toLocaleDateString("en-US", optionsDate)
    const genres = movie.genres

    console.log(genres)

    return (
        <>
            <main>
                <DetailsHeader movie={movie}/>
                <DetailsTitle movie={movie}/>
                <section id={"information"} className={"text-gray border-b border-gray-light mx-10 flex justify-between"}>
                    <div>
                        <h2 className={"text-2xl text-white"}>Release date</h2>
                        <p>{dateRelease}</p>
                    </div>
                    {genres && genres.length > 0 && (
                    <div id={"genre"}>
                        <h3 className={"text-2xl text-white"}>Genre</h3>
                        <div className={"flex justify-around overflow-scroll w-2/3"}>
                            {genres.map((genre) => (
                                <Badge content={genre.name} isRoundedFull={true} key={genre.id}/>
                            ))}
                        </div>
                    </div>
                    )}
                </section>
            </main>
        </>
    )
}
export default Details;
