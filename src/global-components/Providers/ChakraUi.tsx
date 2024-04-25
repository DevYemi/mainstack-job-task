import { ChakraProvider } from "@chakra-ui/react";
import { chakraUiCustomTheme } from "@/lib/chakra-ui/theme";

export function ChakraUi({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={chakraUiCustomTheme}>{children}</ChakraProvider>
  );
}
