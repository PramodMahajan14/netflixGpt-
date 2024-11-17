import React from "react";
import { IMG_CDN_URL } from "../../util/constant";

const TvCard = ({ tvData }) => {
  const { original_name, poster_path, vote_average, first_air_date } = tvData;
  return (
    <div className="h-36 w-auto md:h-52 md:w-48 flex flex-col justify-center p-1 my-16 text-start text-white shadow-md">
      <img
        src={IMG_CDN_URL + poster_path}
        alt="image"
        className="min-h-auto   w-full   h-auto  w-auto rounded-sm cursor-pointer"
      />
      <li className="list-none text-sm py-0 m-0 px-1">
        {original_name.slice(0, 20)}
      </li>
      <div className="flex justify-between px-1">
        <li className="list-none text-sm">{first_air_date.slice(0, 4)}</li>
        <li className="list-none text-sm flex">
          <svg
            class="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p class="ms-2 text-sm font-bold  ">{vote_average}</p>
        </li>
      </div>
    </div>
  );
};

export default TvCard;
