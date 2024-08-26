import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/css/theme";

import { Grid } from "@mui/material";
import Header from "@/app/_components/header/Header";
import SideNav from "./_components/sideNav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Grid container height={"calc(100vh - 120px)"} wrap="nowrap">
              <Grid item xs={2} minWidth={220}>
                <SideNav />
              </Grid>
              <Grid item xs={10}>
                {children}
              </Grid>
            </Grid>
          </ThemeProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
