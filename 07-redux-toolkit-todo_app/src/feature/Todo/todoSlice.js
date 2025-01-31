import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{ id: nanoid(), text: "First Todo" }],
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
        },
        editTodo:(state,action) =>{
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }  
        }
    }
})

export default todoSlice.reducer

export const {addTodo,removeTodo,editTodo} = todoSlice.actions