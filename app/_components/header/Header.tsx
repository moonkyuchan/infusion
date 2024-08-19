"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { menuList } from "./lib/data";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="fixed"
      sx={{ height: "100px", color: "black", backgroundColor: "white" }}
    >
      <Grid
        container
        alignItems={"center"}
        sx={{ height: "100%", padding: "0 50px" }}
      >
        <Grid item xs>
          <Typography variant="h3" fontWeight={800} component="div">
            Friend Clinic
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container alignItems="center" justifyContent="space-around">
            {menuList.map((ele) => {
              return (
                <Typography
                  key={ele.id}
                  fontWeight={"700"}
                  component="span"
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    "&:hover": {
                      color: "primary.main",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "primary.main",
                        transform: "scaleX(1)", // 밑줄 보이게 하기
                        transformOrigin: "bottom left",
                      },
                    },
                  }}
                >
                  {ele.name}
                </Typography>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container alignItems="center" justifyContent="center">
            로그인 | 회원가입
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
