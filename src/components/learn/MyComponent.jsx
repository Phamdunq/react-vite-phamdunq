import './style.css'
//JSX : 1 parent
//fragment: <> </>
const MyComponent = () => {

    //kiểu dữ liệu nguyên thủy
    // const string = "Data" // string
    // const number = 22 // number
    // const bool = true // bool
    // const strong = undefined //undefined
    // const nulls = null // null  

    //kiểu dữ liệu tham chiếu
    // const array = [1, 2, 3]
    const object = {
        name: "eric",
        age: 22
    }

    return (
        <>

            <div> {JSON.stringify(object)} & Hello word</div>
            <div className="child">Child</div>
        </>
    )
}

export default MyComponent

