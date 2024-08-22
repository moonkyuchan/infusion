"use client";
import React from "react";
import { useState } from "react";
import {
  LinearProgress,
  Box,
  Typography,
  LinearProgressProps,
} from "@mui/material";

export default function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: 20, borderRadius: 4 }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={"700"}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
