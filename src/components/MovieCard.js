import React from "react";
import { IMG_CDN_URL } from "../util/constant";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="h-auto w-auto sm:w-1/4 md:w-1/3  px-2  py-2   ">
      <img
        src={IMG_CDN_URL + poster_path}
        alt="Movie-Card"
        className="min-h-auto  min-w-28   sm:h-40 sm:w-96 sm:min-w-72 h-auto  w-auto rounded-sm bg-gradient-to-b from-black"
      />
    </div>
  );
};

export default MovieCard;
