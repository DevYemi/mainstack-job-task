import { defineStyle, defineStyleConfig, cssVar } from "@chakra-ui/react";

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

export const skeletonTheme = defineStyleConfig({
  baseStyle: {
    borderRadius: "1rem",
    [$startColor.variable]: "#d4d4d4",
    [$endColor.variable]: "#b4b4b4",
  },
});
