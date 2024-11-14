import React from "react";
import { useSelector } from "react-redux";
import PreviewCard from "./PreviewCard";
import { langauges } from "../../util/LagaugeConstants";

const PreviewList = () => {
  const preview_movies = useSelector((store) => store.app.preview);
  const lang = useSelector((store) => store.app.lang);
  if (preview_movies.length === 0) return null;
  return (
    <div className="px-1 md:mx-4">
      <div>
        <h1 className="font-bold md:ml-2">{langauges[lang].preview}</h1>

        <div className="flex flex-nowrap overflow-x-scroll scrollbar-hidden ">
          {preview_movies?.map((pre) => (
            <PreviewCard key={pre.id} poster_path={pre.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewList;
