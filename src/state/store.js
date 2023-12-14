import { configureStore } from "@reduxjs/toolkit";
import closeReducer from "@/state/Close/closeSlice.js";
import typeReducer from "@/state/ModalType/modaltype.js";

export const store = configureStore({
  reducer: {
    close: closeReducer,
    modalType: typeReducer,
  },
});
