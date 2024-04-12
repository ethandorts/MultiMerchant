import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    UserInformation: null,
}

const authenticationSlice = createSlice({
    name:'authentication',
    initialState,
    reducers: {
        DisplayUserDetails: (state, action) => {
            state.UserInformation = action.payload;
            localStorage.setItem('UserInformation', JSON.stringify(action.payload));
        },
        LoginUser: (state, action) => {
            state.UserInformation = action.payload;
        },
        Logout: (state) => {
            state.UserInformation = null;
            localStorage.removeItem('UserInformation');
        }
    },
});

export const { DisplayUserDetails, Logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;