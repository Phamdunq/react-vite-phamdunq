import { useState } from "react"

const TodoNew = (props) => {
    const {addNewTodo} = props
    // addNewTodo("Pham dung")// fire

    const [valueInput, setValueInput] = useState("eric")

    const handelOnClick = () => {
        setValueInput(addNewTodo)
    }

    const handelOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <>
            <div className="todo-new">
                <input onChange={(event) => {handelOnChange(event.target.value)}} type="text"/>
                <button 
                    onClick={handelOnClick}
                >Add</button>
            </div>
            <div>
                My is = {valueInput}
            </div>
        </>
    )
}

export default TodoNew