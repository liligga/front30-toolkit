import { createSlice } from "@reduxjs/toolkit";
// import products from '../data/products.json';


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            email: "",
            phone: ""
        },
        // products: products
    },
    reducers: {
        changeName: (state, action) => {
            state.user.name = action.payload
        },
        changeEmail: (state, action) => {
            state.user.email = action.payload
        },
        changePhone: (state, action) => {
            state.user.phone = action.payload
        },
        changeUserField: (state, action) => {
            // dispatch(changeUserField({ 
            //      field: "email", value: "email@gmail.com" 
            // }))
            state.user[action.payload.field] = action.payload.value
        },
        changeUser: (state, action) => {
            // dispatch(changeUser({ name: "John", email: "john@gmail", phone: "123456789" }))
            state.user = action.payload
        }
    }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer