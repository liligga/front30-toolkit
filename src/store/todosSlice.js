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

// thunk для запросов на закрытый ендпоинт
export const fetchTodosWithAuth = createAsyncThunk(
  'todos/fetchTodosWithAuth',
  async (_, thunkAPI) => {
    const response = await axios.get("https://dummyjson.com/auth/todos", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    console.log(response.data)
    return response.data
  }
)

export const createTodoWithAuth = createAsyncThunk(
  'todos/createTodoWithAuth',
  async (todo, thunkAPI) => { // todo = объект с данными {todo: "string", completed: boolean, userId: number}
    const response = await axios.post(
      "https://dummyjson.com/auth/todos/add", // путь
      todo, // данные
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"), // токен в заголовке запроса
        },
      })

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
      .addCase(fetchTodosWithAuth.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.items = action.payload.todos
      })
  }
})

export const todosReducer = todosSlice.reducer

// Redux < Redux Toolkit < Redux Toolkit Query(RTK Query) < Zustand + React Query(Tanstack Query)
