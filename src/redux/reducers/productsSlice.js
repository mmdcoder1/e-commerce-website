import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    products: {},
    filterd_products: {},
    search_mode: false,
    error: "",
    cart: {
        sums: {
            total: 0,
            itemsCounter: 0
        },
        checkout: false,
        items: []
    }
};

const myTokenString = "255399:63bc62fb3154f0.09002208";
const api = `https://one-api.ir/digikala/?token=${myTokenString}&action=search&q=%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84&page=1`;
const localhost_api = "http://localhost:4000/mobiles";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const response = await axios.get(localhost_api);
            const data = response.data;
            return data;
        } catch(error) {
            return error;
        }
    }
);

const sumItems = items => {
    const itemsCounter = items.reduce((total, item) => total + item.quantity, 0);
    const total = Number(items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2));
    return { total, itemsCounter };
}


const productsSlice = createSlice({
    name: "productsReducer",
    initialState,
    reducers: {
        search_product: (state, action) => {
                if(action.payload.value !== undefined){
                    state.search_mode = true;
                    let searched_products = state.products.result.filter(product => product.title_fa.toLowerCase().includes(action.payload.value.toLowerCase()));
                    state.filterd_products.result = searched_products;
                } 
        },
        add_item: (state, action) => {
            if(!state.cart.items.find(item => item.id === action.payload.id)) {
                state.cart.items.push({
                    ...action.payload,
                    quantity: 1    
                })
                state.cart.sums = sumItems(state.cart.items);
            }
        },
        remove_item: (state, action) => {
            let updated_cart = state.cart.items.filter(item => item.id !== action.payload.id);
            state.cart.items = [ ...updated_cart ];
            state.cart.sums = sumItems(state.cart.items);
        },
        increase: (state, action) => {
            let indexI = state.cart.items.findIndex(item => item.id === action.payload.id);
            state.cart.items[indexI].quantity++;
            state.cart.sums = sumItems(state.cart.items);
        },
        decrease: (state, action) => {
            let indexD = state.cart.items.findIndex(item => item.id === action.payload.id);
            state.cart.items[indexD].quantity--;
            state.cart.sums = sumItems(state.cart.items);
        },
        checkout: (state) => {
            state.cart = {
                sums: {
                    total: 0,
                    itemsCounter: 0
                },
                checkout: true,
                items: []
            } 
        },
        clear: (state) => {
            state.cart = {
                sums: {
                    total: 0,
                    itemsCounter: 0
                },
                checkout: false,
                items: []
            } 
        }
    },
    extraReducers: (builder) => {
          builder
              .addCase(fetchProducts.pending, (state) => {
                   state.loading = true;
              })
              .addCase(fetchProducts.fulfilled, (state, action) => {
                   state.loading = false;
                   state.products = action.payload;
                   state.filterd_products = action.payload;
              })
              .addCase(fetchProducts.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload.message;
              })
    }
})

export const { search_product, add_item, remove_item, increase, decrease, checkout, clear } = productsSlice.actions;

export default productsSlice.reducer;
