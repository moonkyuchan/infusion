import { Grid, Box, Divider, Container } from "@mui/material";

import Routine from "./_components/routine/routine";

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container wrap="nowrap" height={"calc(100vh - 120px)"}>
      <Grid item xs={8} minWidth={600}>
        {children}
      </Grid>
      <Grid item xs={4} minWidth={300}>
        <Routine />
      </Grid>
    </Grid>
  );
}
