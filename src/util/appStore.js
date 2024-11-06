import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import MoviesReducer from "./moviesSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: MoviesReducer,
  },
});

export default appStore;
