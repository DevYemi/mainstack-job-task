import { ComponentProps } from "react";

export interface IconTypes extends ComponentProps<"svg"> {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  inheritColor?: boolean;
}
