import {
  AppRouterContext,
  AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
import { vi } from "vitest";

export type AppRouterContextProviderMockProps = {
  router?: Partial<AppRouterInstance>;
  children: React.ReactNode;
};

/**
 * @description A Provider that helps mocked context for nextjs `useRouter` imported from "next/navigation"
 *
 * For better understanding as to why this was done find usefull links below:
 * @{@link https://nextjs.org/docs/messages/next-router-not-mounted NextJs docs explaining the issue this fixes}
 * @{@link https://github.com/vercel/next.js/discussions/48937 Github Discussion where solution was gotten}
 * */
export const AppRouterContextProviderMock = ({
  router = {},
  children,
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: vi.fn(),
    forward: vi.fn(),
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
    ...router,
  };
  return (
    <AppRouterContext.Provider value={mockedRouter}>
      {children}
    </AppRouterContext.Provider>
  );
};
