import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import BoxIndex from "./pages/BoxIndex"
import BoxEdit from "./pages/BoxEdit"
import BoxNew from "./pages/BoxNew"
import BoxShow from "./pages/BoxShow"

const App = (props) => {
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    readBoxes()
  }, [])

  const readBoxes = () => {
    fetch("/boxes")
      .then((response) => response.json())
      .then((payload) => {
        setBoxes(payload)
      })
      .catch((error) => console.log(error))
  }

  const createBox = (newBox) => {
    fetch("/boxes", {
      body: JSON.stringify(newBox),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readBoxes())
      .catch((errors) => console.log("Box create errors:", errors))
  }

  const updateBox = (box, id) => {
    console.log(box, id, "update")
    fetch(`/boxes/${id}`, {
      body: JSON.stringify(box),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => readBoxes())
    .catch((errors) => console.log("Box edit errors:", errors))
  }

  const deleteBox = (id) => {
    fetch(`/boxes/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((payload) => readBoxes())
    .catch((errors) => console.log("Box delete errors:", errors))
  }

  return (
    <>
      <BrowserRouter>
        <Header {...props}/>
          <Routes>
              <Route path="/" element={<Home {...props}/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/boxindex" element={<BoxIndex boxes={boxes} current_user = {props.current_user} />} />
              <Route path="/boxnew" element={<BoxNew createBox={createBox} current_user={props.current_user}/>} />
              <Route path="/boxedit/:id" element={<BoxEdit boxes={boxes} updateBox={updateBox} current_user={props.current_user}/>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="/boxshow/:id" element={<BoxShow boxes={boxes} current_user={props.current_user} deleteBox={deleteBox}/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
