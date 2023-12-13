import { createSlice } from "@reduxjs/toolkit";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";

const initialState = {
  string: "",
  icon: "",
};

const modalType = createSlice({
  name: "modalType",
  initialState,
  reducers: {
    testModal: (state) => {
      state.string = "Add Test";
      state.icon = <BoltOutlinedIcon sx={{ fontSize: "48px", p: 0, mr: 2 }} />;
    },
    actionModal: (state) => {
      state.string = "Add Action";
      state.icon = (
        <AddModeratorOutlinedIcon sx={{ fontSize: "48px", p: 0, mr: 2 }} />
      );
    },
  },
});

export const { testModal, actionModal } = modalType.actions;
export default modalType.reducer;
