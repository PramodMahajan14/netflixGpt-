import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import { useSelector } from "react-redux";
import SearchhMovies from "./SearchMovies";
import Footer from "./Footer";

const Browse = () => {
  const searchpageOpen = useSelector((store) => store.app.showSearchBar);
  useNowplayingMovies();
  usePopularMovies();

  return (
    <div className="min-w-screen overflow-x-hidden  h-dvh sm:pb-0 pb-4 bg-black relative">
      <Header />
      {searchpageOpen ? (
        <SearchhMovies />
      ) : (
        <>
          (<MainContainer />
          <SecondaryContainer />)
        </>
      )}

      <Footer />
    </div>
  );
};

export default Browse;
