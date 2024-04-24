import { render, screen } from "@/tests/test-utils";
import { describe, expect, test, vi } from "vitest";
import Component from "./index";




describe("ReadOnlyInput Unit Tests", () => {
    test("Should render properly without errors", () => {
        render(<Component />);

        expect(screen.getByRole("textbox")).toBeInTheDocument()
    });
    test("Should always have attribute readOnly", () => {
        render(<Component />);

        const input = screen.getByRole<HTMLInputElement>("textbox");

        expect(input.readOnly).toBeTruthy()
    });
});
