import { styled, Theme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function HoverTypography(props: any) {
  return <StyledHoverTypography>{props.children}</StyledHoverTypography>;
}

const StyledHoverTypography = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    display: "inline-block",
    color: "black",
    position: "relative",
    cursor: "pointer",
    fontWeight: 700,
    "&:hover": {
      color: theme.palette.primary.main,
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: -2,
        left: 0,
        width: "100%",
        height: "2px",
        backgroundColor: theme.palette.primary.main,
        transform: "scaleX(1)", // 밑줄 보이게 하기
        transformOrigin: "bottom left",
      },
    },
  })
);
