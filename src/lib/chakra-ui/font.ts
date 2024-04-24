import localFont from "next/font/local";

const degularFont = localFont({
  src: [
    {
      path: "./../../../public/fonts/degular/degularthin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/degularlight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/degularmedium.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/degularregular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/degularmedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/degularsemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/degularbold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/degular/degularblack.otf",
      weight: "800",
      style: "normal",
    },
    // Italics
    {
      path: "./../../../public/fonts/degular/degularthinitalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/degularlightitalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/degularmediumitalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/degularregularitalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/degularmediumitalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/degularsemibolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/degularbolditalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./../../../public/fonts/degular/degularblackitalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--degular-font",
  display: "swap",
});

export default degularFont;
