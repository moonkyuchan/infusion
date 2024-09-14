"use client";

import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import { useRecoilState } from "recoil";
import { clientAtom } from "@/recoil/atom/clientAtom";

const rows = [
  { id: 1, key: "time", name: "남은시간" },
  { id: 2, key: "name", name: "이름" },
  { id: 3, key: "num", name: "차트번호" },
  { id: 4, key: "routine", name: "루틴" },
];

export default function Info() {
  const theme = useTheme();
  const [atomClient, setAtomClient] = useRecoilState(clientAtom);

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
        {atomClient["onOff"] ? (
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
                      {ele.name}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "700", fontSize: 25 }}
                    >
                      {atomClient[ele.key as keyof typeof atomClient]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
      </Box>
    </Grid>
  );
}
