import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[6];
  const { original_title, overview, backdrop_path, id } = mainMovie;

  return (
    <div className="min:w-screen h-screen  relative bg-gradient-to-b from-black">
      <VideoBackground
        movieId={id}
        backdrop_path={backdrop_path}
        className="bg-gradient-to-b from-black "
      />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
