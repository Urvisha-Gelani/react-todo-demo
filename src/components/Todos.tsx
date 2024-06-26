import React from 'react';
import { Todo, useTodos } from '../store/todos';
import { useSearchParams } from 'react-router-dom';

function Todos() {
    const [searchParams] = useSearchParams()
    const {todos ,toggleTodoAsCompleted ,handleDeleteTodo} = useTodos()
    let allTodos = todos
    let todosData = searchParams.get("todos")
    if(todosData === 'active') {
        allTodos = allTodos.filter((task) => !task.completed) 
        
    }
    if(todosData === 'completed') {
        allTodos = allTodos.filter((task) => task.completed) 
        
    }

  return (
    <>
        <ul>
            {
                allTodos.map((todo:Todo) => {
                    return <li key={todo.id}>
                        <input type='checkbox' id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)}/>
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button type='button' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            )
                        }

                    </li>
                })
            }
        </ul>
    </>
  );
}

export default Todos;
