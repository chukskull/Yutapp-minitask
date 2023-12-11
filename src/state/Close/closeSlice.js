import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  value: false,
};

const closeSlice = createSlice({
  name: "close",
  initialState: initailState,
  reducers: {
    openDial: (state) => {
      state.value = true;
    },
    closeDial: (state) => {
      state.value = false;
    },
  },
});

export const { closeDial, openDial } = closeSlice.actions;
export default closeSlice.reducer;
