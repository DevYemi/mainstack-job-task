import { render, screen } from "@/tests/test-utils";
import { describe, expect, test, vi } from "vitest";
import Component from "./index";
import userEvent from "@testing-library/user-event";




describe("ProfilePopoverBtnAndContent Unit Tests", () => {
    const user = userEvent.setup()
    test("Should render properly without any errors", () => {
        render(<Component />);

        expect(screen.getByTestId("profilePopoverBtnTrigger-testid")).toBeInTheDocument()
    });
    test("Should display popover content when trigger is clicked", async () => {
        render(<Component />);

        // Stimulate user interactions to open Popover
        await user.click(screen.getByTestId("profilePopoverBtnTrigger-testid"))

        expect(screen.getByTestId("popoverBody-testid")).toBeInTheDocument()
    });
});
