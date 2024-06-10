import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import IncrementDecrementButton from "./IncrementDecrementButton";

const Cart = () => {
    const TempCarts = useSelector(state => state.cart.cart);
    const [carts, setCarts] = useState(() => TempCarts);

    const [totalPrice, setPrice] = useState(() => {
        let total = 0;
        carts.forEach(cart => {
            total += Number.parseInt(cart.price) * Number.parseInt(cart.quantity);
        })
        return total;
    });

    return (
        <>
            <div className="w-full h-auto mt-24 p-3 pb-16">
                {/* No items here */}
                {
                    carts.length == 0 && <h1 className="h-auto mt-18 text-center text-2xl" >No items in cart <span className="font-bold bg-yellow-300 p-3" >Shop Now !</span></h1>
                }

                {/* Items here */}
                {
                    carts.length > 0 &&
                    <>
                        <main className="w-full grid grid-cols-[minmax(300px,1200px)] justify-center" >
                            <section className="flex">
                                <table className="table w-full table-fixed ">
                                    <thead className=" text-gray-400 text-xl capitalize">
                                        <th className="text-start max-w-[150px] font-[400]" >product details</th>
                                        <th className="text-center font-[400]">Quantity</th>
                                        <th className="text-center font-[400]">price</th>
                                        <th className="text-center font-[400]">Total</th>
                                    </thead>
                                    <tbody className="h-full">
                                        {carts.map(cart =>
                                            <tr className="h-full">
                                                <td className="py-5">
                                                    <div className="flex gap-5 h-full" >
                                                        <img src={cart.mealImage} className="w-[100px] h-[100px]" />
                                                        <span className="flex flex-col" >
                                                            <h4 className="text-2xl">{cart.mealName}</h4>
                                                            <button className="mt-auto text-gray-500">remove</button>
                                                        </span>
                                                    </div>
                                                </td>
                                                {/* <td className="text-center">{cart.quantity}</td> */}
                                                <td className="text-center flex justify-center items-center h-full">
                                                    <IncrementDecrementButton quantity={cart.quantity} />
                                                </td>
                                                <td className="text-center">{cart.price}</td>
                                                <td className="text-center">${cart.price * 1}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                                <section className="min-w-[300px] max-w-[400px] px-4 h-full border bg-gray-100" >
                                    <h1 className="text-center capitalize text-600 text-2xl p-5">Order Summary</h1>
                                    <span className="block w-full h-[1px] bg-gray-500 my-5" ></span>
                                    <h5 className="flex w-full">
                                        Total
                                        <span className="ms-auto" >${totalPrice}</span>
                                    </h5>
                                </section>
                            </section>
                        </main>
                    </>
                }
            </div>
        </>
    );
};

export default Cart;
