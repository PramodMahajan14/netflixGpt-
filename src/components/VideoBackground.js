import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
// import ReactPlayer from "react-player";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="absolute aspect-video inset-0 w-full h-full z-0 pointer-events-none">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?controls=0&modestbranding=1&rel=0&autohide=1&fs=0&autoplay=1&mute=1&loop=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        title="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
