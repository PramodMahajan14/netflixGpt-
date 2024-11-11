import { API_OPTIONS } from "../util/constant";
import { useDispatch } from "react-redux";
import { addSearchResults } from "../util/moviesSlice";

import { setLoader } from "../util/appSlice";

const useSearchMovies = (Query) => {
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    try {
      const MoviesData = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const jsondata = await MoviesData.json();
      return jsondata.results;
    } catch (err) {
      console.log(err);
      dispatch(setLoader(false));
    }
  };

  const handleSearchMovies = async () => {
    dispatch(setLoader(true));
    try {
      //   const GPT_Query =
      //     "Act as s movies or (Series,Tv Show,..etc) recommendation system (subscription video on-demand over-the-top streaming service) and suggest some result for the query : " +
      //     Query +
      //     ". only give me name of 5 movies, comma sepearated like the example result given ahead. Example Andaz apna apna, Hera Pheri, chupke chupke, don";
      //   const searchGPTResult = await openai.chat.completions.create({
      //     messages: [{ role: "user", content: Query }],
      //     model: "gpt-3.5-turbo",
      //   });

      //   const gptMovies =
      //     searchGPTResult.choices?.[0].message?.content.split(",");

      const staticDemoResult =
        "Dil Chahta Hai, Queen, 3 Idiots, Gully Boy, Taare Zameen Par";
      const staticDemoResultArray = staticDemoResult.split(",");
      const PromiseArray = staticDemoResultArray.map((movie) =>
        searchMovieTMDB(movie)
      );
      dispatch(setLoader(false));
      const TMDBResults = await Promise.all(PromiseArray);
      dispatch(
        addSearchResults({
          searchedMoviesName: staticDemoResultArray,
          searchedMovies: TMDBResults,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(setLoader(false));
    }
  };
  return handleSearchMovies;
};

export default useSearchMovies;
