import React from "react";
import NavBar from "./components/NavBar";
import BigImage from "./components/BigImage";
import CategoryContainer from "./components/CategoryContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <BigImage />
      <CategoryContainer />
      <div className="lg:px-40 md:px-28 w-full h-full">
        <div className="w-full h-full lg:p-0 sm:p-3 rounded-md">
          <h1 className="lg:text-5xl text-3xl mb-5 lg:mt-10 mt-4 px-2">
            Items
          </h1>
          <div className="items_area"></div>
        </div>
      </div>
    </>
  );
};

export default App;
