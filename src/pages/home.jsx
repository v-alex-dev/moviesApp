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
                <main className={"mx-3 max-h"}>
                    <section className={"text-left text-white mt-12"}>
                        <h2 className={"ml-4 text-2xl"}>Trending</h2>
                        <div className={"flex snap-proximity  overflow-x-scroll"}>
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
