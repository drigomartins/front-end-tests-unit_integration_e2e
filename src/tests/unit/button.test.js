import React from 'react'
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Button from "../../components/common/button"

describe("Button test", () => {
    it("Should render Button", () => {
        render(
            <Button>
                test
            </Button>
        )
    });

    it("Should click Button", async () => {
        render(<Button />);
        fireEvent.click(await screen.findByRole('button'));
    });

    it("Should find the text", () => {
        render(
            <Button>
                test
            </Button>
        )
        fireEvent.click(screen.getByText('test'));
    });
});