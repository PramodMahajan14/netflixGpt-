import React from "react";
import MovieCardSk from "./MovieCardSk";

const MovieListSk = () => {
  return (
    <div className="px-1 md:mx-4 animate-pulse">
      <div>
        <div class="h-2.5 bg-gray-200 rounded-md dark:bg-gray-700 w-48 my-2 ml-1 md:ml2"></div>

        <div className="flex flex-nowrap overflow-x-scroll scrollbar-hidden">
          {Array(9)
            .fill()
            .map((_, inedx) => (
              <MovieCardSk />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListSk;
