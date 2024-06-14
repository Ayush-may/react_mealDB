import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementCartItemByMealId } from '../../../Redux/features/cart/cartSlice';

const IncrementDecrementButton = ({ quantity, mealId }) => {
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch(incrementCartItemByMealId({ mealId }));
    };
    const handleDecrement = () => { };

    return (
        <div className="w-auto h-fit flex justify-center items-center bg-gray-200 rounded-md shadow-sm border" >
            <button className="p-2 border-e-[2px]" onClick={handleIncrement}>+</button>
            <p className="p-2 px-3 bg-white">{quantity}</p>
            <button className="p-2 border-s-[2px]" onClick={handleDecrement}>-</button>
        </div>
    )
}

export default IncrementDecrementButton;