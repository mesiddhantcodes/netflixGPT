import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContanier = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //this is also known as early return

  const mainMovies = movies[0];
  const { original_title, overview,id } = mainMovies;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround  movieId={id}/>
    </div>
  );
};

export default MainContanier;