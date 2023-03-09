import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { 
Form, 
Row, 
Col, 
FormGroup,
Label,
Input, 
Button
} from "reactstrap"

const BoxNew = ({createBox, current_user}) => {
const navigate = useNavigate()
const [newBox, setNewBox] = useState({
  name: "",
  contents: "",
  size: "",
  user_id: current_user.id
})

const handleChange = (e) => {
    setNewBox({...newBox, [e.target.name]: e.target.value})
}

const handleSubmit = () => {
    createBox(newBox)
    navigate("/boxindex")
}

return (
        <>
        
            <h1 className="your-box-styling">Make Your Box</h1>
            <div className="index-bg-color form-padding about-us-info"> 
            <Form>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label className="label-font" for="name">
                                Name
                            </Label>
                            <Input style={{borderRadius: "1px",borderColor: "white"}}
                                id="name"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                value={newBox.name}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <FormGroup>
                            <Label className="label-font" for="contents">
                            Contains
                            </Label>
                            <Input className="form-size"
                                id="contents"
                                name="contents"
                                text="text"
                                onChange={handleChange}
                                value={newBox.contents}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <FormGroup>
                            <Label className="label-font" for="size">
                                Box Size
                            </Label>
                            <Input style={{borderRadius: "1px",borderColor: "white"}}
                                id="size"
                                name="size"
                                type="text"
                                onChange={handleChange}
                                value={newBox.size}
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            </div>
            <Button className="update-button-styling" onClick={handleSubmit}>
            Create Your Box
            </Button>
                
        </>
    )
}
export default BoxNew;