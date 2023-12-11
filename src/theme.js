import { grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900], // Dark gray
    },
    secondary: {
      main: grey[800], // Medium gray
    },
    error: {
      main: red.A400, 
    },
    text: {
      primary: '#000000', // Black for primary text
      secondary: grey[600], // Dark gray for secondary text
    },
  },
});

export default theme;
