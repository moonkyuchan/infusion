"use client";

import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

function Header() {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{ height: "120px", backgroundColor: theme.palette.primary.main }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item xs={1} textAlign={"center"}></Grid>
      <Grid item xs={9} textAlign={"center"}>
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: "80px",
            color: "white",
            letterSpacing: 10,
          }}
        >
          수액실 현황
        </Typography>
      </Grid>
      <Grid item xs={2} textAlign={"center"}></Grid>
    </Grid>
  );
}
export default Header;
