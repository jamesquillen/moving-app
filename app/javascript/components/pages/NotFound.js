import React from "react"
import notFoundImage from "images/NotFoundImg.png"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"


const NotFound = () => {
    return (
        <div className="not-found-container">
        <div className="not-found-image">
        <img src={notFoundImage} alt="Not Found PackRat Image" width="630" height="575" />
        </div>
        <div className="not-found-spacing">
        <h1 className="not-found-text">
            404
        </h1>
        <h4 className="not-found-text-2">
        Page Not Found
        </h4>
        <NavLink to="/">
            <Button>
                Back To Home
            </Button>
        </NavLink>
        </div>
        </div>
    )
}

export default NotFound