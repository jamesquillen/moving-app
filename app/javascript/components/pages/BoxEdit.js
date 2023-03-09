import React, {useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { 
Form, 
Row, 
Col, 
FormGroup,
Label,
Input, 
Button
} from "reactstrap"

const BoxEdit = ({boxes, updateBox, current_user}) => {
    const { id } = useParams()
    let currentBox = boxes?.find((box) => box?.id === +id)

    const navigate = useNavigate()
    const [editBox, setEditBox] = useState({
        name: currentBox?.name,
        contents: currentBox?.contents,
        size: currentBox?.size,
        user_id: current_user.id
    })

    const handleChange = (e) => {
        setEditBox({...editBox, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        updateBox(editBox, currentBox.id)
        navigate("/boxindex")
    }

    return (
        <>
            <h1 className="your-box-styling">Edit Your Box</h1>
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
                                placeholder={currentBox?.name}
                                type="text"
                                onChange={handleChange}
                                value={editBox.name}
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
                                type="textarea"
                                id="contents"
                                name="contents"
                                placeholder={currentBox?.contents}
                                text="text"
                                onChange={handleChange}
                                value={editBox.contents}
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
                                placeholder={currentBox?.size}
                                type="text"
                                onChange={handleChange}
                                value={editBox.size}
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            </div>
            <Button className="update-button-styling"  onClick={handleSubmit}>
                Update Your Box
            </Button>
                
        </>
    )
}
export default BoxEdit