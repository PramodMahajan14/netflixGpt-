import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../Hooks/useNowPlayingMovies";

import usePopularMovies from "../Hooks/usePopularMovies";

import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Browse = () => {
  useNowplayingMovies();
  usePopularMovies();

  return (
    <>
      <Header />
      <div className="h-fit overflow-x-hidden overflow-y-auto min-h-screen  sm:pb-0 pb-4 bg-black relative">
        <Outlet />

        {/* <Footer className="fixed bottom-0" /> */}
      </div>
    </>
  );
};

export default Browse;
