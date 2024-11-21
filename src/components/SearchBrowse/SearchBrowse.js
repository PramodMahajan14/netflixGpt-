import React, { useState } from "react";

import useSearchBrowse from "../../Hooks/useSearchBrowse";
import SearchBrowseList from "./SearchBrowseList";
import MovieModal from "../MovieDetail/MovieModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../util/appSlice";
import SelectedMovie from "../MovieDetail/SelectedMovie";

const SearchBrowse = () => {
  const isModalOpen = useSelector((store) => store.app.movieModalOpen);
  const [searchInput, setSearchInput] = useState("");
  useSearchBrowse(searchInput);
  const dispatch = useDispatch();
  const closemodal = () => dispatch(closeModal());
  const handleCleaner = () => {
    setSearchInput("");
  };
  return (
    <div className="w-full  min-h-[200px] h-auto p-2 bg-gray-600 rounded-lg">
      <form className="max-w-full mx-2 ">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative items-center">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-neutral-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <li
            className={` ${
              searchInput === "" ? "hidden" : "block"
            } list-none cursor-pointer absolute end-2.5 bottom-2.5  hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-md p-2 `}
            onClick={handleCleaner}
          >
            <svg
              className="h-4 w-4 text-neutral-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <line x1="18" y1="6" x2="6" y2="18" />{" "}
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </li>
        </div>
      </form>
      <SearchBrowseList />

      <MovieModal isOpen={isModalOpen} onClose={closemodal}>
        <SelectedMovie />
      </MovieModal>
    </div>
  );
};

export default SearchBrowse;
