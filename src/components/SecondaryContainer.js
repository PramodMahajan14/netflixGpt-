import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import "./common.css";
import { langauges } from "../util/LagaugeConstants";

import PreviewList from "./Preview/PreviewList";
import HomeSk from "./Skeleton/HomeSk";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  const popular = useSelector((store) => store.movies);
  const appLang = useSelector((store) => store.app.lang);

  if (!movie || movie.length === 0) return <HomeSk />;
  return (
    <div className="w-auto  text-white relative -mt-28 z-10 ">
      <PreviewList />
      <MoviesList
        title={langauges[appLang].nowplayingmovies}
        movies={movie.nowPlayingMovies}
      />
      <MoviesList
        title={langauges[appLang].toppopular}
        movies={popular?.popularMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
