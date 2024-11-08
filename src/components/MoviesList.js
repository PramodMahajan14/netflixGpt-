import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-1 ">
      <div>
        <h1 className="font-bold md:ml-2">{title}</h1>

        <div className="flex flex-nowrap overflow-x-scroll scrollbar-hidden">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
