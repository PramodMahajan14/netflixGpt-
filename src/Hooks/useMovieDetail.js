import { useEffect, useState } from "react";
import { API_OPTIONS } from "../util/constant";

const useMovieDetail = (movie_id) => {
  const [movieData, setMovieData] = useState();

  const fetchMovie = async () => {
    try {
      const resp = await fetch(
        "https://api.themoviedb.org/3/movie/" + movie_id,
        API_OPTIONS
      );
      setMovieData(await resp.json());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [movie_id]);

  return movieData;
};

export default useMovieDetail;
