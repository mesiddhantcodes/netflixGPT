import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) {
    return null
  }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResult[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
