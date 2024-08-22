import React from "react";
import { useState } from "react";
import {
  Grid,
  ListItemButton,
  ListItemText,
  Box,
  CardActionArea,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import ClientCard from "../card/card";

export default function Dashboard() {
  return (
    <Grid xs={8}>
      <Box width={"100%"} padding={"30px"}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Array.from({ length: 9 }).map((_, idx) => (
            <Grid item key={idx} xs={4}>
              <ClientCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}
