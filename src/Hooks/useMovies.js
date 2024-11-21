import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../util/constant";
import { addMovies } from "../util/moviesSlice";
import { setLoader } from "../util/appSlice";

const useMovies = () => {
  const type = useSelector((store) => store.movies.movieTvshow);
  const pageNo = useSelector((store) => store.movies.tvShows.page);
  const dispatch = useDispatch();

  const fetchTvshows = async () => {
    try {
      const resp = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          type +
          "?language=en-US&page=" +
          pageNo,
        API_OPTIONS
      );
      const data = await resp.json();

      dispatch(addMovies(data.results));
      dispatch(setLoader(false));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTvshows();
  }, [pageNo, type]);
};

export default useMovies;
