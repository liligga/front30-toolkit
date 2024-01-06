import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// dispatch(fetchTodos())
export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return response.data
    }
)

// thunk с fetch'ом
export const fetchTodosWithFetch = createAsyncThunk(
    'todos/fetchTodosWithFetch',
    async (_, thunkAPI) => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            if (!response.ok) {
                return thunkAPI.rejectWithValue('Something went wrong')
            }
            return response.json()
    }
)


const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        loading: false,
        error: null,
        items: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.items = action.payload
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            // state.error = "Произошла ошибка"
            state.error = action.error.message
            state.loading = false
        })
    } 
})

export const todosReducer = todosSlice.reducer

// Redux < Redux Toolkit < Redux Toolkit Query(RTK Query) < Zustand + React Query(Tanstack Query)