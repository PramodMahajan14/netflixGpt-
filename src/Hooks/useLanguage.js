import { useEffect, useState } from "react";
import { API_OPTIONS } from "../util/constant";

const useLanguage = () => {
  const [Languages, setLanguage] = useState();

  const fetchLanguage = async () => {
    try {
      const resp = await fetch(
        "https://api.themoviedb.org/3/configuration/languages",
        API_OPTIONS
      );
      const data = await resp.json();

      setLanguage(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !Languages && fetchLanguage();
  }, []);

  return Languages;
};

export default useLanguage;
