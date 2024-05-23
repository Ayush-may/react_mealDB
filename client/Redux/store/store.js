import { configureStore } from '@reduxjs/toolkit';
import catergoryReducer from "../features/category/catergorySlice"


export const store = configureStore({
	reducer : {
		catergory : catergoryReducer,
	} ,
});