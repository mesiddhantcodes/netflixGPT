import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return <Loader />;
  // console.log("secondary ",movies)
  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 2xl:-mt-96 xl:-mt-[15%] lg:-mt-[18%] md:-mt-36 pl-4  md:pl-16 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />

          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
