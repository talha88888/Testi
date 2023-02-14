import Header from "./Components/Header";
import "./style.css";
import shortid from "shortid";
import Form from "./Components/Form";
import { useState } from "react";
// import Todo from "./Components/Todo";
// import Textarea from './Components/Textarea'
import Todolist from "./Components/Todolist";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState( [] );
  return (
    <div className="App">
      <Header/>
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
      {/* <Todo></Todo> */}
      {/* <Textarea/> */}
      <Todolist setTodoList={setTodoList} todoList={todoList}/>
      
    </div>
  );
}

export default App;
