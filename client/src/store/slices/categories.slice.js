import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({

    name: "categories",
    initialState: {
        listCategories: [],
    },
    reducers: {
        loadCategories(state, action){
            state.listCategories = [...action.payload];
        }
    },

});

export const {loadCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;