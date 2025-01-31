import { createContext, useContext } from "react";
export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:'task 1',
        complete: false
    },],
    addTodo: (todo) => {},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id,todo) => {},
    isCompleted: (id,todo) => {}
});

export const TodoProvider = TodoContext.Provider

export default function useTodo() {
    return useContext(TodoContext);
}