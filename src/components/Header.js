import React from "react";
import { ReactComponent as LogoIcon } from "../assets/Logo.svg";
import { ReactComponent as LanguageIcon } from "../assets/Language.svg";
const Header = () => {
  return (
    <div className="w-screen h-24 absolute top-0 flex justify-between items-center px-14">
      <h1>
        <LogoIcon />
      </h1>
      <div className="flex  items-center relative">
        <select
          id="countries"
          className="mx-2 my-1 px-5 py-2 flex  text-center   border  text-white text-md rounded-lg focus:ring-blue-500 hover:outline-white  "
        >
          <option selected>English</option>
          <option value="hindi">हिंदी</option>
        </select>
        <button className="py-2 px-5 rounded-md border-none bg-red-500 font-semibold text-white text-sm">
          SignIn
        </button>

        <LanguageIcon className="absolute top-3.5 left-2 text-white" />
      </div>
    </div>
  );
};

export default Header;
