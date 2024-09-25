import TodoData from "./components/todo/todoData"
import TodoNew from "./components/todo/todoNew"
import reactLogo from "./assets/react.svg"
import { useState } from "react"

const App = () => {
  //{key:value}
  const name ="Phamdunq"
  const age = 22
  const data = {
    address: "Thanh hoa",
    country: "vietnam"
  }

  const [todoList, setTodoList] = useState([
    {id: 1, name: "Learning React"},
    {id: 2, name: "Watching Youtube"}
  ])

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo = {addNewTodo}/>
      <TodoData
        name = {name}
        age = {age}
        data = {data}
        todoList = {todoList}
      />
      <div className="todo-image">
        <img src={reactLogo}/>
      </div>
    </div>
  )
}

export default App
