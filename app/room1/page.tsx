"use client";
import React from "react";
import { useState } from "react";
import { Grid, Box, Divider, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { useTheme, styled } from "@mui/material/styles";
import Link from "next/link";

export default function Page() {
  const theme = useTheme();
  return (
    <Grid container xs={10}>
      <Grid container xs={8} justifyContent={"center"} alignItems={"center"}>
        하하
      </Grid>
      <Grid container xs={4} justifyContent={"center"} alignItems={"center"}>
        하하
      </Grid>
    </Grid>
  );
}
