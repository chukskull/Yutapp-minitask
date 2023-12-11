import React from "react";
import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Button sx={{ display: "flex", alignItems: "center" }}>
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

          backgroundColor: "#e5f7ff",
        }}
      >
        <AddIcon sx={{ fontSize: 24, color: "#04b3ff" }} />
      </Box>
    </Button>
  );
};

export default AddButton;
