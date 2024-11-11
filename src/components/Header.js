import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as LogoIconLg } from "../assets/Logo.svg";
import { ReactComponent as LanguageIcon } from "../assets/Language.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";
import { ReactComponent as SmallUserIcon } from "../assets/SmallAvatar.svg";
import { ReactComponent as DownArrowIcon } from "../assets/dwonArrow.svg";
import { ReactComponent as LogoutIcon } from "../assets/signout.svg";
import { ReactComponent as UserIcon } from "../assets/user.svg";
import { ReactComponent as LogoIconSm } from "../assets/logos_netflix-icon.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as CommingIcon } from "../assets/commingSoon.svg";
import { ReactComponent as DownloadIcon } from "../assets/download.svg";
import { ReactComponent as MoreIcon } from "../assets/more.svg";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../util/firebase";

import { addUser, removeUser } from "../util/userSlice";
import { useNavigate } from "react-router-dom";
import {
  changeLanguage,
  closedSearch,
  toggleSearchBar,
} from "../util/appSlice";
import { SUPPORTED_LANGAUGES } from "../util/constant";
import { langauges } from "../util/LagaugeConstants";

const Header = ({ isSign = true }) => {
  const User = useSelector((store) => store.user);
  const searchPage = useSelector((store) => store.app.showSearchBar);
  const [dropdownShow, setdropdownShow] = useState(false);
  const dropdownRef = useRef(null);
  const appLang = useSelector((store) => store.app.lang);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      setdropdownShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  const togglerSeach = () => {
    dispatch(toggleSearchBar());
  };
  const closeSearchPage = () => {
    dispatch(closedSearch());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // login user or get a user data
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // logout user
        dispatch(removeUser());
        navigate("/");
      }
    });

    // ===---DowpDown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setdropdownShow(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
      unsubscribe();
    };
  }, []);

  return (
    <nav className="w-screen  fixed  z-50 top-0" ref={dropdownRef}>
      {!searchPage && (
        <div className=" lg:px-5 md:px-2 sm:px-2 relative grid grid-flow-col h-14 items-center bg-transparent">
          <h1 className="col-span-1 lg:col-span-2">
            <LogoIconLg className="hidden sm:block sm:size-24 p-0 lg:h-24 lg:w-28" />
            <LogoIconSm className="sm:hidden" />
          </h1>
          {User?.email && (
            <>
              <div className="col-span-6 lg:col-span-7 items-center text-white  cursor-pointer hidden sm:hidden md:flex">
                <li className="mx-2 py-[1px] px-[2px] md:mx-1 lg:mx-3 list-none hover:bg-gray-300 hover:text-slate-700 rounded-sm ">
                  {langauges[appLang].home}
                </li>
                <li className="mx-2 py-[1px] px-[2px] md:mx-1 lg:mx-3 list-none hover:bg-gray-200 rounded-sm ">
                  {langauges[appLang].tvshow}
                </li>
                <li className="mx-2 py-[1px] px-[2px] md:mx-1 lg:mx-3 list-none hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].movies}
                </li>
                <li className="mx-2 py-[1px] px-[2px] md:mx-1 lg:mx-3 list-none hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].new_and_popular}
                </li>

                <li className="mx-2 py-[1px] px-[2px] md:mx-1 lg:mx-3 list-none hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].mylist}
                </li>
                <li className="mx-2 py-[1px] px-[2px] md:mx-1 lg:mx-3 list-none hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].browsebylanguage}
                </li>
              </div>

              <div className=" items-center text-white col-span-4 cursor-pointer hidden md:hidden sm:flex">
                <li className="mx-2 py-[1px] px-[2px] md:mx-1 list-none hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].home}
                </li>
                <li className="mx-2 py-[1px] px-[2px] md:mx-1 list-none hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].tvshow}
                </li>
                <li className="mx-2 py-[1px] px-[2px] md:mx-1 list-none  hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].movies}
                </li>
                <li className="mx-2 py-[1px] px-[2px] md:mx-1 list-none hover:bg-gray-200 rounded-sm">
                  :
                </li>
              </div>

              <ul className=" text-white  col-span-auto lg:col-span-2 justify-end hidden sm:flex">
                <li
                  className="mx-3 md:mx-2 py-[1px] px-[2px] cursor-pointer"
                  onClick={togglerSeach}
                >
                  <SearchIcon />
                </li>
                <li className="mx-4 md:mx-3 py-[1px] px-[2px] cursor-pointer">
                  <BellIcon />
                </li>
                <li className="flex  py-[2px] px-[3px] items-center cursor-pointer hover:bg-slate-400 rounded-sm">
                  <SmallUserIcon className="md:size-8" />
                  <DownArrowIcon
                    onClick={() => {
                      setdropdownShow(!dropdownShow);
                    }}
                  />
                </li>
              </ul>

              <div className="col-span-3 flex items-center text-white  cursor-pointer justify-between relative sm:hidden ">
                <li className="mx-3 py-[1px] px-[10px] text-xl list-none hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].tvshow}
                </li>
                <li className="mx-4 py-[1px] text-xl px-[5x] list-none hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].movies}
                </li>
                <li className="mx-4 py-[1px] text-xl px-[5px] list-none hover:bg-gray-200 rounded-sm">
                  {langauges[appLang].mylist}
                </li>
              </div>
            </>
          )}
        </div>
      )}
      <div class="sm:hidden" id="mobile-menu">
        <div class="fixed flex bottom-0 w-full justify-around px-2  border-t-[1px] z-1 bg-gray-500">
          <a
            href="#"
            class="px-2 py-1 flex flex-col items-center justify-center hover:text-white text-slate-300 "
          >
            <HomeIcon onClick={closeSearchPage} />
            <p className="text-center text-xs ">Home</p>
          </a>
          <a
            href="#"
            class=" px-1 py-1 flex flex-col items-center justify-center text-slate-300 "
            onClick={togglerSeach}
          >
            <SearchIcon />
            <p className="text-center text-xs align-center ">Search</p>
          </a>
          <a class=" px-1 py-1 flex flex-col items-center justify-center text-slate-300 ">
            <CommingIcon />
            <p className="text-center text-xs">Comming Soon</p>
          </a>
          <a
            href="#"
            class="px-2 py-1 flex flex-col items-center justify-center text-slate-300 "
          >
            <DownloadIcon />
            <p className="text-center text-xs  ">Download</p>
          </a>
          <a
            href="#"
            class=" px-2 py-1 flex flex-col items-center justify-center text-slate-300 "
          >
            <MoreIcon />
            <p className="text-center text-xs ">More</p>
          </a>
        </div>
      </div>

      {dropdownShow && User?.email && (
        <div
          className="absolute right-5 top-14 z-10 mt-2 w-auto py-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
  "
        >
          <li className="list-none items-center my-1 hover:bg-indigo-100 px-1 py-0  text-sm rounded-sm mx-1 flex  cursor-pointer">
            <UserIcon />
            <p className="ml-2"> {langauges[appLang].profile}</p>
          </li>
          <li
            className="list-none items-center my-1 hover:bg-indigo-100 px-1 py-0 text-sm rounded-sm mx-1 flex  cursor-pointer  "
            onClick={handleSignOut}
          >
            <LogoutIcon /> <p className="ml-2">{langauges[appLang].signout}</p>
          </li>
        </div>
      )}
    </nav>
  );
};

export default Header;
