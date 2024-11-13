import React from "react";
import { IMG_CDN_URL } from "../util/constant";
import { ReactComponent as PlayIcon } from "../Assets/playl.svg";
import useIsSmallScreen from "../Hooks/useIsSmallScreen";
import { useDispatch } from "react-redux";
import { openModal, setSelectedMovieId } from "../util/appSlice";

const Searchcard = ({
  backdrop_path,
  poster_path,
  original_title,
  movieId,
}) => {
  const dispatch = useDispatch();
  const showMovieDetail = (movieId) => {
    dispatch(setSelectedMovieId(movieId));
    dispatch(openModal());
  };

  const isSmallScreen = useIsSmallScreen();
  const imageUrl = `${IMG_CDN_URL}${
    isSmallScreen ? backdrop_path : poster_path
  }`;

  return (
    <div
      className="w-screen min-h-16 max-h-auto flex items-center bg-gray-500 justify-between pr-1 my-1 sm:w-44 md:w-40  sm:p-0 sm:m-2 sm:h-60 "
      onClick={() => showMovieDetail(movieId)}
    >
      <div className="w-auto min-h-16 max-h-auto flex items-center text-white sm:w-full sm:h-full">
        <img
          src={imageUrl}
          alt="image"
          className="min-h-16 h-full w-1/3 sm:w-full"
        />{" "}
        <span className=" ml-3 sm:hidden ">{original_title}</span>
      </div>
      <i className="list-none text-white sm:hidden">
        <PlayIcon />
      </i>
    </div>
  );
};

export default Searchcard;
