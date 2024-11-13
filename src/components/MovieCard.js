import React from "react";
import { IMG_CDN_URL } from "../util/constant";

import { useDispatch } from "react-redux";
import { openModal, setSelectedMovieId } from "../util/appSlice";

const MovieCard = ({ poster_path, movieId }) => {
  const dispatch = useDispatch();
  const showMovieDetail = (movieId) => {
    dispatch(setSelectedMovieId(movieId));
    dispatch(openModal());
  };

  return (
    <div
      className="h-auto w-auto sm:w-1/4 md:w-1/5  px-1  py-2 "
      onClick={() => showMovieDetail(movieId)}
    >
      <img
        src={IMG_CDN_URL + poster_path}
        alt="Movie-Card"
        className="min-h-auto  min-w-28   sm:h-40 sm:w-96 sm:min-w-72 h-auto  w-auto rounded-sm bg-gradient-to-b from-black cursor-pointer"
      />
    </div>
  );
};

export default MovieCard;
