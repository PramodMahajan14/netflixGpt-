import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSearchBar: false,
    movieModalOpen: false,
    selectedMovieId: null,
    lang: "en",
    region: "IN",
    loader: false,
    preview: [],
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
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setPreview: (state, action) => {
      state.preview.push(action.payload);
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
  setRegion,
  setPreview,
} = appSlice.actions;

export default appSlice.reducer;
