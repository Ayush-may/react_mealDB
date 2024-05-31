import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../../src/api/axiosConfig';

const initialState = {
    cart: [{}]
};

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async (payload) => {
        try {
            const response = await axiosConfig.post("api/users/fetchCart", { username: payload });
            return response.data;
        } catch (error) { }
    }
);

export const updateAddCart = createAsyncThunk(
    "cart/updateAddCart",
    async (payload) => {
        try {
            const response = await axiosConfig.post("api/users/addToCart", { ...payload });
            return payload;
        } catch (error) { }
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => { }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateAddCart.fulfilled, (state, { payload }) => {
                state.cart.push(payload);
            })
            .addCase(fetchCart.fulfilled, (state, { payload }) => {
                state.cart = payload;
            })
    }
});

export const {
    addToCart,
} = cartSlice.actions;
export default cartSlice.reducer;