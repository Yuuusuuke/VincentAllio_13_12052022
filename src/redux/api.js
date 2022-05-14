import { createSlice } from "@reduxjs/toolkit";

export const APISlice = createSlice({
    name: "api",
    initialState: {
        value: {},
        status: 0,
        correct: false
    },
    reducers:{
        getAPIData: state => {
            state.value =  {"name": "object1"};
            state.status = 200;
            state.correct = true;
        }
    }
})

export const {getAPIData} = APISlice.actions;

export default APISlice.reducer;