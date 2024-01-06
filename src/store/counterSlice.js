import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        val: 0
    },
    reducers: {
        increaseCounter: (state, action) => {
            // Immer 
            // return {...state, val: state.val + 1}
            state.val += action.payload
        },
        decreaseCounter: (state) => {
            state.val -= 1
        }
    }
})

// export const { increaseCounter, decreaseCounter } = counterSlice.actions
export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer