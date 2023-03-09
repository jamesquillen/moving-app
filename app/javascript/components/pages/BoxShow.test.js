import React from "react"
import { render, screen } from "@testing-library/react"
import BoxShow from "./BoxShow"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

describe ("<BoxShow />", () => {
    it("renders without crashing",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxShow />
            </BrowserRouter>,
            div
        )
    })
    it("edits or deletes a box",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxShow />
            </BrowserRouter>,
            div
        )
    const text = screen.getByText(/Edit or Delete Your Box/i)
    expect(text).toBeInTheDocument()
    })
})
