import React from "react";
import { useSelector } from "react-redux";
import PromotedMovie from "../PromotedMovie";
import TvCard from "./TvCard";
import useMovies from "../../Hooks/useMovies";
import TVAndMovieCard from "../shimmrui/TVAndMovieCard";

const MovieList = () => {
  const pageLoader = useSelector((store) => store.app.loader);
  const movies = useSelector((store) => store.movies.tvShows.movieList);
  useMovies();
  const PromotedMovies = PromotedMovie(TvCard);

  if (!movies) {
    return (
      <div className="flex flex-wrap justify-center md:items-center min-h-screen pb-10">
        {Array(12)
          .fill()
          .map((_, index) => (
            <TVAndMovieCard key={index} />
          ))}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center md:items-center min-h-screen  pb-10">
      <div
        className="grid grid-cols-3 
       gap-1 md:gap-8 sm:grid-cols-3 lg:grid-cols-6 min-h-fit sm:my-5 "
      >
        {movies?.map((tv) =>
          tv.vote_average >= 7 && tv.vote_count >= 9000 ? (
            <PromotedMovies key={tv.id} tvData={tv} />
          ) : (
            <TvCard key={tv.id} tvData={tv} />
          )
        )}
      </div>
      {pageLoader && <h1 className="text-xl  text-white">Loading...</h1>}
    </div>
  );
};

export default MovieList;
