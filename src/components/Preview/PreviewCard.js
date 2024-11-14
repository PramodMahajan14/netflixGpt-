import React from "react";
import { IMG_CDN_URL } from "../../util/constant";

const PreviewCard = ({ poster_path }) => {
  return (
    <div
      className="h-auto w-auto sm:w-1/4 md:w-1/5  px-1  py-2 rounded-full "
      //   onClick={() => showMovieDetail(movieId)}
    >
      <img
        src={IMG_CDN_URL + poster_path}
        alt="Movie-Card"
        className="min-h-auto  min-w-28 rounded-full  sm:h-40 sm:w-28 sm:min-w-40 h-28  w-28  bg-gradient-to-b from-black cursor-pointer"
      />
    </div>
  );
};

export default PreviewCard;
