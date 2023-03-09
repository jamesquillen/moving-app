import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import About from "./About"
import { BrowserRouter } from "react-router-dom"

describe ("<About />", () => {
    it("renders without crashing",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>,
            div
        )
    })
})
