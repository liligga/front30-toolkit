import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./counterSlice";
import { userReducer } from "./userSlice";
import { todosReducer } from "./todosSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        todos: todosReducer
    }
})