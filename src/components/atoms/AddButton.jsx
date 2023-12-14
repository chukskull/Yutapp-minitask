import React from "react";
import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import theme from "@/theme";
import { useDispatch } from "react-redux";
import { openDial } from "@/state/Close/closeSlice";
import { actionModal, testModal } from "@/state/ModalType/modaltype";

const AddButton = ({ type }) => {
  const dispatch = useDispatch();

  return (
    <Button
      size="small"
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        padding: "0px",
        minWidth: "40px",
        height: "40px",
      }}
      onClick={
        type === "action"
          ? () => dispatch(actionModal()) && dispatch(openDial())
          : () => dispatch(testModal()) && dispatch(openDial())
      }
    >
      <Box
        sx={{
          display: "flex",
          height: "40px",
          width: "40px",
          "&:hover": {
            borderRadius: 2,
            transition: "border-radius 0.2s ease-in-out",
            backgroundColor: "#d6faff",
          },
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,

          backgroundColor: theme.palette.buttonColor.secondary,
        }}
      >
        <AddIcon
          sx={{ fontSize: 24, color: theme.palette.buttonColor.primary }}
        />
      </Box>
    </Button>
  );
};

export default AddButton;
