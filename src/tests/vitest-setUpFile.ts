import { vi, afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "./test-utils";
import { server } from "@/lib/msw/node";
import "@testing-library/jest-dom/vitest";

// Unmounts React trees that were mounted with render after each test
afterEach(() => {
  cleanup();
});
// ------- End -----------

/* 
Setup, CleanUp and Close MSW route mock listener 
*/
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
// ------- End -----------

/* 
Mocked External Modules (In node_modules).
Good to note that Mocked files are in the `__mocks__` in the root of the project
*/
vi.mock("server-only");
vi.mock("recharts");
vi.mock("next/navigation");
// ------- End -----------

/* 


/* 
Mock Global Varibales under "window" object
*/
vi.stubGlobal(
  "ResizeObserver",
  vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  })),
);
vi.stubGlobal(
  "matchMedia",
  vi.fn((query) => ({
    matches: false,
    media: query,
    onchange: vi.fn(),
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
);
globalThis.Element.prototype.scrollTo = vi.fn(() => {});
// ------- End -----------

/*
Silent an annoying warning error that pollute the terminal from jsDom about certain global api not being implemented.
Issue should be resolve in an upcoming release so this might not be needed in the future

Check out issue on git for more details
https://github.com/jsdom/jsdom/issues/3025
*/
vi.spyOn(global.console, "error").mockImplementation((message) => {
  if (
    typeof message.includes === "function" &&
    !message.includes("Not implemented")
  ) {
    global.console.warn(message);
  }
});
// ------- End -----------
