import { createSlice } from "@reduxjs/toolkit";

const ecosystemSlice = createSlice({

    name: "ecosystem",
    initialState: {
        listEcosystem: [],
    },
    reducers: {
        loadEcosystem(state, action){
            state.listEcosystem = [...action.payload];
        }
    },

});

export const {loadEcosystem} = ecosystemSlice.actions;

export default ecosystemSlice.reducer;