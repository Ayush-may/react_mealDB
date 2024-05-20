import React, { useEffect } from "react";
import BigImage from "./components/BigImage";
import CategoryContainer from "./components/CategoryContainer";
import ItemsContainer from "./components/ItemsContainer";
import Footer from "./components/Footer";

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
