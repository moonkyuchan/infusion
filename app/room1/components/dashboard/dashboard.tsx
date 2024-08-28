import React from "react";
import { useState } from "react";
import { Grid, Box } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import ClientCard from "../clientCard/ClientCard";

export default function Dashboard() {
  return (
    <Box padding={"30px"}>
      <Grid container rowSpacing={4} columnSpacing={3}>
        {Array.from({ length: 12 }).map((_, idx) => (
          <Grid item key={idx} xs={4}>
            <ClientCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
