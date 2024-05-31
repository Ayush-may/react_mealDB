import React, { useEffect } from "react";
import BigImage from "./components/BigImage";
import CategoryContainer from "./components/CategoryContainer";
import ItemsContainer from "./components/ItemsContainer";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { fetchCart } from "../Redux/features/cart/cartSlice";

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        const username = localStorage.getItem("themeal_username");
        dispatch(fetchCart(username));
    }, []);


    return (
        <>
            <BigImage />
            <CategoryContainer />
            <ItemsContainer />
            <Footer />
        </>
    );
};

export default App;
