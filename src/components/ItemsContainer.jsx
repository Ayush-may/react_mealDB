import React, { useState } from "react";
import { Link } from "react-router-dom";

const category = [
  {
    idMeal: "52977",
    strMeal: "Corba",
    strCategory: "Side",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strTags: "Soup",
  },
  {
    idMeal: "52977",
    strMeal: "Corba",
    strCategory: "Side",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strTags: "Soup",
  },
  {
    idMeal: "52977",
    strMeal: "Corba",
    strCategory: "Side",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strTags: "Soup",
  },
  {
    idMeal: "52977",
    strMeal: "Corba",
    strCategory: "Side",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strTags: "Soup",
  },
  {
    idMeal: "52977",
    strMeal: "Corba",
    strCategory: "Side",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strTags: "Soup",
  },
  {
    idMeal: "52977",
    strMeal: "Corba",
    strCategory: "Side",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strTags: "Soup",
  },
  {
    idMeal: "52977",
    strMeal: "Corba",
    strCategory: "Side",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strTags: "Soup",
  },
];

const ItemsContainer = () => {
  const [state, setState] = useState(0);
  const [limit, setLimit] = useState(3);

  return (
    <div className="lg:px-40 md:px-28 w-full">
      <div className="w-full h-full border lg:p-0 sm:p-3 rounded-md">
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
          {category.map((e) => {
            return (
              <>
                {/* md:w-60 w-44 flex flex-col flex-shrink-0  */}
                <div
                  key={e.idMeal}
                  className="category_card  w-full border-2 border-slate-100 rounded-md p-4"
                >
                  <img className="w-full" src={e.strMealThumb} loading="lazy" />
                  <h1 className="text-center text-3xl font-bold mt-3">
                    {e.strMeal}
                  </h1>
                  <span className=" bg-slate-100 self-end text-slate-500 p-2 text-xs  rounded-xl ">
                    {e.strTags}
                  </span>
                  <Link to={"#"}>
                    <button className="capitalize w-full rounded-md md:py-3 mt-2 py-2 bg-slate-800 hover:bg-slate-800/90 text-white">
                      See Ingredient
                    </button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <div className="w-full flex justify-center">
          <button className="border border-slate-800 p-2">Load more</button>
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;