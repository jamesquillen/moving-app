import React from "react"
import { render, screen } from "@testing-library/react"
import BoxEdit from "./BoxEdit"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

describe ("<BoxEdit />", () => {

    const user = {
        id: 1
    }

    const mockBox = [
        {
            id: 1,
            name: "Kitchen",
            contents: "utensils, kitchen towels, plates, bowls",
            size: "large"
        }
    ]

    const editBox = jest.fn()


    it("renders without crashing",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxEdit boxes={mockBox} updateBox={editBox} current_user={user}/>
            </BrowserRouter>,
            div
        )
    })
    it("prompts a user to edit their box",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxEdit boxes={mockBox} updateBox={editBox} current_user={user} />
            </BrowserRouter>,
            div
        )
    const text = screen.getByText(/Edit Your Box/i)
    expect(text).toBeInTheDocument()
    })
})