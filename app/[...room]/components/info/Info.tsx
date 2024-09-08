"use client";

import React from "react";
import { useState } from "react";
import {
  Grid,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import { useRecoilState } from "recoil";
import { clientAtom } from "@/recoil/atom/clientAtom";

const rows = [
  { id: 1, name: "남은시간", value: "11:02:34" },
  ,
  { id: 2, name: "이름", value: "문규찬" },
  ,
  { id: 3, name: "차트번호", value: "123452" },
  { id: 4, name: "루틴", value: "IV400" },
];

export default function Info() {
  const theme = useTheme();
  const [atomClient, setAtomClient] = useRecoilState(clientAtom);
  console.log(atomClient, "????");
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
      height={"100%"}
      padding={3}
    >
      <Box
        bgcolor={theme.palette.grey[100]}
        width={"100%"}
        height={"100%"}
        padding={2}
      >
        <TableContainer component={Paper} sx={{ padding: "10px" }}>
          <Table>
            <TableBody>
              {rows.map((ele) => (
                <TableRow
                  key={ele?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    size="medium"
                    sx={{
                      minWidth: 100,
                      fontWeight: "800",
                      fontSize: 25,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {ele?.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "700", fontSize: 25 }}
                  >
                    {ele?.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
}
