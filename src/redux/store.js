import { configureStore } from "@reduxjs/toolkit";

//reducers
import productsSlice from "./reducers/productsSlice";
import singleProductSlice from "./reducers/singleProductSlice";

const store = configureStore({
    reducer: {
        productsReducer: productsSlice,
        singleProductReducer: singleProductSlice
    }
})


export default store;