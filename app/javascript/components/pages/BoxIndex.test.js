import React from "react"
import { render, screen } from "@testing-library/react"
import BoxIndex from "./BoxIndex"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

describe ("<BoxIndex />", () => {
    it("renders without crashing",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxIndex />
            </BrowserRouter>,
            div
        )
    })
    it("shows the user a header saying 'Your Boxes'",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxIndex />
            </BrowserRouter>,
            div
        )
    const text = screen.getByText(/Your Boxes/i)
    expect(text).toBeInTheDocument()
    })
})