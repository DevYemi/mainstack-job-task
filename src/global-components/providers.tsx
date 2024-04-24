"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { chakraUiCustomTheme } from "@/lib/chakra-ui/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={chakraUiCustomTheme}>{children}</ChakraProvider>
  );
}
