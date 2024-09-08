"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  CardActionArea,
  Button,
  Grid,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function OffClientCard({ data }: any) {
  const theme = useTheme();

  return (
    <StyledCardWrap>
      <CardContent>
        <Grid container direction={"column"} alignItems={"center"} gap={1}>
          <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
            sx={{ borderBottom: `1px solid ${theme.palette.grey[200]}` }}
          >
            <Grid item xs={1}>
              <Typography variant="h4" fontWeight={800}>
                {data.key}
              </Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item xs={8}>
              <Typography
                variant="h5"
                letterSpacing={2}
                fontWeight={600}
              ></Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <Button size="large">
            <AddCircleIcon fontSize="large" sx={{ fontSize: "52px" }} />
          </Button>
        </Box>
      </CardActions>
    </StyledCardWrap>
  );
}

const StyledCardWrap = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 100,
  minheight: 150,
  border: `1px solid ${theme.palette.grey[100]}`,
}));
