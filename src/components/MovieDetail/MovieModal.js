import React from "react";

const MovieModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 w-screen ">
      <div
        className="absolute inset-0 bg-gray-800 opacity-50 "
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg w-full md:w-[50%]   mx-2 sm:mx-0 ">
        {children}
      </div>
    </div>
  );
};

export default MovieModal;
