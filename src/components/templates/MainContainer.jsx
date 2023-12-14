import { Container, Typography } from "@mui/material";
import React from "react";
import Copyright from "@/components/atoms/CopyRight";
import MiniTable from "@/components/organisms/MiniTabe";

export const MainContiner = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        p: 4,
        height: "100vh",
        flex: "flex-col",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      <Typography
        variant="h4"
        component="h6"
        paddingLeft={"4rem"}
        fontSize={"2rem"}
        fontWeight={"bold"}
      >
        {"Title"}
      </Typography>
      <MiniTable />
      <Copyright />
    </Container>
  );
};

export default MainContiner;
