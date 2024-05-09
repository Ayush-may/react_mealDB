import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/apiConfig";
import fakeDelay from "../utlities/fakeDelay";
import CatergorySkeleton from "./CatergorySkeleton";

const CatergoryHomePage = () => {
  const [category, setCategory] = useState([]);
  //   Api calling
  useEffect(() => {
    (async () => {
      const p = await api.getCatetoryList();
      await fakeDelay(1500);
      setCategory(p.categories);
    })();
  }, []);
  return (
    <div className="w-full h-full lg:p-0 sm:p-3 rounded-md">
      <h1 className="lg:text-5xl text-3xl mb-5 px-2">Category</h1>
      <div className="catergory_area flex flex-nowrap overflow-x-scroll gap-2">
        {category.length <= 0 && <CatergorySkeleton />}
        {category &&
          category.map((e) => {
            return (
              <>
                <div
                  key={e.idCategory}
                  className="category_card flex-shrink-0  md:w-60 w-44 border-2 border-slate-100 rounded-md p-4"
                >
                  <img
                    className="w-full"
                    src={e.strCategoryThumb}
                    loading="lazy"
                  />
                  <h1 className="text-center text-3xl font-bold my-3">
                    {e.strCategory}
                  </h1>
                  <Link to={"#"}>
                    <button className="capitalize w-full rounded-md md:py-3 py-2 bg-slate-800 hover:bg-slate-800/90 text-white">
                      See Ingredient
                    </button>
                  </Link>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default CatergoryHomePage;
