import React, { useEffect } from "react";
import BigImage from "./components/BigImage";
import CategoryContainer from "./components/CategoryContainer";
import ItemsContainer from "./components/ItemsContainer";
import Footer from "./components/Footer";
import { useNavigate } from "react-router";

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
