
const TodoNew = (props) => {
    const {addNewTodo} = props
    // addNewTodo("Pham dung")// fire

    const handelOnClick = () => {
        alert('Click me')
    }

    const handelOnChange = (name) => {
        console.log('>>> handelOnChange', name)
    }

    return (
        <div className="todo-new">
            <input onChange={(event) => {handelOnChange(event.target.value)}} type="text"/>
            <button 
                onClick={handelOnClick}
            >Add</button>
        </div>
    )
}

export default TodoNew