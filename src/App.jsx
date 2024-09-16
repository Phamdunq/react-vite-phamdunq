import TodoData from "./components/todo/todoData"
import TodoNew from "./components/todo/todoNew"
import reactLogo from "./assets/react.svg"

const App = () => {
  //{key:value}
  const name ="Phamdunq"
  const age = 22
  const data = {
    address: "Thanh hoa",
    country: "vietnam"
  }

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
      />
      <div className="todo-image">
        <img src={reactLogo}/>
      </div>
    </div>
  )
}

export default App
