import React from "react";
import { useState } from "react";
import { Grid, Box, Divider, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { useTheme, styled } from "@mui/material/styles";
import Link from "next/link";

import Dashboard from "./_components/dashboard/dashboard";

export default function Page() {
  return (
    <Grid container height={"100%"} wrap="nowrap">
      <Grid item xs={8} minWidth={600}>
        <Dashboard />
      </Grid>
      <Grid item xs={4} minWidth={300}>
        하하
      </Grid>
    </Grid>
  );
}
