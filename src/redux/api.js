import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "http://localhost:3001/api/v1";

export const APISlice = createSlice({
    name: "api",
    initialState: {
        value: {},
        token: "none",
        status: 0,
        connected: false
    },
    reducers:{
        disconnectUser: state => {
            state.value = {};
            state.token = "none";
            state.status = 0;
            state.connected = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logIN.fulfilled, (state, action) => {
            state.status = action.payload.status;
            if (state.status === 200){
                state.token = action.payload.body.token;
                state.connected = true;
            }
        })
    }
})

export const {disconnectUser} = APISlice.actions;

export default APISlice.reducer;

export const logIN = createAsyncThunk("api/logIN", async (payload) =>{
    const response = await fetch(URL + "/user/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const res = await response.json();
    return res;
})