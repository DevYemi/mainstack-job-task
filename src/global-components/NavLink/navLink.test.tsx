import { render, screen } from "@/tests/test-utils";
import { describe, expect, test, vi } from "vitest";
import Component from "./index";


// Mocked NextJs usePathname
const mockFn = vi.hoisted(() => ({
    usePathname: vi.fn(() => "/home"),
}));
vi.mock("next/navigation", async (importOriginals) => {
    const mod = await importOriginals<typeof import("next/navigation")>();
    return {
        ...mod,
        usePathname: mockFn.usePathname,
    };
});


describe("NavLink Unit Tests", () => {
    test("Should render properly without errors", () => {
        render(<Component href={"/"} />);

        expect(screen.getByRole("link")).toBeInTheDocument()
    });

    test("Should have aria-current set to page when link is active", () => {
        render(<Component href={"/home"} />);

        expect(screen.getByRole("link", { current: "page" })).toBeInTheDocument()
    });
    test("Should have aria-current set to false when link is not active", () => {
        mockFn.usePathname.mockReturnValue("/revenue");

        render(<Component href={"/about"} />);


        expect(screen.getByRole("link", { current: false })).toBeInTheDocument()
    });

});
