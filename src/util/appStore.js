import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice.js";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
  },
});

export default appStore;
