import React from "react";
import { render, screen } from '@testing-library/react'
import Cart from "./Cart"

describe("Given a Cart component", () => {
    test("Then should render", () => {
        render(<Cart />)
        expect(screen.getByTestId("Cart")).toBeInTheDocument()
    })
})