import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieTvshow: "popular",
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    searchedMoviesName: null,
    searchedMovies: null,
    tvShows: {
      tvList: null,
      page: 1,
    },
  },
  reducers: {
    addMovieTvType: (state, action) => {
      state.movieTvshow = action.payload;
    },
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
    addTvshows: (state, action) => {
      if (state.tvShows.tvList === null || state.tvShows.page === 1) {
        state.tvShows.tvList = action.payload;
      } else {
        state.tvShows.tvList = [...state.tvShows.tvList, ...action.payload];
      }
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addSearchResults,
  addTvshows,
  addMovieTvType,
} = moviesSlice.actions;

export default moviesSlice.reducer;
