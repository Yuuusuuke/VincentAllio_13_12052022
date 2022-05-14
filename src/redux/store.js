import {configureStore} from "@reduxjs/toolkit";
import APIReducer from "./api";

export default configureStore({
    reducer: {
        api: APIReducer
    }
})