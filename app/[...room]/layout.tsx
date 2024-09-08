import { Grid } from "@mui/material";

import RecoilRootWrapper from "../../recoil/recoilWrapper/RecoilWrapper";
import Info from "./components/info/Info";

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRootWrapper>
      <Grid container wrap="nowrap" height={"calc(100vh - 120px)"}>
        <Grid item xs={8} minWidth={600}>
          {children}
        </Grid>
        <Grid item xs={4} minWidth={300}>
          <Info />
        </Grid>
      </Grid>
    </RecoilRootWrapper>
  );
}
