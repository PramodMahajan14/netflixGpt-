import React from "react";
import MovieListSk from "./MovieListSk";

const HomeSk = () => {
  return (
    <div>
      <div className="w-auto  text-white relative -mt-28 z-10 ">
        <MovieListSk />
        <MovieListSk />
        <MovieListSk />
      </div>
    </div>
  );
};

export default HomeSk;
