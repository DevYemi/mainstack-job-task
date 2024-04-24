import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppRouterContextProviderMock } from "./NextAppRouterContextProviderMock";
import { Providers } from "@/global-components/providers";

/**
 * Desc: A custom Provider that helps as a wrapper with all the necessary providers when the component  is being rendered.
 *
 *  For better understanding as to why this was done find usefull links below:
 * @{@link https://testing-library.com/docs/react-testing-library/setup#custom-render RTL docs on this topic}
 */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterContextProviderMock>
      <Providers>{children}</Providers>
    </AppRouterContextProviderMock>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
