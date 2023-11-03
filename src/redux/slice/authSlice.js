import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    user: {},
    isLoading: false,
    isError: false,
};

export const login = createAsyncThunk('auth/login', async ({ username, password }) => {
        const data = { username: username, password: password };
    console.log(data);
    const res = await axios.post(`${process.env.REACT_APP_API_ROOT2}/v1/auth/login`, data);
    return res.data;
});
// export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
//     const data = { username: email, password: password };
//     const headers = new Headers();
//     headers.append("Accept", "application/json");
//     headers.append('Accept-Encoding', 'gzip, deflate, br');
//     const res = await axios.post(process.env.REACT_APP_API_AUTH_TOKEN, data,headers);
//     return res.data;
// });

export const register = createAsyncThunk('auth/register', async (user) => {
    console.log(user);
    if (!user || !user?.username || !user?.email || !user?.password) return null;
    const response = await axios.post(`https://advanced-blog.glitch.me/v1/auth/register`, user);
    return response.data;
});

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
        
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(register.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;