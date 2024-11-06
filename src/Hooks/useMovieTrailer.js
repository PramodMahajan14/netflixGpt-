import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../util/constant";
import { addTrailerVideo } from "../util/moviesSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const resp = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const jsonData = await resp.json();
      console.log(jsonData.results);
      const trailerData = jsonData?.results?.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = trailerData.results?.length
        ? trailerData[0]
        : jsonData?.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
