import React from "react";
import { useSelector } from "react-redux";

const MovieModal = ({ isOpen, onClose, children }) => {
  const isSearchModalOpen = useSelector((store) => store.app.SearchBrowseModal);
  if (!isOpen) return null;

  return (
    <div
      className={`fixed h-full inset-0 flex items-${
        isSearchModalOpen ? "start " : "center"
      } justify-center z-50 w-screen `}
    >
      <div
        className="absolute inset-0 bg-gray-800 opacity-50 "
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-lg shadow-lg w-full md:w-[50%] h-fit  mx-2 sm:mx-0 ${
          isSearchModalOpen && "my-16"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MovieModal;
