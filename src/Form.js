import React , { useState}  from "react";

const Form = ({addTodo}) => {
    const [todoInput ,setTodoInput] = useState("");
    const handleSubmit =(e)=> {
        e.preventDefault(); 
        addTodo(todoInput);
        setTodoInput("");
    }
    const handleChange =(e) => {
        setTodoInput(e.target.value);
    }
    return(
        <div className='m-10'>
            <form onSubmit={handleSubmit}>
                <input className='shadow px-4 py-2 rounded' type="text" placeholder="enter an activity..." value={todoInput} onChange={handleChange}  />
                <button className='bg-purple-400 rounded p-2 ml-2 shadow' type="submit">Add</button>
            </form>
        </div>

    );
}
export default Form;