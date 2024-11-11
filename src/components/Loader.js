import React from "react";
import "../common.js";
const Loader = () => {
  return (
    <div className="w-screen h-1/2 flex justify-center items-center ">
      <div class="loader">
        <div class="circle">
          <div class="dot"></div>
          <div class="outline"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
