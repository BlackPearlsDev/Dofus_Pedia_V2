import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState: {
        userInfos: null,
        isLogged: false,
        listUsers: [],
    },
    reducers: {
        login(state, action) {
            state.userInfos = action.payload;
            state.isLogged = true;
        },
        logout(state) {
            state.userInfos = null;
            state.isLogged = false;
        },
        loadUsers(state, action) {
            state.listUsers = [...action.payload];
        }
    },

});

export const {login, logout, loadUsers} = userSlice.actions;

export default userSlice.reducer;