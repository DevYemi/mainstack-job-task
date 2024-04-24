import localFont from "next/font/local";

const degularFont = localFont({
  src: [
    {
      path: "./../../../public/fonts/degular/Degular-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/Degular-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/Degular-Medium.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/Degular-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/Degular-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/Degular-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/Degular-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/Degular-Black.otf",
      weight: "800",
      style: "normal",
    },
    // Italics
    {
      path: "./../../../public/fonts/degular/Degular-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/Degular-LightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/Degular-MediumItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/Degular-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/Degular-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/Degular-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/Degular-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/Degular-BlackItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--degular-font",
  display: "swap",
});

export default degularFont;
