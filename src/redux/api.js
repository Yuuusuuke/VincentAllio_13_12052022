import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "http://localhost:3001/api/v1";

export const APISlice = createSlice({
    name: "api",
    initialState: {
        value: {},
        valueFilled: false, // Used to know if the "value" state gets updated
        token: "none",
        status: 0,
        connected: false, // Used to know if the user is connected or not
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
        builder.addCase(logIN.fulfilled, (state, action) => { // Get status and message from API. If status is OK => get token and switch connected boolean
            state.status = action.payload.status;
            state.message = action.payload.message;
            if (state.status === 200){
                state.token = action.payload.body.token;
                state.connected = true;
            }
        });
        builder.addCase(getUserData.fulfilled, (state, action) => { // Get status and message from API. If status is OK => get all the user data and switch valueFilled boolean
            state.status = action.payload.status;
            state.message = action.payload.message;
            if(state.status === 200){
                state.value = action.payload.body;
                state.valueFilled = true;
            }
        });
        builder.addCase(changeName.fulfilled, (state, action) => { // get status and message from API. If status is OK => get all the user data in order to update the new data, otherwise display the error on console
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
            "Authorization": "Bearer " + token, // Authorization using Bearer tokens
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