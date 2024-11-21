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
      movieList: null,
      page: 1,
    },
    searchResults: null,
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
    addMovies: (state, action) => {
      if (state.tvShows.movieList === null || state.tvShows.page === 1) {
        state.tvShows.movieList = action.payload;
      } else {
        state.tvShows.movieList = [
          ...state.tvShows.movieList,
          ...action.payload,
        ];
      }
    },
    increasePageNo: (state) => {
      state.tvShows.page = state.tvShows.page + 1;
    },
    addSearchResult: (state, action) => {
      state.searchResults = action.payload;
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
  increasePageNo,
  addMovies,
  addSearchResult,
} = moviesSlice.actions;

export default moviesSlice.reducer;
