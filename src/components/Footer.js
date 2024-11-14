import React from "react";
import { ReactComponent as FaceBookIcon } from "../Assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../Assets/Instgram.svg";
import { ReactComponent as TwitterIcon } from "../Assets/twitter.svg";
import { ReactComponent as YouTubeIcon } from "../Assets/youtube.svg";

import { SUPPORTED_LANGAUGES } from "../util/constant";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../util/appSlice";
import { langauges } from "../util/LagaugeConstants";

const Footer = () => {
  const dispatch = useDispatch();
  const appLang = useSelector((store) => store.app.lang);
  return (
    <div className="mx-auto w-full max-w-screen-xl pb-3 mt-10 ">
      <div className="flex items-center text-white">
        <li className="list-none mx-2 p-1">
          <FaceBookIcon />
        </li>
        <li className="list-none mx-2 p-1">
          <InstagramIcon />
        </li>
        <li className="list-none mx-2 p-1">
          <TwitterIcon />
        </li>
        <li className="list-none mx-2 p-1">
          <YouTubeIcon />
        </li>
        <div className=" space-y-4 mx-8 p-1 ">
          <select
            className="bg-transparent rounded border border-white px-2 md:px-4 py-1  text-white "
            onChange={(e) => dispatch(changeLanguage(e.target.value))}
          >
            {SUPPORTED_LANGAUGES.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="text-slate-700"
              >
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <ul className="text-gray-600 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className=" hover:underline">
                {langauges[appLang].audio_description}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].investore_relations}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].privacy}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].contact_us}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="text-gray-600 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className=" hover:underline">
                {langauges[appLang].help_center}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].jobs}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].legal_notices}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {
                  langauges[appLang]
                    .do_not_sell_or_share_my_personal_information
                }
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="text-gray-600 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className=" hover:underline">
                {langauges[appLang].gift_cards}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].netfli_shop}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].cookies_prefernces}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].add_choices}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="text-gray-600 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className=" hover:underline">
                {langauges[appLang].media_center}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].terms_of_use}
              </a>
            </li>

            <li className="mb-4">
              <a href="#" className="hover:underline">
                {langauges[appLang].corporate_information}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
