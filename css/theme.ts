"use client";

import { fontPretendard } from "./font";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
  typography: {
    h8: {
      fontSize: "16px",
      fontWeight: 400, // 원하는 폰트 두께 설정
    },
    fontFamily: fontPretendard.style.fontFamily,
  } as ThemeOptions["typography"],
  palette: {
    primary: {
      main: "#00A9E4",
    },
  },
});

export default theme;
