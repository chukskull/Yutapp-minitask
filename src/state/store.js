import { configureStore } from "@reduxjs/toolkit";
import closeReducer from "./Close/closeSlice.js";

export const store = configureStore({
  reducer: {
    close: closeReducer,
  },
});
