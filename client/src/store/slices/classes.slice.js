import { createSlice } from "@reduxjs/toolkit";

const classesSlice = createSlice({

    name: "classes",
    initialState: {
        listClasses: [],
    },
    reducers: {
        loadClasses(state, action){
            state.listClasses = [...action.payload];
        }
    },

});

export const {loadClasses} = classesSlice.actions;

export default classesSlice.reducer;