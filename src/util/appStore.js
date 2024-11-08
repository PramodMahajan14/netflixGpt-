import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import MoviesReducer from "./moviesSlice.js";
import AppReducer from "./appSlice.js";

const appStore = configureStore({
  reducer: {
    app: AppReducer,
    user: userReducer,
    movies: MoviesReducer,
  },
});

export default appStore;
