import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addMovieTvType } from "../util/moviesSlice";

const SortByTvshowOrMovie = ({ typesTvOrMovie }) => {
  const movieTvshowType = useSelector((store) => store.movies.language);

  const dispatch = useDispatch();

  return (
    <div className="flex items-center text-white text-xl px-2 md:px-5 sm:py-4 sm:justify-end">
      <div className=" space-y-2 mx-1 p-1 ">
        <select
          className="bg-transparent text-sm cursor-pointer border border-white px-1 md:px-3 py-1 bg-black  text-white overflow-y-scroll"
          onChange={(e) => {
            dispatch(addMovieTvType(e.target.value));
          }}
          value={movieTvshowType}
        >
          {typesTvOrMovie?.map((type) => (
            <option className="text-sm bg-black" value={type?.value}>
              {type?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortByTvshowOrMovie;
