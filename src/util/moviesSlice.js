import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    searchedMoviesName: null,
    searchedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addSearchResults: (state, action) => {
      const { searchedMoviesName, searchedMovies } = action.payload;
      state.searchedMoviesName = searchedMoviesName;
      state.searchedMovies = searchedMovies;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addSearchResults,
} = moviesSlice.actions;

export default moviesSlice.reducer;
