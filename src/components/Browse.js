import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowplayingMovies();

  return (
    <div className="w-full h-full min-h-screen bg-slate-500">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
