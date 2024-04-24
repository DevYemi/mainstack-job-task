import { render, screen } from "@/tests/test-utils";
import { describe, expect, test, vi } from "vitest";
import Component from "./index";
import userEvent from "@testing-library/user-event";

describe("FilterBtnDrawerWithContent Unit Tests", () => {
  const user = userEvent.setup();
  test("Should render properly without any errors", () => {
    render(<Component />);

    expect(
      screen.getByTestId("filterBtnDrawerTrigger-testid"),
    ).toBeInTheDocument();
  });
  test("Should display popover content when trigger is clicked", async () => {
    render(<Component />);

    // Stimulate user interactions to open Drawer
    await user.click(screen.getByTestId("filterBtnDrawerTrigger-testid"));

    expect(screen.getByTestId("drawerBody-testid")).toBeInTheDocument();
  });
});
