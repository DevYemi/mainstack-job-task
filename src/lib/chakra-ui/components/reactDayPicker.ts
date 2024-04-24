import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
  ".rdp-months",
  ".rdp-month",
  ".rdp-caption",
  ".rdp-caption_label",
  ".rdp-nav",
  ".rdp-nav_button",
  ".rdp-table",
  ".rdp-head_row",
  ".rdp-head_cell",
  ".rdp-row",
  ".rdp-cell",
  ".rdp-button_reset",
]);

export const reactDayPickerTheme = helpers.defineMultiStyleConfig({
  baseStyle: {
    ".rdp-months": {
      display: "flex",
      flexDirection: "column",
    },
    ".rdp-month": {
      display: "flex",
      flexDirection: "column",
      gap: "1.432rem",
    },
    ".rdp-caption": {
      position: "relative",
    },
    ".rdp-caption_label": {
      textAlign: "center",
      fontSize: "1.4rem",
      lineHeight: "2rem",
      fontWeight: 600,
      mx: "auto",
      zIndex: 2,
      position: "relative",
      width: "fit-content",
    },
    ".rdp-nav": {
      zIndex: 1,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      top: "0",
      position: "absolute",
    },
    ".rdp-table": {
      width: "100%",
      color: "primary.300",
      borderSpacing: "0.4rem",
      borderCollapse: "separate",
    },
    ".rdp-head_cell": {
      padding: "0.2rem 1rem",
      color: "gray.400",
      fontSize: "1.18rem",
      lineHeight: "1.348rem",
      fontWeight: 600,
    },
    ".rdp-cell": {
      textAlign: "center",
    },
    ".rdp-button_reset": {
      fontSize: "1.18rem",
      lineHeight: "1.348rem",
      fontWeight: 600,
      textAlign: "center",
      width: "3.2rem",
      height: "3.2rem",
    },
  },
});
