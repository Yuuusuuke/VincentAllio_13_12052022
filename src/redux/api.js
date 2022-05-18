import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "http://localhost:3001/api/v1";

export const APISlice = createSlice({
    name: "api",
    initialState: {
        value: {},
        valueFilled: false,
        token: "none",
        status: 0,
        connected: false,
        message: "",
    },
    reducers:{
        disconnectUser: state => {
            state.value = {};
            state.valueFilled = false;
            state.token = "none";
            state.status = 0;
            state.connected = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logIN.fulfilled, (state, action) => {
            state.status = action.payload.status;
            state.message = action.payload.message;
            if (state.status === 200){
                state.token = action.payload.body.token;
                state.connected = true;
            }
        });
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.status = action.payload.status;
            state.message = action.payload.message;
            if(state.status === 200){
                state.value = action.payload.body;
                state.valueFilled = true;
            }
        });
        builder.addCase(changeName.fulfilled, (state, action) => {
            state.status = action.payload.status;
            state.message = action.payload.message;
            action.payload.status === 200 ? 
                state.value = action.payload.body 
                :
                console.log(`Error ${action.payload.status} : ${action.payload.message}`)
        });
    }
})

export const {disconnectUser} = APISlice.actions;

export default APISlice.reducer;

export const logIN = createAsyncThunk("api/logIN", async (payload) =>{
    const response = await fetch(URL + "/user/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const res = await response.json();
    return res;
})

export const getUserData = createAsyncThunk("api/getUserData", async (token) =>{
    const response = await fetch(URL + "/user/profile", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "Authorization": "Bearer " + token,
        }
    });
    const res = await response.json();
    return res;
})

export const changeName = createAsyncThunk("api/changeName", async (payload) =>{ // Only 1 arg otherwise it cries (payload is a table where 0 is the token and 1 is the body)
    const response = await fetch(URL + "/user/profile", {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "Authorization": "Bearer " + payload[0],
        },
        body: JSON.stringify(payload[1])
    });
    const res = await response.json();
    return res;
})