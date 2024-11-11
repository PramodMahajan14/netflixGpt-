import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as MicIcon } from "../assets/microphone.svg";
import { ReactComponent as LeftArrow } from "../assets/leftArrow.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

import { useDispatch, useSelector } from "react-redux";
import { closedSearch } from "../util/appSlice";
import SearchList from "./SearchList";
import openai from "../util/openAI";
import { API_OPTIONS } from "../util/constant";
import { addSearchResults } from "../util/moviesSlice";
import useSearchMovies from "../Hooks/useSearchMovies";
import Loader from "./Loader";

const SearchhMovies = () => {
  const isLoader = useSelector((store) => store.app.loader);
  const handleSearchMovies = useSearchMovies();
  const dispatch = useDispatch();

  const [isExpanded, setIsExpanded] = useState(false);
  const [Query, setQuery] = useState("");
  const [QuerySmall, setQuerySmall] = useState("");
  const searchMoviesRef = useRef(null);

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Closed SearchBar
    const handleClickOutside = (event) => {
      if (
        searchMoviesRef.current &&
        !searchMoviesRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
  });

  const handleSearchLargeDevice = (e) => {
    handleSearchMovies(Query);
  };
  const handleSearchSmallDevice = (e) => {
    if (e.key === "Enter") {
      handleSearchMovies(Query);
    }
  };
  return (
    <>
      <div className="w-screen h-dvh" ref={searchMoviesRef}>
        <div className="w-full h-14 bg-gray-500 sm:hidden fixed top-0 ">
          <div className="w-full h-full flex items-center px-3 text-white">
            <li className="list-none p-1">{/* <SearchIcon /> */}</li>{" "}
            <input
              type="text"
              className="w-full h-full p-1 bg-transparent outline-none "
              placeholder="Search for a show, Movies,gener... etc"
              onChange={(e) => setQuerySmall(e.target.value)}
              value={QuerySmall}
              onKeyDown={handleSearchSmallDevice}
            />{" "}
            <li className="list-none p-1 rounded-full hover:bg-neutral-400">
              {" "}
              <MicIcon />
            </li>
          </div>
        </div>
        <div className="hidden  justify-between sm:flex items-center sm:pl-1 md:pl-5 md:pr-10 pr-2 py-2 text-white ">
          <li
            className="list-none p-[2px] rounded-full hover:bg-neutral-400 cursor-pointer"
            onClick={() => dispatch(closedSearch())}
          >
            <LeftArrow className="size-9" />
          </li>

          <div className="flex items-center">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={Query}
              placeholder="Search for a show, Movies,gener... etc"
              className={`transition-all duration-300 ease-in-out transform ${
                isExpanded ? "w-72 opacity-100" : "w-0 opacity-0"
              } px-1 py-2 rounded-md border border-gray-300 bg-transparent focus:outline-none`}
            />
            {isExpanded && (
              <li
                className="list-none text-white px-3 py-2 rounded-sm cursor-pointer mx-1 bg-slate-400 hover:bg-slate-600"
                onClick={handleSearchLargeDevice}
              >
                Search
              </li>
            )}

            <li
              onClick={toggleSearch}
              className="list-none ml-2 p-[3px] rounded-full hover:bg-neutral-400 cursor-pointer transition-colors"
            >
              <SearchIcon className="size-7" />
            </li>
          </div>
        </div>

        {isLoader ? <Loader /> : <SearchList />}
      </div>
    </>
  );
};

export default SearchhMovies;
