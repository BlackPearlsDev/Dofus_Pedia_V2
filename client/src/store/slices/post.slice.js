import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({

    name: "post",
    initialState: {
        listPost: [],
    },
    reducers: {
        loadPosts(state, action){
            state.listPost = [...action.payload];
        }
    },

});

export const {loadPosts} = postSlice.actions;

export default postSlice.reducer;