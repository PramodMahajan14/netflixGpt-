import React from "react";
import Searchcard from "./Searchcard";
import { useSelector } from "react-redux";
import { langauges } from "../util/LagaugeConstants";
const SearchList = () => {
  const appLang = useSelector((store) => store.app.lang);
  return (
    <div className="w-full h-auto mt-16">
      <h1 className="text-white font-bold text-2xl mx-2 my-2 md:mx-10">
        {langauges[appLang].top_searches}
      </h1>
      <div className="w-full h-auto sm:flex sm:flex-wrap sm:justify-center ">
        <Searchcard />
        <Searchcard />
        <Searchcard />
        <Searchcard />
        <Searchcard />
        <Searchcard />
        <Searchcard />
        <Searchcard />
      </div>
    </div>
  );
};

export default SearchList;
