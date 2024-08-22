"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
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
    <Card
      sx={{
        minWidth: 100,
        height: 150,
        border: `1px solid ${theme.palette.grey[100]}`,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: `1px solid ${theme.palette.grey[300]}`,
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4" fontWeight={800}>
            1
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ margin: "0 20px" }} />
          <Typography variant="h5" letterSpacing={2} fontWeight={600}>
            문규찬
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <LinearProgressWithLabel value={progress} />
        </Box>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <Button size="small">Pause</Button>
          <Divider orientation="vertical" flexItem sx={{ margin: "0 1px" }} />
          <Button size="small">Quit</Button>
        </Box>
      </CardActions>
    </Card>
  );
}
