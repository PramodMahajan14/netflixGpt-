import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSearchBar: false,
    lang: "en",
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
  },
});

export const { toggleSearchBar, closedSearch, changeLanguage } =
  appSlice.actions;

export default appSlice.reducer;
