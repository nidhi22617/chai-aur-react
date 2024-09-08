import { useState } from "react"
import './App.css'
import './index.css'

import Todos from "./conponents/Todos"
import AddTodo from "./conponents/AddToDo"


function App() {
  

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
