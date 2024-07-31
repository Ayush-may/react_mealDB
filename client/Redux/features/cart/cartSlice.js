import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosConfig from '../../../src/api/axiosConfig';
import {findAndDecrementCartItemByMealId, findAndIncrementCartItemByMealId} from './utils';

const initialState = {
	cart: []
};

export const fetchCart = createAsyncThunk(
	"cart/fetchCart",
	async (payload) => {
		try {
			const response = await axiosConfig.post("api/users/fetchCart", {username: payload});
			return response.data;
		} catch (error) {
		}
	}
);

export const updateAddCart = createAsyncThunk(
	"cart/updateAddCart",
	async (payload) => {
		try {
			const response = await axiosConfig.post("api/users/addToCart", {...payload});
			if (response.data == "OK")
				return payload;
		} catch (error) {
		}
	}
);

export const updateCartItemByMealIdInDB = createAsyncThunk(
	"cart/incrementCartItemByMealIdInDB",
	async (payload) => {
		try {
			const response = await axiosConfig.post("api/users/updateQuantity", {...payload});
		} catch (error) {
		}
	}
)

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		/* This method is used for updating the quantity of a cart by 1 and
			then updating the quantity in DB but this one is
			done from another async method `incrementCartItemByMealIdInDB`
			This is called seperatly after calling this below methods */
		incrementCartItemByMealId: (state, {payload}) => {
			findAndIncrementCartItemByMealId(state.cart, payload.mealId);
		},
		decrementCartItemByMealId: (state, {payload}) => {
			findAndDecrementCartItemByMealId(state.cart, payload.mealId);
		}
	},
	extraReducers: (builder) => {
		builder
			// This method is use to get the cart items from DB for Logged in user and update the state of cart
			.addCase(fetchCart.fulfilled, (state, {payload}) => {
				state.cart = payload;
			})
			// If required then write the logic here for `Cart Item Increment by 1 in DB`
			.addCase(updateCartItemByMealIdInDB.fulfilled, (state, {payload}) => {
			})
			.addCase(updateAddCart.fulfilled, (state, {payload}) => {
				const existingMeal = state.cart.find(c => c.mealId == payload.mealId);

				if (existingMeal)
					existingItem.quantity = (parseInt(existingItem.quantity) || 0) + (parseInt(payload.quantity) || 1);
				else
					state.cart.push({
						...payload,
						quantity: "1"
					});
			})
	}
});

export const {
	// addToCart,
	incrementCartItemByMealId,
	decrementCartItemByMealId,
} = cartSlice.actions;
export default cartSlice.reducer;