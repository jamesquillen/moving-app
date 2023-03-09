import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"

describe ("<Footer />", () => {
    it("renders without crashing",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>,
            div
        )
    })

    it("contains the names of the website creators",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>,
            div
        )
    const text = screen.getByText(/Dom, James, Bora, Lea/i)
    expect(text).toBeInTheDocument()
    })
})
