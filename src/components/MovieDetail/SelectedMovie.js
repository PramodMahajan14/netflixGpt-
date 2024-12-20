import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieDetail from "../../Hooks/useMovieDetail";
import { IMG_CDN_URL } from "../../util/constant";
import { ReactComponent as ClosedIcon } from "../../Assets/closed.svg";
import { ReactComponent as PlayIcon } from "../../Assets/play.svg";
import { ReactComponent as AddPlusIcon } from "../../Assets/roundedPlus.svg";
import { closeModal, setPreview } from "../../util/appSlice";
import SelectedMovieSk from "../shimmrui/SelectedMovieSk";

const SelectedMovie = () => {
  const movieId = useSelector((store) => store.app.selectedMovieId);
  const movie = useMovieDetail(movieId);
  const dispatch = useDispatch();
  const previewMovies = useSelector((store) => store.app.previewMovies);

  useEffect(() => {
    if (movie && !previewMovies?.some((m) => m.id === movie.id)) {
      dispatch(setPreview(movie));
    }
  }, [movie, dispatch, previewMovies]);

  if (!movie) return <SelectedMovieSk />;

  return (
    <div className="w-full h-full  shadow-md drop-shadow-md bg-gray-600 text-white rounded-lg max-h-[500px] overflow-y-scroll md:max-h-full md:overflow-hidden ">
      <div className="w-full h-1/2 relative object-cover ">
        <img
          src={IMG_CDN_URL + movie?.backdrop_path}
          alt="image"
          className="w-full h-[300px] rounded-t-lg z-0"
        />
        <li className="list-none p-[2px] rounded-full bg-gray-700  absolute top-2 right-2 cursor-pointer ">
          <ClosedIcon onClick={() => dispatch(closeModal())} />
        </li>
        <h1 className="uppercase text-3xl absolute bottom-1 ml-1 z-20">
          {movie.original_title}
        </h1>
      </div>
      <div className="flex items-center p-1 ">
        <button className="px-3 p-1  bg-white text-black flex rounded-sm">
          <PlayIcon /> Play
        </button>
        <li className="list-none ml-2">
          <AddPlusIcon />
        </li>
      </div>

      <p className="text-white px-1 text-left">{movie?.overview}</p>

      <div className="flex justify-between px-2">
        <p className="text-slate-300">
          Status : <span className="text-white">{movie?.status}</span>
        </p>

        <p className="text-slate-300">
          Genres :{" "}
          <span className="text-white">
            {movie?.genres?.map((g) => g.name).join(", ")}
          </span>
        </p>
      </div>
      <div className="flex justify-between px-2">
        <p className="text-slate-300">
          Release Date :{" "}
          <span className="text-white">{movie?.release_date}</span>
        </p>

        <p className="text-slate-300">
          Languages :{" "}
          <span className="text-white">
            {movie?.spoken_languages?.map((l) => l.name).join(", ")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SelectedMovie;
