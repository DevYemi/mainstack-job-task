"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { chakraUiCustomTheme } from "@/lib/chakra-ui/theme";

/**
 * @description A single point of export for all the Global provider that needs to be available in client components.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={chakraUiCustomTheme}>{children}</ChakraProvider>
  );
}
