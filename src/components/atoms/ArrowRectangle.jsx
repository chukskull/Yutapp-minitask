import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import theme from "@/theme";

const StyledRectangle = styled(Box)(({ theme }) => ({
  border: "2px solid #ddd",
  width: "120px",
  height: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 0",
  borderRadius: "16px 16px",
  backgroundColor: "#0000000",
  position: "relative",
}));

const StyledLine = styled("div")({
  border: "1px solid #ddd",
  width: "45px",

  position: "absolute",
  top: "55%",
  left: "0px",
  transform: "translate(-98%, -98%)",
});

const StyledLine2 = styled("div")({
  border: "1px solid #ddd",
  width: "40px",

  position: "absolute",
  top: "55%",
  left: "156px",
  transform: "translate(-98%, -98%)",
});

const StyledTriangle = styled(Box)(({ theme }) => ({
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderTop: "10px solid #ddd",
  position: "absolute",
  top: "28%",
  right: "-50px",
  transform: "rotate(-91deg)",
}));
const ArrowRectangle = () => {
  return (
    <div>
      <StyledRectangle>
        <Typography
          variant="h6"
          color={theme.palette.text.secondary}
          fontSize={"16px"}
        >
          {"Action"}
        </Typography>
        <StyledLine />
        <StyledLine2 />
        <StyledTriangle />
      </StyledRectangle>
    </div>
  );
};

export default ArrowRectangle;
