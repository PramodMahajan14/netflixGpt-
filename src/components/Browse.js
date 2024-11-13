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
    <div className="min-w-screen overflow-x-hidden  h-dvh sm:pb-0 pb-4 bg-black relative">
      <Header />

      <Outlet />

      <Footer className="absolute bottom-0" />
    </div>
  );
};

export default Browse;
