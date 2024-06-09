import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const TempCarts = useSelector(state => state.cart.cart);
    const [carts, setCarts] = useState(() => TempCarts);

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
                        <main className="w-full grid grid-cols-[minmax(300px,1000px)] justify-center" >
                            {/* <section className="w-full grid grid-cols-[2fr,1fr]" > */}
                            {
                                carts.map(cart =>
                                (
                                    <article className="border text-black" >
                                        {cart.mealId}
                                    </article>
                                ))
                            }
                            {/* </section> */}
                        </main>
                    </>
                }
            </div>
        </>
    );
};

export default Cart;
