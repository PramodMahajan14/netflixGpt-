import React from "react";

const SelectedMovieSk = () => {
  return (
    <div className="w-full h-full shadow-md drop-shadow-md bg-gray-600 text-white rounded-lg">
      <div
        role="status"
        class="flex items-center justify-center h-48 w-full bg-gray-300 rounded-t-lg animate-pulse dark:bg-gray-700"
      >
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>

      <div className="space-x-2 flex animate-pulse items-center p-2">
        <div className="h-6 bg-gray-400 w-1/4 rounded-sm"></div>
        <div className="h-6  bg-gray-400 w-6 rounded-full"></div>
      </div>
      <div role="status" className="max-w-full animate-pulse p-2">
        <div className="h-2 bg-gray-400  dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-400  dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-400  dark:bg-gray-700  mb-2.5"></div>
        <div className="h-2 bg-gray-400  dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="space-x-2 flex justify-between animate-pulse items-center p-2">
        <div className="h-2 bg-gray-400 w-1/5 "></div>
        <div className="h-2  bg-gray-400 w-1/5 "></div>
      </div>
      <div className="space-x-2 flex justify-between animate-pulse items-center p-2">
        <div className="h-2 bg-gray-400 w-1/5 "></div>
        <div className="flex items-center w-full">
          <div className="h-2 ms-2 bg-gray-400  dark:bg-gray-600 w-24"></div>
          <div className="h-2 ms-2 bg-gray-400  dark:bg-gray-600 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovieSk;
