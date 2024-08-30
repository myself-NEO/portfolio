import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif, "Arial"',
  },
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#333333",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <HomePage />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
