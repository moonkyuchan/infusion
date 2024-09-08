import React from "react";
import { useState } from "react";
import { Grid, Box, Divider, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { useTheme, styled } from "@mui/material/styles";
import Link from "next/link";

import OnClientCard from "./components/onClientCard/onClientCard";
import OffClientCard from "./components/offClientCard/offClientCard";

const mockData = [
  { key: 1, name: "문규찬", num: "123456", routine: "IV200", onOff: true },
  { key: 2, name: "이기호", num: "123456", routine: "IV200", onOff: true },
  ,
  { key: 3, name: "양영상", num: "123456", routine: "IV200", onOff: true },
  ,
  { key: 4, name: "이강희", num: "123456", routine: "IV200", onOff: true },
  ,
  { key: 5, name: "서효민", num: "123456", routine: "IV200", onOff: false },
  ,
  { key: 6, name: "최유진", num: "123456", routine: "IV200", onOff: true },
  ,
  { key: 7, name: "한태희", num: "123456", routine: "IV200", onOff: false },
  { key: 8, name: "성혜진", num: "123456", routine: "IV200", onOff: true },
  { key: 9, name: "조상우", num: "123456", routine: "IV200", onOff: false },
  { key: 10, name: "곽희붕", num: "123456", routine: "IV200", onOff: true },
  { key: 11, name: "김형준", num: "123456", routine: "IV200", onOff: false },
  ,
];

export default function Page({ params }: any) {
  // data fetch 해서 배열안의 렝스만큼 보여준다 ( 하지만 기본적으로 베드 렝스는 다 가지고 있음)
  // 예를들어 12개의 각자 키가 있고, 해당 키와 베드의 키를 매핑
  // 그리고 각 객체의 불리언값에 따라 데이터가 있고 없고를 판단

  return (
    <Box padding={"30px"}>
      <Grid container rowSpacing={4} columnSpacing={3}>
        {mockData.map((ele) =>
          ele?.onOff ? (
            <Grid item key={ele?.key} xs={4}>
              <OnClientCard data={ele} />
            </Grid>
          ) : (
            <Grid item key={ele?.key} xs={4}>
              <OffClientCard data={ele} />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
