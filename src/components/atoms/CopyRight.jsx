import { Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Typography
      variant="h6"
      color="text.secondary"
      align="center"
      fontSize={"1rem"}
    >
      <span>
        {"Copyright © Yutapp"}
        <span style={{ color: "#65cefd" }}> {"All rights reserved "}</span>
        {new Date().getFullYear()}
        {"."}
      </span>
    </Typography>
  );
}
