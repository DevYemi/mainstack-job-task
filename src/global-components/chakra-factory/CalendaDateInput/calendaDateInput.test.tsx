import { render, screen } from "@/tests/test-utils";
import { describe, expect, test, vi } from "vitest";
import Component from "./index";
import userEvent from "@testing-library/user-event";
import { format } from 'date-fns';




describe("CalendaDateInput Unit Tests", () => {
    const user = userEvent.setup()
    test("Should render properly without errors", () => {
        render(<Component />);

        expect(screen.getByTestId("calendaDateInputWrapper")).toBeInTheDocument()
    });

    test("Should open calenda dropdown when user clicks on inputField", async () => {
        render(<Component />);

        // Stimulate user interactions
        await user.click(screen.getByTestId("calendaDateInputWrapper"))

        expect(screen.getByTestId("nineTailsDayPicker")).toBeInTheDocument()
    });

    test("Should update ReadOnlyInput when user picks a date", async () => {
        const { container } = render(<Component />);

        //  // Stimulate user interactions, Open Calenda and pick todays date
        await user.click(screen.getByTestId("calendaDateInputWrapper"));
        await user.click(container.querySelector('.rdp-day_today')!);

        const todayDate = format(new Date().toDateString(), "PP")

        const readOnlyinput = screen.getByTestId<HTMLInputElement>("calendaDateInputReadOnlyInput");


        expect(readOnlyinput.value).toEqual(todayDate)
    });
});
