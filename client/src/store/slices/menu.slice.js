import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isToggle: false,
    },
    reducers: {
        setToggle(state, action) {
            state.isToggle = action.payload;
        },
    },
});

export const { setToggle } = menuSlice.actions;
export default menuSlice.reducer;
