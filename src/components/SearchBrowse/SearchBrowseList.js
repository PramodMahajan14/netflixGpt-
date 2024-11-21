import React from "react";
import SearchBrowseCard from "./SearchBrowseCard";
import { useSelector } from "react-redux";

const SearchBrowseList = () => {
  const searchList = useSelector((store) => store.movies.searchResults);

  if (searchList?.length === 0 && !searchList === null) {
    return (
      <div className="w-full my-10 items-start text-center justify-center text-white">
        <h1>Not found</h1>
      </div>
    );
  }
  return (
    <div
      className="w-full h-auto max-h-[370px]  block py-2 mt-2 overflow-y-scroll
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-md
  [&::-webkit-scrollbar-track]:bg-gray-400
  [&::-webkit-scrollbar-thumb]:bg-gray-700"
    >
      {searchList?.map((result) => (
        <SearchBrowseCard key={result.id} searchData={result} />
      ))}
      {searchList === null && (
        <div className="flex flex-col w-full justify-center my-10  text-center  text-white">
          <h1>Start typing to search…</h1>
        </div>
      )}
    </div>
  );
};

export default SearchBrowseList;
