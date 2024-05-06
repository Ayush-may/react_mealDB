import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import api from "../api/apiConfig";

const limitMeal = 6;

const ItemsContainer = () => {
  const [state, setState] = useState(0);
  const [meal, setMeal] = useState([]);
  const [memoMeal, setMemoMeal] = useState([]);

  //   useMemo(async () => {
  //     console.log("use memo is running");
  //     const data = await api.getMeal(state, 6);
  //     const tempMeal = [...meal, ...data];
  //     setMemoMeal(tempMeal);
  //   }, [state]);

  useEffect(() => {
    (async () => {
      console.log("useEffect is running");
      const data = await api.getMeal(state, 6);
      setMeal(data);
    })();
  }, []);

  useEffect(() => {
    if (state > 0) {
      (async () => {
        console.log("useEffect2 is running");
        const data = await api.getMealPagination(meal.length, state, 4);
        const tempMeal = [...meal, ...data];
        setMeal(tempMeal);
      })();
    }
  }, [state]);

  return (
    <div className="lg:px-40 md:px-28 w-full">
      <div className="w-full h-full lg:p-0 sm:p-3 rounded-md">
        <h1 className="lg:text-5xl text-3xl mb-5 lg:mt-10 mt-4 px-2 capitalize">
          Try our Meals
        </h1>
        <div
          className="items_area grid gap-2 xl:gap-4
            grid-cols-2 
            sm:grid-cols-3
            md:grid-cols-4
            xl:grid-cols-5
            "
        >
          {/* flex flex-wrap  */}
          {meal.map((e) => {
            return (
              <>
                {/* md:w-60 w-44   */}
                <div
                  key={e.idMeal}
                  className="category_card flex flex-col flex-shrink-0 w-full border-2 border-slate-300 rounded-md p-4"
                >
                  <img className="w-full" src={e.strMealThumb} loading="lazy" />
                  <h1 className="text-center text-3xl font-bold mt-3">
                    {e.strMeal}
                  </h1>
                  <span className=" bg-slate-50 self-end text-slate-400 p-2 my-1 text-xs  rounded-xl ">
                    {e.strTags}
                  </span>
                  <Link to={"#"} className="h-full flex">
                    <button className="capitalizeself-end w-full self-end rounded-md md:py-3 mt-2 py-2 bg-slate-800 hover:bg-slate-800/90 text-white">
                      See Ingredient
                    </button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <div className="w-full flex gap-2 justify-center">
          <button
            className="border border-slate-800 p-2 my-3"
            onClick={() => setState((prev) => prev + 1)}
          >
            Load more
          </button>
          <button
            className="border border-slate-800 p-2 my-3"
            onClick={() => {
              setMeal(meal.splice(0, limitMeal));
            }}
          >
            Show less
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
