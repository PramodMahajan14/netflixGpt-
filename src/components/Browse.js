import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../Hooks/useNowPlayingMovies";

import usePopularMovies from "../Hooks/usePopularMovies";

import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import MovieModal from "./MovieDetail/MovieModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../util/appSlice";
import SearchBrowse from "./SearchBrowse/SearchBrowse";

const Browse = () => {
  useNowplayingMovies();
  usePopularMovies();

  const isSearchModalOpen = useSelector((store) => store.app.SearchBrowseModal);

  const dispatch = useDispatch();
  const closemodal = () => dispatch(closeModal("searchBrowse"));
  return (
    <>
      <Header />
      <div className="h-fit overflow-x-hidden overflow-y-auto min-h-screen  sm:pb-0 pb-4 bg-black relative">
        <Outlet />

        {/* <Footer className="fixed bottom-0" /> */}

        <MovieModal isOpen={isSearchModalOpen} onClose={closemodal}>
          <SearchBrowse />
        </MovieModal>
      </div>
    </>
  );
};

export default Browse;
