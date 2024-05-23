import { createSlice } from '@reduxjs/toolkit';

// this is state
const initialState = {	
	// add some state here
};

// created slice 
export const catergorySlice = createSlice({
	name : "catergory",
	initialState,
	reducers : {
		// here define reducers 
		insertCatergory : (state) => {
			console.log('this is working');
		},
	}
});

// here export the reducers one by one
export const {
	insertCatergory,
} = catergorySlice.actions;

// now export this reducers which is for Store.js
export default catergorySlice.reducer;