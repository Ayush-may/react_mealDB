import React from "react";
import { Link } from "react-router-dom";

const sample = [
  {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
  },
  {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
  },
  {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
  },
  {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
  },
  {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
  },
];

const CatergoryHomePage = () => {
  return (
    <div className="w-full h-full lg:p-0 sm:p-3 rounded-md">
      <h1 className="lg:text-5xl text-3xl mb-5 px-2">Category</h1>
      <div className="catergory_area flex flex-nowrap overflow-x-scroll gap-2">
        {sample.map((e) => {
          return (
            <>
              <div className="category_card flex-shrink-0  md:w-60 w-44 border-2 border-slate-100 rounded-md p-4">
                <img src={e.strCategoryThumb} alt="" />
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
