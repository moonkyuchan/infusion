"use client";
import { useState } from "react";
import { styled, Theme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Grid,
  Container,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import { menuList } from "./lib/data";

import HoverTypography from "../common/typography/HoverTypography";

export default function Header() {
  const [isHovering, setIsHovering] = useState(false);
  console.log(isHovering);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <ExpandableBox onMouseOut={handleMouseOut}>
      <Container sx={{ height: "inherit" }}>
        <Grid container>
          {menuList.map((ele) => {
            return (
              <Grid
                container
                key={ele.id}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
              >
                <Grid sx={{ height: "100px", lineHeight: "100px" }}>
                  <HoverTypography>
                    <span onMouseOver={handleMouseOver}>{ele.name}</span>
                  </HoverTypography>
                </Grid>
                <Grid
                  sx={{
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <HoverTypography>이기호</HoverTypography>
                  <HoverTypography>양영상</HoverTypography>
                  <HoverTypography>문규찬</HoverTypography>
                  <HoverTypography>하하</HoverTypography>
                  <HoverTypography>하하</HoverTypography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ExpandableBox>
  );
}

const ExpandableBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100px", // 기본 높이 100px
  // backgroundColor: theme.palette.primary.main
  backgroundColor: "#ffffff",
  overflow: "hidden",
  transition: "height 0.3s ease", // 높이가 부드럽게 변하도록 설정
  "&:hover": {
    height: "300px", // 마우스를 올리면 높이가 500px로 확장
  },
}));
