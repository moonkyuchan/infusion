"use client";
import React from "react";
import { useState } from "react";
import { Grid, ListItemButton, ListItemText, Box } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Link from "next/link";

import { infusionTitle } from "../lib/data";

export default function SideNav() {
  const [focus, setFocus] = useState(1);
  const theme = useTheme();

  const handleFocus = (id: number) => {
    setFocus(id);
  };

  return (
    <Grid
      flexDirection={"column"}
      sx={{
        padding: "20px 10px",
        backgroundColor: theme.palette.grey[100],
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        height: "100%",
      }}
    >
      <Grid>
        {infusionTitle.map((ele) => (
          <React.Fragment key={ele.id}>
            <Link href={ele.path} passHref style={{ textDecoration: "none" }}>
              <StyledListButton
                selected={focus === ele.id}
                onClick={() => handleFocus(ele.id)}
                divider={true}
              >
                <ListItemText
                  primary={ele.name}
                  primaryTypographyProps={{
                    fontWeight: "700",
                    letterSpacing: 2,
                    fontSize: "2rem",
                  }}
                />
              </StyledListButton>
            </Link>
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
}

const StyledListButton = styled(ListItemButton)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    textAlign: "center",
    color: selected ? "white" : theme.palette.grey[300],
    transition: "background-color 0.3s, color 0.3s",
    backgroundColor: theme.palette.grey[50],

    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
    }, // 기본 선택된 배경색 제거
    "&.Mui-selected:hover": {
      backgroundColor: theme.palette.primary.main, // 선택된 상태에서 호버 시 색상 변화 없애기
    },
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
      color: "white",
    },
  })
);
