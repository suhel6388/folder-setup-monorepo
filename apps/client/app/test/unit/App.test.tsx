import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "../../page";

describe("Pagef", () => {
    it("render button", async () => {
        window.alert = jest.fn(); //mock karna
        render(<Page />);
        const button = screen.getByRole("button", { name: /Shared Button/i });
        await userEvent.click(button);
        expect(window.alert).toHaveBeenCalled()
    })
})