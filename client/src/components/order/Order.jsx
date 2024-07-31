import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrder} from "../../../Redux/features/order/orderSlice.js";

const Order = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchOrder("fetchorder is working"));
	}, []);

	return (
		<>
			<div className="w-full h-auto mt-28">
				<div>
					<p className="text-center text-2xl uppercase">
						No Functionality is added for order
					</p>
				</div>
			</div>
		</>
	);
};

export default Order;
