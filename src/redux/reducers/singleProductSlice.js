import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const myTokenString = "255399:63bc62fb3154f0.09002208";
const api = `https://one-api.ir/digikala/?token=${myTokenString}&action=product&id=`;
const localhost_api = `http://localhost:4001/mobiles/`;

const initialState = {
    loading: false,
    product: {},
    error: ""
};

export const fetchEachProduct = createAsyncThunk(
    "fetch/fetchEachProduct",
    async (mobileId) => {
        try {
            const response = await axios.get(api + mobileId);
            return response.data.result;
        } catch(error) {
            console.log(error);
             return error;
        }
    }
);


const singleProductSlice = createSlice({
    name: "singleProductSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEachProduct.pending, (state) => {
                 state.loading = true;
            })
            .addCase(fetchEachProduct.fulfilled, (state, action) => {
                 state.loading = false;
                 state.product = action.payload;
            })
            .addCase(fetchEachProduct.rejected, (state, action) => {
                  state.loading = false;
                  state.error = action.payload.message;
            })
    }
})

export default singleProductSlice.reducer;