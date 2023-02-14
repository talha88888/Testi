import { useState } from "react";
const Todo = ({ todoItem, todoList, setTodoList }) => {
    const [isEditing, setIsEditing] = useState(false);

    const deleteTodo = () => {
        setTodoList(todoList.filter((item) => item.id !== todoItem.id))
    };
    const editTodo = () => {
        const newName = window.prompt("Enter Updated itemname", todoItem.name);
        const newDescribe = window.prompt("Enter Updated Todo", todoItem.describe);
        if (newName && newDescribe) {
            const updatedTodoList = todoList.map(item => {
                if (item.id === todoItem.id){
                    return {...item, name: newName, describe: newDescribe};
                }
                return item;
            });
            setTodoList(updatedTodoList);
        }
    }
    return (
        <div className="">
            <div className="hero1 ">
                <h3 className="hero">{todoItem.name}</h3>
                <h3 className="hero4">{todoItem.describe}</h3>
                <button onClick={deleteTodo} className="hero-button">Done</button>
                <button onClick={editTodo} className="hero-button">Edit</button>
            </div>
        </div>
    )
};
export default Todo;
