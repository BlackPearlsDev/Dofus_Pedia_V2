import { createSlice } from "@reduxjs/toolkit";

const spellSlice = createSlice({

    name: "spell",
    initialState: {
        listSpell: [],
    },
    reducers: {
        loadSpells(state, action){
            state.listSpell = [...action.payload];
        }
    },

});

export const {loadSpells} = spellSlice.actions;

export default spellSlice.reducer;