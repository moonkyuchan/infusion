"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import LinearProgressWithLabel from "../progressBar/progressBar";

export default function ClientCard() {
  const theme = useTheme();
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledCardWrap>
      <CardContent>
        <Grid container direction={"column"} alignItems={"center"} gap={1}>
          <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
            sx={{ borderBottom: `1px solid ${theme.palette.grey[200]}` }}
          >
            <Grid item xs={1}>
              <Typography variant="h4" fontWeight={800}>
                1
              </Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item xs={8}>
              <Typography variant="h5" letterSpacing={2} fontWeight={600}>
                문규찬
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ width: "100%" }}>
            <LinearProgressWithLabel value={progress} />
          </Box>
        </Grid>
      </CardContent>
      <CardActions sx={{ borderTop: `1px solid ${theme.palette.grey[200]}` }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <Button size="small">Pause</Button>
          <Divider orientation="vertical" flexItem />
          <Button size="small">Quit</Button>
        </Box>
      </CardActions>
    </StyledCardWrap>
  );
}

const StyledCardWrap = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 100,
  minheight: 150,
  border: `1px solid ${theme.palette.grey[100]}`,
}));
