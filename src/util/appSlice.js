import { createSlice } from "@reduxjs/toolkit";
import SearchBrowse from "../components/SearchBrowse/SearchBrowse";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSearchBar: false,
    movieModalOpen: false,
    SearchBrowseModal: false,
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
    openModal: (state, action) => {
      if (action.payload) {
        state.SearchBrowseModal = true;
      } else {
        state.movieModalOpen = true;
      }
    },
    closeModal: (state, action) => {
      if (action.payload) {
        state.SearchBrowseModal = false;
      } else {
        state.movieModalOpen = false;
      }
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
