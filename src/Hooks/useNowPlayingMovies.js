import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../util/constant";
import { addNowPlayingMovies } from "../util/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const fetechMovies = async () => {
    try {
      const resp = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const jsonData = await resp.json();
      dispatch(addNowPlayingMovies(jsonData.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && fetechMovies();
  });
};

export default useNowPlayingMovies;
