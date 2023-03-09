import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import { Button, Col} from 'reactstrap'

const BoxShow = ({ boxes, current_user, deleteBox }) => {
  const { id } = useParams()
  let currentBox = boxes?.find(box => box.id === +id)

  return(
      <main>
        <h1 className="your-box-styling">Edit or Delete Your Box</h1>
        <div className="index-bg-color form-padding">
        {currentBox && (
          <>
            <p className="label-font">Name</p>
            <Col md={3} style={{marginBottom: "25px"}}className="show-page-border">{currentBox.name}</Col>
            <p className="label-font">Contains</p>
            <Col md={5} style={{marginBottom: "25px"}}className="show-page-border form-size">{currentBox.contents}</Col>
            <p className="label-font">Box Size</p>
            <Col md={2} className="show-page-border">{currentBox.size}</Col>
          </>
          
        )}
        </div>
        <div className="update-button-styling">
            <NavLink to={`/boxedit/${currentBox?.id}`}>
                <Button>
                    Edit Box
                </Button>
            </NavLink>
            <NavLink to="/boxindex">
                <Button style={{marginLeft: "20px"}} onClick={() => {deleteBox(id)}}>
                    Delete Box
                </Button>
            </NavLink>
        </div>
      </main>
    )
}

export default BoxShow