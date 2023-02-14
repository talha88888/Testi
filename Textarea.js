import React, { useState } from 'react';

function TodoForm() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todoText]);
    setTodoText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a to-do:
        <input className="todoform" value={todoText} onChange={e => setTodoText(e.target.value)} />
      </label>
      <input type="submit" value="Add" />
      <div className="hero1">
        {todoList.map((item, index )  => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </form>
  );
}

export default TodoForm;
