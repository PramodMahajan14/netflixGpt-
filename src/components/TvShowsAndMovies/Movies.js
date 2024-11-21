import React from "react";
import SortByTvshowOrMovie from "../SortByTvshowOrMovie";
import MovieList from "./MovieList";
import useInfinitScrolling from "../../Hooks/useInfinitScrolling";
import MovieModal from "../MovieDetail/MovieModal";
import SelectedMovie from "../MovieDetail/SelectedMovie";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../util/appSlice";
import { langauges } from "../../util/LagaugeConstants";

const Movies = () => {
  const appLang = useSelector((store) => store.app.lang);
  useInfinitScrolling();
  const isModalOpen = useSelector((store) => store.app.movieModalOpen);

  const dispatch = useDispatch();
  const closemodal = () => dispatch(closeModal());
  return (
    <div className="w-screen h-fit overflow-auto  text-center mx-0   mt-16 pb-5">
      <SortByTvshowOrMovie
        typesTvOrMovie={[
          { name: langauges[appLang].nowplayingmovies, value: "now_palying" },
          { name: langauges[appLang].upcoming, value: "upcoming" },
          { name: langauges[appLang].popular, value: "popular" },
          { name: langauges[appLang].top_rated, value: "top_rated" },
        ]}
      />
      <div className="py-1 mx-auto justify-center items-center">
        <MovieList />
      </div>
      <MovieModal isOpen={isModalOpen} onClose={closemodal}>
        <SelectedMovie />
      </MovieModal>
    </div>
  );
};

export default Movies;
