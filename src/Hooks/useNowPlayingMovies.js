import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../util/constant";
import { addNowPlayingMovies } from "../util/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
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
    fetechMovies();
  });
};

export default useNowPlayingMovies;
