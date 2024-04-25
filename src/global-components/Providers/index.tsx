"use client";

import { ChakraUi } from "./ChakraUi";
import ReduxToolkitStore from "./ReduxToolkitStore";

/**
 * @description A single point of export for all the Global provider that needs to be available in client components.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxToolkitStore>
      <ChakraUi>{children}</ChakraUi>
    </ReduxToolkitStore>
  );
}
