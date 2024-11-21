import React, { useEffect } from "react";

import TvList from "./TvList";
import SortByTvshowOrMovie from "../SortByTvshowOrMovie";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../../util/appSlice";
import useInfinitScrolling from "../../Hooks/useInfinitScrolling";
import SelectedMovie from "../MovieDetail/SelectedMovie";
import MovieModal from "../MovieDetail/MovieModal";
import { langauges } from "../../util/LagaugeConstants";

const Tvshow = () => {
  const appLang = useSelector((store) => store.app.lang);
  useInfinitScrolling();
  const isModalOpen = useSelector((store) => store.app.movieModalOpen);

  const dispatch = useDispatch();
  const closemodal = () => dispatch(closeModal());
  return (
    <div className="w-screen h-fit overflow-auto  text-center mx-0   mt-16 pb-5">
      <SortByTvshowOrMovie
        typesTvOrMovie={[
          { name: langauges[appLang].airing_today, value: "airing_today" },
          { name: langauges[appLang].on_the_air, value: "on_the_air" },
          { name: langauges[appLang].popular, value: "popular" },
          { name: langauges[appLang].top_rated, value: "top_rated" },
        ]}
      />
      <div className="py-1 mx-auto justify-center items-center">
        <TvList />
      </div>
      <MovieModal isOpen={isModalOpen} onClose={closemodal}>
        <SelectedMovie />
      </MovieModal>
    </div>
  );
};

export default Tvshow;
