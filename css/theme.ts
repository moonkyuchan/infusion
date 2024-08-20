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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "& .MuiTouchRipple-root": {
            color: "rgba(0, 169, 228, 0.4)", // 리플 색상 변경 (투명도 20%의 검정색)
          },
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
    grey: {
      50: "#f9f9f9", // Lightest grey
      100: "#f0f0f0", // Light grey
      200: "#e0e0e0", // Grey
      300: "#c0c0c0", // Darker grey
      400: "#a0a0a0",
      500: "#808080", // Standard grey
      600: "#606060",
      700: "#404040",
      800: "#202020",
      900: "#000000", // Darkest grey
    },
  },
});

export default theme;
