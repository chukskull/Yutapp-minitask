import { Container, Typography } from "@mui/material";
import theme from "../../theme";

import AddButton from "../atoms/AddButton";
import React from "react";

const HeadTable = ({ icon, text }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        p: 0,
        m: 0,
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {icon}
      <Typography
        variant="h7"
        component="h7"
        fontWeight={"medium"}
        color={theme.palette.text.primary}
        sx={{ m: 0, p: 0, textAlign: "left" }}
        fontSize={"18px"}
      >
        {text}
      </Typography>

      <AddButton />
    </Container>
  );
};

export default HeadTable;
