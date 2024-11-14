import React from "react";
import MovieCardSk from "./MovieCardSk";

const MovieListSk = () => {
  return (
    <div className="px-1 md:mx-4 animate-pulse">
      <div>
        <div className="h-2.5 bg-gray-200 rounded-md dark:bg-gray-700 w-48 my-2 ml-1 md:ml2"></div>

        <div className="flex flex-nowrap overflow-x-scroll scrollbar-hidden">
          {Array(9)
            .fill()
            .map((_, index) => (
              <MovieCardSk key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListSk;
