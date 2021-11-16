import React from "react";

const TodoItem = ({todo, handleDelete , handleComplete}) =>{
    return(
        <div className='flex justify-between bg-white rounded-lg mb-2 py-1 px-2 text-lg font-semibold text-gray-700 shadow-sm'>
            <li className={todo.isComplete ? "completed" : "" }>{todo.text}</li>
            <div>
                <button onClick={()=> {handleDelete(todo)}}><i className='fa fa-trash'></i></button>
                <button onClick={() => {handleComplete(todo.id)}}><i className='fa fa-check'></i></button>
            </div>
        </div>
    );
}
export default TodoItem;