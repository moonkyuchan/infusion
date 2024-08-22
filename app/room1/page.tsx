import React from "react";
import { useState } from "react";
import { Grid, Box, Divider, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { useTheme, styled } from "@mui/material/styles";
import Link from "next/link";

import Dashboard from "./_components/dashboard/dashboard";

export default function Page() {
  return (
    <Grid container xs={10}>
      <Dashboard />
      <Grid container xs={4} justifyContent={"center"} alignItems={"center"}>
        하하
      </Grid>
    </Grid>
  );
}
