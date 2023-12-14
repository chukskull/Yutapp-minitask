import { Container, Typography } from "@mui/material";
import theme from "@/theme";

import AddButton from "@/components/atoms/AddButton";
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
        gap: "0.75rem",
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

      <AddButton type={text === "Add Action" ? "action" : "test"} />
    </Container>
  );
};

export default HeadTable;
