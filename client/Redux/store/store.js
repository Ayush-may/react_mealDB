import { configureStore } from '@reduxjs/toolkit';
import catergoryReducer from "../features/category/catergorySlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
	reducer: {
		catergory: catergoryReducer,
		cart: cartReducer,
	},
});