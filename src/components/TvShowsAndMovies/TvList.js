import React from "react";
import { useSelector } from "react-redux";
import useTvShowdata from "../../Hooks/useTvShowdata";
import TvCard from "./TvCard";
import PromotedMovie from "../PromotedMovie";
import TVAndMovieCard from "../shimmrui/TVAndMovieCard";

const TvList = () => {
  const Tvshows = useSelector((store) => store.movies.tvShows.tvList);
  useTvShowdata();
  const PromotedTvshow = PromotedMovie(TvCard);
  if (!Tvshows) {
    return (
      <div className="flex flex-wrap justify-center md:items-center min-h-screen pb-10">
        {Array(12)
          .fill()
          .map((_, index) => (
            <TVAndMovieCard key={index} />
          ))}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center md:items-center min-h-screen pb-10">
      <div
        className="grid grid-cols-3 
       gap-1 md:gap-8 sm:grid-cols-3 lg:grid-cols-6 min-h-fit sm:my-5 "
      >
        {Tvshows?.map((tv) =>
          tv.vote_count >= 100 ? (
            <PromotedTvshow key={tv.id} tvData={tv} />
          ) : (
            <TvCard key={tv.id} tvData={tv} />
          )
        )}
      </div>
    </div>
  );
};

export default TvList;
