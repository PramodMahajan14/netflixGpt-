import React from "react";
import { IMG_CDN_URL } from "../../util/constant";
import { useDispatch } from "react-redux";
import { openModal, setSelectedMovieId } from "../../util/appSlice";

const SearchBrowseCard = ({ searchData }) => {
  const dispatch = useDispatch();
  const { poster_path, name, title, release_date, first_air_date, id } =
    searchData || null;
  const showMovieDetail = (movieId) => {
    dispatch(setSelectedMovieId(movieId));
    dispatch(openModal());
  };
  return (
    <div
      className="flex space-x-3 w-full h-[90px] my-2 bg-slate-500 p-2 cursor-pointer"
      onClick={() => showMovieDetail(id)}
    >
      <div className="h-full w-[80px] rounded-md ">
        <img
          src={IMG_CDN_URL + poster_path}
          alt=""
          className="h-full w-full rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between text-center h-full w-1/2 py-1 text-white col-span-5">
        <h1>{name || title}</h1>
        <h1>{first_air_date?.slice(0, 4) || release_date?.slice(0, 4)}</h1>
      </div>
      <div className="flex items-center justify-center h-full w-1/4 py-1 text-white col-span-5">
        {name ? (
          <h1 className="px-2 py-[2px] bg-blue-500 rounded-sm">Tv Show</h1>
        ) : (
          <h1 className="px-2 py-[2px] bg-fuchsia-500 rounded-sm">Movie</h1>
        )}
      </div>
    </div>
  );
};

export default SearchBrowseCard;
