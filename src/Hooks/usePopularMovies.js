import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../util/constant";
import { addPopularMovies } from "../util/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetechPopularMovies = async () => {
    try {
      const resp = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const jsonData = await resp.json();
      dispatch(addPopularMovies(jsonData.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetechPopularMovies();
  });
};

export default usePopularMovies;
