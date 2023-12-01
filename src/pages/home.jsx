import {Suspense, useState} from "react";
import Header from "../layouts/header.jsx";
import Footer from "../layouts/footer.jsx";
import NowPlaying from "../components/now-playing.jsx";
import {Await, Link, useLoaderData,} from "react-router-dom";
import Loader from "./loader.jsx";
import ListMovies from "../components/list-movies.jsx";

const Home = () => {

    const {movies} = useLoaderData();
    const {nowMovies} = useLoaderData();


    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Header>
                    <Await resolve={nowMovies}>
                        {(nowMovies) => (

                            <NowPlaying nowMovies={nowMovies}/>
                        )}
                    </Await>
                </Header>
                <main className={"mx-3 mt-2 h-2/3"}>
                    <section className={"text-left text-white h-full"}>
                        <h2 className={"ml-4 my-6 text-2xl"}>Trending</h2>
                        <div className={"flex h-full overflow-x-scroll mt-2"}>
                            <Await resolve={movies}>
                                {(movies) => (
                                    <ListMovies movies={movies}/>
                                )}
                            </Await>
                        </div>
                    </section>
                </main>
                <Footer/>
            </Suspense>
        </>
    )
}
export default Home
