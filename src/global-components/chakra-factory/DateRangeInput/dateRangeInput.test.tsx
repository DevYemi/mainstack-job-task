import { render, screen } from "@/tests/test-utils";
import { describe, expect, test } from "vitest";
import Component from "./index";

/* 
Since this component majorlly uses CalendaDateInput Internally there is no need writing a comprehensive test for it
*/
describe("DateRangeInput Unit Tests", () => {
  test("Should render properly without errors", () => {
    render(<Component />);

    expect(screen.getByTestId("dateRangeInputWrapper")).toBeInTheDocument();
  });
});
