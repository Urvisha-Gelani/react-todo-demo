import { ReactNode, createContext, useContext, useState } from "react";


export type TodosProviderProps = {
    children: ReactNode
}

export type Todo = {
    id  : string;
    task : string;
    completed : boolean;
    createdAT : Date;
}
export type TodosContext = {
    todos : Todo[];
    handleAddTodos : (task:string) => void;
    toggleTodoAsCompleted : (id : string) => void;
    handleDeleteTodo : (id:string) => void

}
export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({ children }:TodosProviderProps) => {
    const [todos , setTodos] = useState<Todo[]>([])

   const  handleAddTodos = (task: string) => {
        setTodos((prev) => {
            const newTodos :Todo[] = [
                {
                    id : Math.random().toString(),
                    task : task,
                    completed : false,
                    createdAT : new Date()
                },
                ...prev
            ]
            console.log(prev , "prev*****");
            console.log(newTodos , "/******");
            return newTodos
        })
    }

const toggleTodoAsCompleted = (id:string) => {
    setTodos((prev) => {
        const newTodos = prev.map((todo) => {
            if(todo.id === id) {
                return { ...todo , completed:!todo.completed}
            }
            return todo;
        })
        console.log(newTodos);
        return newTodos
    })

}
const handleDeleteTodo = (id:string) => {
    setTodos((prev) => {
        const newTodos = prev.filter((filtertodo) => filtertodo.id !== id) 
        return newTodos 

    })
}
    return <todosContext.Provider value={{todos,handleAddTodos ,toggleTodoAsCompleted ,handleDeleteTodo}}>
        {children}
    </todosContext.Provider>

}

export const useTodos = () => {
    const todosConsumer = useContext(todosContext)
    if(!todosConsumer) {
        throw new Error ("useTodos used outside pf provider")
    }
    return todosConsumer;
}