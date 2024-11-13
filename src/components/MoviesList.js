import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-1 md:mx-4">
      <div>
        <h1 className="font-bold md:ml-2">{title}</h1>

        <div className="flex flex-nowrap overflow-x-scroll scrollbar-hidden">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster_path={movie.poster_path}
              movieId={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
