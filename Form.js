import { useState } from "react";
import shortid from "shortid";
const Form = ({ todo, setTodo, todoList, setTodoList, }) => {
    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const [description, setDescription] = useState("")
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        console.log(description)
    }
    // const handletext = (event) => {
    //     setDescription(event.target.value);  
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo.trim() !== "")
            setTodoList([...todoList, { name: todo, describe:description, id: shortid.generate() }])
        setTodo("");
        setDescription("")
    }
    return (
        <div>
        <div><form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} placeholder="Add Item" className="todoform"></input>
            <input className="todoform"  onChange={handleDescriptionChange}   value = {description} placeholder="Add TodoItem" />
            <button type="submit" className="todobutton">Add</button>
        </form>
        </div>

        <div>
            
        </div>
        </div>
        
    )
}
export default Form;