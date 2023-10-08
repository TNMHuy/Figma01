import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

const initialState = {
    user: {},
    isLoading: false,
    isError: false,
};

export const login = createAsyncThunk('auth/login', async ({ email, password, navigate }) => {
    const data = { username: email, password: password };
    const res = await axios.post(process.env.REACT_APP_API_AUTH_TOKEN, data);
    navigate('/')
    console.log(res.data);
    return res.data;
});
// export const register = createAsyncThunk('auth/register', async (user) => {
//     if (!user || !user?.username || !user?.email || !user?.password) return null;
//     const res = await axios.post(`${process.env.REACT_APP_API_ROOT}/register`, user);
//     Navigate()
//     return res.data;
// });

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
        }
    },
    extraReducers: (builder) => {
        //login
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
        //register
        // builder.addCase(register.pending, (state) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(register.fulfilled, (state, action) => {
        //     state.user = action.payload;
        //     state.isLoading = false;
        //     state.isError = false;
        // });
        // builder.addCase(register.rejected, (state) => {
        //     state.isLoading = false;
        //     state.isError = true;
        // });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;