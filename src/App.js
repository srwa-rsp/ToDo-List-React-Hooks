import React , { useState}  from "react";
import './App.css';
import Form from './Form';
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    let copy = [...todos];
    copy = [...copy, { id: Date.now()+todo, text: todo, isComplete: false }];
    setTodos(copy);
}
  const handleDelete = (todo) =>{
    setTodos(todos.filter(e => e.id !== todo.id))
  }

  const handleComplete = (id) =>{
    let mapped = todos.map(task => {
      return task.id === id ? { ...task, isComplete: !task.isComplete } : { ...task};
    });
    setTodos(mapped);
    }
  return (
    <div className="App container w-2/5 mx-auto flex flex-col items-center">
      <h1 className='font-bold text-lg p-4'>To Do List</h1>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} handleDelete={handleDelete} handleComplete={handleComplete} />

    </div>
  );
}

export default App;
