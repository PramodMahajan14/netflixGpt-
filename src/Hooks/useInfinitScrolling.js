import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../util/appSlice";
import { increasePageNo } from "../util/moviesSlice";

const useInfinitScrolling = () => {
  const { movieList, tvList } = useSelector((store) => store.movies.tvShows);
  //   console.log(movieList, tvList);
  const dispatch = useDispatch();
  const handleInfinitScroll = async () => {
    try {
      if (movieList == null && tvList == null) return;

      const { scrollHeight, scrollTop } = document.documentElement;

      if (scrollHeight <= scrollTop + window.innerHeight) {
        dispatch(setLoader(true));
        dispatch(increasePageNo());
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Tvshow mounted");
    window.addEventListener("scroll", handleInfinitScroll);
    return () => window.removeEventListener("scroll", handleInfinitScroll);
  }, [movieList, tvList]);
};

export default useInfinitScrolling;
