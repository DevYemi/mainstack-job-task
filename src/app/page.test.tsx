import { describe, expect, test } from "vitest";
import Page from "./page";
import { render, screen } from "@/tests/test-utils";

describe("Home Page Intergration Tests", () => {
    test("Should render page properly without any errors", async () => {
        const PageResult = await Page();
        render(PageResult);

        expect(screen.getByTestId("homePage-testId")).toBeDefined();
    });

});
