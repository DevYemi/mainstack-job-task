import { render, screen } from "@/tests/test-utils";
import { describe, expect, test, vi } from "vitest";
import Component from "./index";
import userEvent from "@testing-library/user-event";




describe("AppsPopoverBtnAndContent Unit Tests", () => {
    const user = userEvent.setup()
    test("Should render properly without any errors", () => {
        render(<Component />);

        expect(screen.getByTestId("appsPopoverBtnTrigger-testid")).toBeInTheDocument()
    });
    test("Should display popover content when trigger is clicked", async () => {
        render(<Component />);

        // Stimulate user interactions to open Popover
        await user.click(screen.getByTestId("appsPopoverBtnTrigger-testid"))

        expect(screen.getByTestId("popoverBody-testid")).toBeInTheDocument()
    });
});
