import React from "react";
import { useSelector } from "react-redux";
import useTvShowdata from "../../Hooks/useTvShowdata";
import TvCard from "./TvCard";
import PromotedMovie from "../PromotedMovie";

const TvList = () => {
  const Tvshows = useSelector((store) => store.movies.tvShows.tvList);
  useTvShowdata();
  const PromotedTvshow = PromotedMovie(TvCard);
  return (
    <div className="flex justify-center items-center min-h-screen pb-10">
      <div
        className="grid grid-cols-2 
       gap-6 sm:grid-cols-3 lg:grid-cols-6 my-5 "
      >
        {Tvshows?.map((tv) =>
          tv.vote_average >= 7 ? (
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
