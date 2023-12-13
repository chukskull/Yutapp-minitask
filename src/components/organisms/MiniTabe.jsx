import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import HeadTable from "../molecules/HeadTable";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import FlowTable from "../molecules/FlowTable";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "80px",
  lineHeight: "80px",
  border: "1px solid #ccc",
  borderRadius: "0px",
}));

const BiggerItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "600px",
  lineHeight: "600px",
  border: "1px solid #ccc",
  borderRadius: "0px",
}));

const actionIcons = <UpcomingOutlinedIcon sx={{ fontSize: 20 }} />;
const githubIcon = <GitHubIcon sx={{ fontSize: 20 }} />;

export default function MiniTable() {
  return (
    <Box sx={{ width: "100%", m: 4 }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <Grid item xs={6}>
          <Item elevation={3}>
            <HeadTable icon={actionIcons} text={"Add Action"} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={3}>
            <HeadTable icon={githubIcon} text={"Add Test"} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <BiggerItem elevation={3}>
            <FlowTable flow={"right"} />
          </BiggerItem>
        </Grid>
        <Grid item xs={6}>
          <BiggerItem elevation={3}>
            <FlowTable flow={"left"} />
          </BiggerItem>
        </Grid>
      </Grid>
    </Box>
  );
}
