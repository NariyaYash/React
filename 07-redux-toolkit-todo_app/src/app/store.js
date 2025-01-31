import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../feature/Todo/todoSlice"


export const store = configureStore({
    reducer: TodoReducer
})