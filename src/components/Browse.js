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
      <div>
        <Header />
        <div className="min-w-screen overflow-x-hidden min-h-screen h-dvh sm:pb-0 pb-4 bg-black relative">
          <Outlet />

          <Footer className="fixed bottom-0" />
        </div>
      </div>
    </>
  );
};

export default Browse;
