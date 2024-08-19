import { CSSProperties } from "react";

export type ButtonTypes = {
  w?: string | number;
  h?: string;
  style?: CSSProperties;
  children: React.ReactNode;
};
