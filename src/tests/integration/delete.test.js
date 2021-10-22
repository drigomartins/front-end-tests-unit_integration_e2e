import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import Delete from "../../components/specific/delete"

jest.mock('../../context/general', () => ({
    useData: () => ({
        data: [],
        setData: jest.fn(),
    })
}));

describe("Delete test", () => {
    it("Should render Delete component", () => {
        render( <Delete /> )
    });

    it("Should open and close box", async () => {
        const result = render( <Delete /> );
        const buttonOpen = result.container.querySelector('#open-box-delete');
        fireEvent.click(buttonOpen);

        const buttonClose = result.container.querySelector('#close-box-delete');
        fireEvent.click(buttonClose);
    });

    it("Should delete", async () => {
        const result = render( <Delete /> );
        const buttonOpen = result.container.querySelector('#open-box-delete');
        fireEvent.click(buttonOpen);

        const buttonDelete = result.container.querySelector('#delete-item');
        fireEvent.click(buttonDelete);
    });
});