import { configureStore } from "@reduxjs/toolkit";
import closeReducer from "./Close/closeSlice.js";
import typeReducer from "./ModalType/modaltype.js";

export const store = configureStore({
  reducer: {
    close: closeReducer,
    modalType: typeReducer,
  },
});
