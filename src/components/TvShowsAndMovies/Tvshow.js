import React, { useEffect } from "react";

import TvList from "./TvList";
import SortByTvshowOrMovie from "../SortByTvshowOrMovie";
import { useDispatch, useSelector } from "react-redux";
import { increasePageNo } from "../../util/moviesSlice";
import { setLoader } from "../../util/appSlice";
import useInfinitScrolling from "../../Hooks/useInfinitScrolling";

const Tvshow = () => {
  useInfinitScrolling();
  return (
    <div className="w-screen h-fit overflow-auto  text-center mx-0  text-3xl mt-16 pb-5">
      <SortByTvshowOrMovie
        typesTvOrMovie={[
          { name: "Airing Today", value: "airing_today" },
          { name: "On The Air", value: "on_the_air" },
          { name: "Popular", value: "popular" },
          { name: "To Rated", value: "top_rated" },
        ]}
      />
      <div className="py-1 mx-auto justify-center items-center">
        <TvList />
      </div>
    </div>
  );
};

export default Tvshow;
