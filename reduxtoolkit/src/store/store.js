import { configureStore, createSlice } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: {
        cart: createSlice,


    }
})
export default store