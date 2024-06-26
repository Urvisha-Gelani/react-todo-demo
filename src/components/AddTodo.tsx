import React, { useState } from 'react';
import { useTodos } from '../store/todos';

function AddTodo() {
    const [todo , setTodo] = useState("");
const {handleAddTodos} = useTodos()

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodos(todo)
        setTodo("")

    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type='submit'>
                    Add
                </button>
            </form>
        </>
    );
}

export default AddTodo;
