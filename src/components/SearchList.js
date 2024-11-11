import React from "react";
import Searchcard from "./Searchcard";
import { useSelector } from "react-redux";
import { langauges } from "../util/LagaugeConstants";

const SubMovieList = ({ movies }) => {
  return (
    <>
      <div className="w-full h-auto sm:flex sm:flex-wrap sm:justify-start sm:mx-9 ">
        {movies?.map((movie) => (
          <Searchcard
            key={movie.original_title}
            backdrop_path={movie.backdrop_path}
            poster_path={movie.poster_path}
            original_title={movie.original_title}
          />
        ))}
      </div>
    </>
  );
};

const SearchList = () => {
  const appLang = useSelector((store) => store.app.lang);
  const { searchedMoviesName, searchedMovies } = useSelector(
    (store) => store.movies
  );

  if (!searchedMoviesName) return null;

  return (
    <div className="w-full h-auto mt-16">
      <h1 className="text-white font-bold text-2xl mx-2 my-2 md:mx-10">
        {langauges[appLang].top_searches}
      </h1>
      {/* <div className="w-full h-auto sm:flex sm:flex-wrap sm:justify-center "> */}
      {searchedMoviesName?.map((name, index) => (
        <div className="w-full h-auto block p-0 m-0">
          <h4 className="text-white mx-3 sm:px-10">{name}</h4>
          <SubMovieList movies={searchedMovies[index]} />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default SearchList;
