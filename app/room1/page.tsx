import React from "react";
import { useState } from "react";
import { Grid, Box, Divider, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { useTheme, styled } from "@mui/material/styles";
import Link from "next/link";

import Dashboard from "./components/dashboard/dashboard";

export default function Page() {
  return <Dashboard />;
}
