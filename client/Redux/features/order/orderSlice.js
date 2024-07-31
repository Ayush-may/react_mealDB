import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosConfig from '../../../src/api/axiosConfig';

const initialState = {
	order: []
}

export const fetchOrder = createAsyncThunk(
	"order/fetchOrder",
	async function (payload) {
		try {
			return axiosConfig.post("api/user/order",{...payload});
			return payload;
		} catch (error) {
		}
	}
);

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		insertOrderFromCart: function (state, {payload}) {
			state.order = payload;
		},
	},
	extraReducers: function (builder) {
		builder
			// insert orders
			.addCase(fetchOrder.fulfilled, function (state, {payload}) {
				state.order = payload;
			})
	}
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;