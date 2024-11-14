import React, { Suspense } from "react";

import MovieModal from "./MovieDetail/MovieModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../util/appSlice";
import SelectedMovie from "./MovieDetail/SelectedMovie";
import HomeSk from "./Skeleton/HomeSk";
const MainContainer = React.lazy(() => import("./MainContainer"));
const SecondaryContainer = React.lazy(() => import("./SecondaryContainer"));

const Home = () => {
  const isModalOpen = useSelector((store) => store.app.movieModalOpen);
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();
  const closemodal = () => dispatch(closeModal());
  if (!movies) return <HomeSk />;
  return (
    <div>
      <Suspense fallback={<HomeSk />}>
        <MainContainer />
        <SecondaryContainer />
      </Suspense>

      <MovieModal isOpen={isModalOpen} onClose={closemodal}>
        <SelectedMovie />
      </MovieModal>
    </div>
  );
};

export default Home;
