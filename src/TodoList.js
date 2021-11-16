import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos , handleDelete, handleComplete}) =>{

    return(
        <div>
            <ul className='w-60'>
            {todos.map(todo => (
                        <TodoItem todo={todo} key={todo.id} handleDelete={handleDelete} handleComplete={handleComplete} />
                    ))}
            </ul>
        </div>
    );
}
export default TodoList;