import React from "react";
import { IMG_CDN_URL } from "../util/constant";
import { ReactComponent as PlayIcon } from "../assets/playl.svg";

const Searchcard = () => {
  return (
    <div className="w-screen h-16 flex items-center bg-gray-500 justify-between pr-1 my-1 sm:w-44 md:w-40  sm:p-0 sm:m-2 sm:h-60">
      <div className="w-1/3 h-full flex items-center text-white sm:w-full sm:h-full">
        <img
          src={IMG_CDN_URL + "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg"}
          alt="image"
          className="h-full w-full"
        />{" "}
        <span className=" mx-3 sm:hidden ">Creation</span>
      </div>
      <i className="list-none text-white sm:hidden">
        <PlayIcon />
      </i>
    </div>
  );
};

export default Searchcard;
