import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSearchBar: false,
    movieModalOpen: false,
    selectedMovieId: null,
    lang: "en",
    loader: false,
  },

  reducers: {
    toggleSearchBar: (state, action) => {
      state.showSearchBar = !state.showSearchBar;
    },
    closedSearch: (state, action) => {
      state.showSearchBar = false;
    },
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    openModal: (state) => {
      state.movieModalOpen = true;
    },
    closeModal: (state) => {
      state.movieModalOpen = false;
    },
    setSelectedMovieId: (state, action) => {
      state.selectedMovieId = action.payload;
    },
  },
});

export const {
  toggleSearchBar,
  closedSearch,
  changeLanguage,
  setLoader,
  openModal,
  closeModal,
  setSelectedMovieId,
} = appSlice.actions;

export default appSlice.reducer;
