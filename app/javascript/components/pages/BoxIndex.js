import React from "react"
import { Card, CardBody, CardTitle, CardText, Button, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const BoxIndex = ({boxes, current_user}) => {
    const userBoxes = boxes?.find((box) => {
        return box.user_id === current_user.id
    })
    return(
        <main>
            <div>
            <h1 className="your-box-styling">Your Boxes</h1>
                <NavLink to="/boxnew">
                    <Button className="new-box-button" style={{float: "right"}}>
                        Add New Box
                    </Button>
                </NavLink>
                </div>
                <div className="index-bg-color">
            {boxes?.map((box, index) => {
                return(
                    <div  
                    style={{display: "inline-block"}}>
                    <Card md="4"
                    className="card-styling" style={{width: '18rem'}} key={index}>
                        <CardBody>
                            <CardSubtitle className="mb-2 box-label" tag="h6">
                                {box.size}
                            </CardSubtitle>
                            <CardTitle tag="h5">
                                {box.name} Box
                            </CardTitle>
                            <CardText>
                                {box.contents}
                            </CardText>
                            <div style={{textAlign: "center", marginTop: "100px"}}>
                            <NavLink to={`/boxshow/${box.id}`}> 
                                <Button className="edit-button">
                                    Edit
                                </Button>
                            </NavLink>
                            <NavLink to={`/boxshow/${box.id}`}> 
                                <Button className="delete-button">
                                    Delete
                                </Button>
                            </NavLink>
                            </div>
                        </CardBody>
                    </Card>
                    </div>
            )
        }
        )}
        </div>
        </main>
    )
}

export default BoxIndex