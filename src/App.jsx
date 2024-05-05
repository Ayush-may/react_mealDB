import React from "react";
import NavBar from "./components/NavBar";
import BigImage from "./components/BigImage";
import CatergoryHomePage from "./components/CatergoryHomePage";

const App = () => {
  return (
    <>
      <NavBar />
      <BigImage />
      <div className="lg:px-40 md:px-28 w-full h-full mt-10">
        <CatergoryHomePage />
      </div>
    </>
  );
};

export default App;
