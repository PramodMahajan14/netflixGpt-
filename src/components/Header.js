import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../assets/Logo.svg";
import { ReactComponent as LanguageIcon } from "../assets/Language.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";
import { ReactComponent as SmallUserIcon } from "../assets/SmallAvatar.svg";
import { ReactComponent as DownArrowIcon } from "../assets/dwonArrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../util/firebase";
import { useNavigation } from "react-router-dom";
import { removeUser } from "../util/userSlice";
const Header = () => {
  const User = useSelector((store) => store.user);
  const [dropdownShow, setdropdownShow] = useState(false);
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      navigate("/");
    } catch (err) {
      // err
    }
  };

  return (
    <div
      className={`w-screen h-18  sm:h-24   items-center px-4 md:px-14 ${
        User?.email
          ? "  grid grid-cols-12 lg:gap-44 md:gap-24 relative"
          : "flex justify-between mx-3"
      }`}
    >
      <h1>
        <LogoIcon className=" col-span-3" />
      </h1>
      {User?.email && (
        <>
          <div className="flex items-center text-white col-span-6 cursor-pointer">
            <li className="mx-2 my-1 list-none ">Home</li>
            <li className="mx-2 my-1 list-none ">TV show</li>
            <li className="mx-2 my-1 list-none">Movies</li>
            <li className="mx-2 my-1 list-none">New & Popular</li>
            <li className="mx-2 my-1 list-none">My List</li>
            <li className="mx-2 my-1 list-none">Brose by Language</li>
          </div>
          <ul className=" text-white inline-flex col-span-3 ">
            <li className="mx-3 my-2 cursor-pointer">
              <SearchIcon />
            </li>
            <li className="mx-4 my-2 cursor-pointer">
              <BellIcon />
            </li>
            <li className="flex items-center cursor-pointer">
              <SmallUserIcon />
              <DownArrowIcon
                onClick={() => {
                  setdropdownShow(!dropdownShow);
                }}
              />
            </li>
          </ul>
        </>
      )}

      {!User?.email && (
        <div className="flex  items-center relative">
          <select
            id="countries"
            className="mx-2 my-1 px-4 py-1 flex  text-center bg-transparent     rounded-md  border-[2px] border-neutral-300 hover:border-white "
          >
            <option selected>English</option>
            <option value="hindi">हिंदी</option>
          </select>
          <button className="py-2 px-5 rounded-md border-none bg-red-500 font-semibold text-white text-sm">
            SignIn
          </button>

          <LanguageIcon className="absolute top-3.5 left-2 text-white" />
        </div>
      )}
      {dropdownShow && User?.email && (
        <div
          className="absolute right-8 -bottom-7  px-2 py-3 bg-white cursor-pointer rounded-sm
      "
        >
          <li className="list-none hover:bg-indigo-200 px-1 py-[2px] text-sm rounded-sm mx-1">
            Profile
          </li>
          <li
            className="list-none hover:bg-indigo-200 px-1 py-[2px] text-sm rounded-sm mx-1"
            onClick={handleSignOut}
          >
            SignOut
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
