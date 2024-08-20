"use client";
import { Grid, Typography, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Page() {
  const theme = useTheme();
  return (
    <Grid item xs={10}>
      <Box>App Page입니다.</Box>
    </Grid>
  );
}
