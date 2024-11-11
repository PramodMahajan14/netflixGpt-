import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../util/constant";
import { addTrailerVideo } from "../util/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    try {
      const resp = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const jsonData = await resp.json();

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
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
