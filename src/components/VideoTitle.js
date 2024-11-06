import React from "react";
import { ReactComponent as PlayIcon } from "../assets/play.svg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="md:px-3   flex-col w-screen items-center md:text-left  md:justify-start md:w-1/2 lg:w-1/4 h-full absolute  top-96 text-center md:top-52 inset-0 bg-opacity-50     ">
      <p className="text-2xl md:text-6xl font-bold text-white">{title}</p>
      <p className="text-white hidden md:block">{overview}</p>
      <div className="flex space-x-2 my-2 sm:my-4 justify-center md:justify-start">
        <button className="px-3 flex flex-col items-center text-white md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <p>My List</p>
        </button>
        <button className="px-4 py-[2px] md:px-6 md:py-2 bg-white rounded-md text-black flex items-center font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 mr-3"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
          Play
        </button>
        <button className="px-3  md:px-6 md:py-2 md:bg-gray-500 md:rounded-md text-white flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <p className="hidden md:block">More info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
