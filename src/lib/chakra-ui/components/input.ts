import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    border: "none",
    fontSize: "1.4rem",
    lineHeight: "1.6rem",
    fontWeight: "500",
    height: "4.8rem",
    rounded: "1.2rem",
    outline: "none",
    _focusVisible: {
      outlineWidth: "3px",
      outlineColor: "primary.300",
      outlineOffset: "0",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
