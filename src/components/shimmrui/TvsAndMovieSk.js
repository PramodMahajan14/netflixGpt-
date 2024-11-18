import React from "react";

import TVAndMovieCard from "./TVAndMovieCard";

const TvsAndMovieSk = () => {
  return (
    <div className="w-screen text-center mx-0   text-3xl mt-5  animate-pulse">
      <div className="w-full flex sm:justify-end sm:px-8 ">
        <div className="h-8 ms-2 bg-gray-400 flex  dark:bg-gray-600 w-28 sm:w-36 "></div>
      </div>
      <div className="flex flex-wrap justify-center md:items-center min-h-screen pb-10">
        {Array(12)
          .fill()
          .map((_, index) => (
            <TVAndMovieCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default TvsAndMovieSk;
