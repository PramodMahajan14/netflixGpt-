import React from "react";
import MovieCard from "./MovieCard";
import PromotedMovie from "./PromotedMovie";

const MoviesList = ({ title, movies }) => {
  const NetFlixPromoted = PromotedMovie(MovieCard);
  return (
    <div className="px-1 md:mx-4">
      <div>
        <h1 className="font-bold md:ml-2">{title}</h1>

        <div className="flex flex-nowrap overflow-x-scroll scrollbar-hidden no-scrollbar scroll-smooth">
          {movies?.map((movie) =>
            movie?.vote_average >= 7 ? (
              <NetFlixPromoted key={movie.id} MovieData={movie} />
            ) : (
              <MovieCard key={movie.id} MovieData={movie} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
