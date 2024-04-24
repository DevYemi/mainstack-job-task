import type { Metadata } from "next";
import { Providers } from "@/global-components/providers";
import degularFont from "@/lib/chakra-ui/font";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Mainstack Dashboard",
  description: "Mainstack Revenue Dashboard",
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
        <ToastContainer
          draggable
          pauseOnHover
          position="top-right"
          autoClose={5000}
        />
      </body>
    </html>
  );
}
