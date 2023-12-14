import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowRectangle from "@/components/atoms/ArrowRectangle";
import theme from "@/theme";

import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";

const SmallerItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "start",
  color: theme.palette.text.secondary,
  height: "50px",
  lineHeight: "20px",
  border: "1px solid #ccc",
  borderRadius: "0px",
}));

const BiggerItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "start",
  color: theme.palette.text.secondary,
  height: "100px",

  lineHeight: "100px",
  border: "1px solid #ccc",
  borderRadius: "0px",
}));

const FlowTable = ({ flow }) => {
  const headTitle = flow === "right" ? "Action #" : "Test #";
  return (
    <Box sx={{ width: "70%", p: "2rem 4rem" }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <SmallerItem elevation={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "0.5rem 1rem",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                color={"#000000"}
                fontSize={"18px"}
              >
                {headTitle}
              </Typography>
              <MoreHorizOutlinedIcon sx={{ fontSize: 28 }} />
            </Box>
          </SmallerItem>
        </Grid>
        <Grid item xs={12}>
          <BiggerItem elevation={7}>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                gap: "4rem",
                p: "2rem 1rem",
              }}
            >
              {flow === "right" ? (
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color={theme.palette.text.secondary}
                    fontSize={"16px"}
                  >
                    {"Provider"}
                  </Typography>
                  <ArrowRectangle />
                  <GitHubIcon sx={{ fontSize: 28, p: 0, m: 0 }} />
                </>
              ) : (
                <>
                  <UpcomingOutlinedIcon sx={{ fontSize: 28, p: 0, m: 0 }} />
                  <ArrowRectangle />
                  <Typography
                    variant="h6"
                    gutterBottom
                    color={theme.palette.text.secondary}
                    fontSize={"16px"}
                  >
                    {"Provider"}
                  </Typography>
                </>
              )}
            </Box>
          </BiggerItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlowTable;
