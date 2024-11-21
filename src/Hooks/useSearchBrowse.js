import { useEffect, useState } from "react";
import { API_OPTIONS } from "../util/constant";
import { useDispatch } from "react-redux";
import { addSearchResult } from "../util/moviesSlice";

const useSearchBrowse = (searchInput) => {
  const [searchResult, setSearchResult] = useState();
  const dispatch = useDispatch();
  const fetchSearchData = async () => {
    const results = [];
    try {
      const respMovies = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          searchInput +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const respTvShows = await fetch(
        "https://api.themoviedb.org/3/search/tv?query=" +
          searchInput +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const movieData = await respMovies.json();
      const tvshowData = await respTvShows.json();
      if (movieData.results.length > 0)
        results.push(...movieData.results.splice(0, 4));
      if (tvshowData.results.length > 0)
        results.push(...tvshowData.results.splice(0, 4));
      results.sort((a, b) => (a.title || a.name > b.title || b.name ? 1 : -1));

      dispatch(addSearchResult(results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchData();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  return searchResult;
};

export default useSearchBrowse;
