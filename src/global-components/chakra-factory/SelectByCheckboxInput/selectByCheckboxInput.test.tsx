import { render, screen } from "@/tests/test-utils";
import { describe, expect, test } from "vitest";
import Component from "./index";
import userEvent from "@testing-library/user-event";
import { nanoid } from "nanoid";

const checkLists = [
  {
    value: "MainStack-FrontEnd",
    defaultValue: true,
    id: nanoid(),
  },
  {
    value: "MainStack-DevOps",
    defaultValue: true,
    id: nanoid(),
  },
  {
    value: "MainStack-Backend",
    defaultValue: false,
    id: nanoid(),
  },
];

const getExpectedValueArr = (arr: Array<any>) => {
  return arr
    .filter((item) => item?.defaultValue)
    .map((item) => item?.value)
    .join(", ");
};
describe("SelectByCheckboxInput Unit Tests", () => {
  const user = userEvent.setup();

  test("Should render properly without errors", () => {
    render(<Component checkLists={checkLists} />);

    expect(
      screen.getByTestId("selectByCheckboxInputWrapper"),
    ).toBeInTheDocument();
  });

  test("Should open checkbox dropdown when user clicks on inputField", async () => {
    render(<Component checkLists={checkLists} />);

    // Stimulate user interactions
    await user.click(screen.getByTestId("selectByCheckboxInputWrapper"));

    expect(screen.getByTestId("checkboxGroupWrapper")).toBeInTheDocument();
  });

  test("Should on first render set ReadOnlyInput value to checklist item defaultValue set to true", async () => {
    render(<Component checkLists={checkLists} />);

    const readOnlyinput = screen.getByTestId<HTMLInputElement>(
      "selectByCheckboxInputReadOnlyInput",
    );

    const expectedValue = getExpectedValueArr(checkLists);

    expect(readOnlyinput.value).toEqual(expectedValue);
  });

  test("Should update ReadOnlyInput value when user check and uncheck boxes", async () => {
    render(<Component checkLists={checkLists} />);

    // Stimulate user interactions
    await user.click(screen.getByTestId("selectByCheckboxInputWrapper"));
    await user.click(screen.getByText(checkLists[0].value));

    // Manually update data here
    checkLists[0].defaultValue = false;

    const readOnlyinput = screen.getByTestId<HTMLInputElement>(
      "selectByCheckboxInputReadOnlyInput",
    );
    const expectedValue = getExpectedValueArr(checkLists);

    expect(readOnlyinput.value).toEqual(expectedValue);
  });
});
