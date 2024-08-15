import { createTheme } from "@mui/material/styles";
import { cyan, blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#DBE2EF",
      main: "#3F72AF",
      dark: "#364F6B",
      contrastText: "#fff",
    },
    secondary: {
      light: "#EFBBCF",
      main: "#C3AED6",
      dark: "#8675A9",
      contrastText: "#000",
    },
    openTitle: blue["700"],
    protectedTitle: cyan["700"],
    type: "light",
  },
});

export default theme;
