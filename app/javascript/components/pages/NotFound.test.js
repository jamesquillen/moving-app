import React from "react"
import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

describe ("<NotFound />", () => {
    it("renders without crashing",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>,
            div
        )
    })
    it("tells the user the page is not found",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>,
            div
        )
    const text = screen.getByText(/Not Found/i)
    expect(text).toBeInTheDocument()
    })
})
