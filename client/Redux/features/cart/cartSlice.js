import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../../src/api/axiosConfig';
import { findAndIncrementCartItemByMealId } from './utils';

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
        } catch (error) { }
    }
);

export const incrementCartItemByMealId = createAsyncThunk(
    "cart/incrementCartItemByMealId",
    async (payload) => {
        try { } catch (error) { }
    }
)

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => { },
        // incrementCartItemByMealId: (state, { payload }) => {
        //     findAndIncrementCartItemByMealId(state.cart, payload.mealId);
        //     dispatch(updateAddCart({ mealId: payload.mealId, typeOfReq: "INCREMENT" }));
        // }
    },
    extraReducers: (builder) => {
        builder
            // .addCase(updateAddCart.fulfilled, (state, { payload }) => {
            //     console.log(payload);
            //     state.cart.push(payload);
            // })
            .addCase(fetchCart.fulfilled, (state, { payload }) => {
                state.cart = payload;
            })
            .addCase(incrementCartItemByMealId.fulfilled, (state) => {
                findAndIncrementCartItemByMealId(state.cart, payload.mealId); 
            })
    }
});

export const {
    addToCart,
} = cartSlice.actions;
export default cartSlice.reducer;