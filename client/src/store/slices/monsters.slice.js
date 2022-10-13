import { createSlice } from "@reduxjs/toolkit";

const monstersSlice = createSlice({

    name: "monsters",
    initialState: {
        listMonsters: [],
    },
    reducers: {
        loadMonsters(state, action){
            state.listMonsters = [...action.payload];
        }
    },

});

export const {loadMonsters} = monstersSlice.actions;

export default monstersSlice.reducer;