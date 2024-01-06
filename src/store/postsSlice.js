import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await axios.get('https://dummyjson.com/posts?limit=10')
        return response.data
    }
)

// dispatch(asyncDeletePost(id))
export const asyncDeletePost = createAsyncThunk(
    'posts/asyncDeletePost',
    async (postId) => {
        const resp = await axios.delete(`https://dummyjson.com/posts/${postId}`)
        return resp.data
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: false,
        error: null,
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.items = action.payload.posts
        })
        .addCase(asyncDeletePost.fulfilled, (state, action) => {
            state.error = null
            state.loading = false
            state.items = state.items.filter(item => item.id !== action.payload.id)
        })
    }
})

export const postsReducer = postsSlice.reducer