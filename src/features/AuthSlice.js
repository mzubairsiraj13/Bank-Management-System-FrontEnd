import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice(
    {
        name: "auth",
        initialState: {
            user: {},
            isLoggedIn : false,
            
            
            
        },
        reducers: {
            
            logIn: (state, action)=> {
                state.user = action.payload.user,
                state.isLoggedIn = true;
            },
            logOut: (state, action) => {
                state.user = {},
                state.isLoggedIn = false;
            }
            
        }
    }
)


export const { logOut, logIn } = authSlice.actions;

export default authSlice.reducer;