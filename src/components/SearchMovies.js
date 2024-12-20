import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as MicIcon } from "../Assets/microphone.svg";
import { ReactComponent as LeftArrow } from "../Assets/leftArrow.svg";
import { ReactComponent as SearchIcon } from "../Assets/search.svg";

import { useDispatch, useSelector } from "react-redux";
import { closedSearch, closeModal, toggleSearchBar } from "../util/appSlice";
import SearchList from "./SearchList";

import useSearchMovies from "../Hooks/useSearchMovies";
import Loader from "./Loader";
import MovieModal from "./MovieDetail/MovieModal";
import SelectedMovie from "./MovieDetail/SelectedMovie";
import { useNavigate } from "react-router-dom";

const SearchhMovies = () => {
  const isLoader = useSelector((store) => store.app.loader);

  const handleSearchMovies = useSearchMovies();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((store) => store.app.movieModalOpen);

  const closemodal = () => dispatch(closeModal());

  const [isExpanded, setIsExpanded] = useState(false);
  const [Query, setQuery] = useState("");
  const [QuerySmall, setQuerySmall] = useState("");
  const searchMoviesRef = useRef(null);
  const navigate = useNavigate();
  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    dispatch(toggleSearchBar());
    const handleClickOutside = (event) => {
      if (
        searchMoviesRef.current &&
        !searchMoviesRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => dispatch(closedSearch());
  }, []);

  const handleSearchLargeDevice = (e) => {
    handleSearchMovies(Query);
  };
  const handleSearchSmallDevice = (e) => {
    if (e.key === "Enter") {
      handleSearchMovies(Query);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Query.trim()) {
      handleSearchMovies(Query);
    }
  };
  return (
    <>
      <div className="w-screen h-dvh" ref={searchMoviesRef}>
        <div className="w-full h-14 bg-gray-500 sm:hidden fixed top-0 ">
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex items-center px-3 text-white"
          >
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
          </form>
        </div>
        <div className="hidden  justify-between sm:flex items-center sm:pl-1 md:pl-5 md:pr-10 pr-2 py-2 text-white ">
          <li
            className="list-none p-[2px] rounded-full hover:bg-neutral-400 cursor-pointer"
            onClick={() => navigate("/browse")}
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
        <MovieModal isOpen={isModalOpen} onClose={closemodal}>
          <SelectedMovie />
        </MovieModal>
      </div>
    </>
  );
};

export default SearchhMovies;
