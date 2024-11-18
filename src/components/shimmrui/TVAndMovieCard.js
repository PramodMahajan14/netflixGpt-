import React from "react";

const TVAndMovieCard = () => {
  return (
    <div className="h-48 w-28 md:h-72 md:w-56 flex flex-col justify-center p-1 my-2 text-start text-white shadow-md animate-pulse">
      <div class="flex items-center justify-center  bg-gray-300   dark:bg-gray-700 min-h-36 h-72      w-auto rounded-sm cursor-pointer  md:mx-1">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="h-2 ms-2 bg-gray-400  dark:bg-gray-600 w-24 hidden md:block my-1"></div>
      <div className="hidden sm:justify-between px-1">
        <div className="h-2 ms-2 bg-gray-400  dark:bg-gray-600 w-24"></div>
        <div className="h-2 ms-2 bg-gray-400  dark:bg-gray-600 w-24"></div>
      </div>
    </div>
  );
};

export default TVAndMovieCard;
