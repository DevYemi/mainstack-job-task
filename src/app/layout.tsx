import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/global-components/providers";
import degularFont from "@/lib/chakra-ui/font";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={degularFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
