import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { IMG_CDN_URL } from "../util/constant";

const VideoBackground = ({ movieId, backdrop_path }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="absolute aspect-video inset-0 w-full h-full z-0 pointer-events-none   bg-gradient-to-b from-black">
      <iframe
        className="w-full h-full object-cover hidden sm:block"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?controls=0&modestbranding=1&rel=0&autohide=1&fs=0&autoplay=1&mute=1&loop=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        title="0"
        allowFullScreen
      ></iframe>

      <img
        src={IMG_CDN_URL + backdrop_path}
        alt="Image"
        className="w-full h-full object-cover sm:hidden bg-gradient-to-b from-black"
      />
    </div>
  );
};

export default VideoBackground;
