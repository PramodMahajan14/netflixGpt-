import React from "react";

import TvList from "./TvList";
import SortByTvshowOrMovie from "../SortByTvshowOrMovie";

const Tvshow = () => {
  return (
    <div className="w-screen text-center mx-0  text-3xl mt-16">
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
