import { createSlice } from "@reduxjs/toolkit";

const raceSlice = createSlice({

    name: "race",
    initialState: {
        listRace: [],
    },
    reducers: {
        loadRace(state, action){
            state.listRace = [...action.payload];
        }
    },

});

export const {loadRace} = raceSlice.actions;

export default raceSlice.reducer;