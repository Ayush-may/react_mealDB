import React from "react";
import NavBar from "./components/NavBar";
import BigImage from "./components/BigImage";
import CategoryContainer from "./components/CategoryContainer";
import ItemsContainer from "./components/ItemsContainer";
import Footer from "./components/Footer";
import { useParams } from "react-router";

const App = () => {
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
