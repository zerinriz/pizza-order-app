import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: {
      light: "#5c67a3",
      main: "#3f4771",
      dark: "#2e355b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff79b0",
      main: "#ff4081",
      dark: "#c60055",
      contrastText: "#fff",
    },
    openTitle: "#3f4771",
    protectedTitle: "#396",
    type: "light",
  },
});

export default theme;
