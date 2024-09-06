import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";

import App from "./app";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    }
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: 'Raleway, Area, sans-serif',
    fontSize: 14,

    body2: {
      fontSize: '1.4rem',
      color: '#727280',
    },

    // h2: {
    //   fontSize: '4rem',
    //   fontWeight: 700,
    //   lineHeight: '4.97rem'
    // },
    // h3: {
    //   fontSize: '1.6rem',
    // },
    // h4: {
    //   fontSize: '1.1rem',
    // }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          html: { fontSize: '62.5%' }
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
