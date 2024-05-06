import React from "react";
import NavBar from "./components/NavBar";
import BigImage from "./components/BigImage";
import CategoryContainer from "./components/CategoryContainer";
import ItemsContainer from "./components/ItemsContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <BigImage />
      <CategoryContainer />
      <ItemsContainer />
    </>
  );
};

export default App;
