import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="sm:w-full h-40 sm:h-40 md:h-60 lg:h-80 lg:px-60 relative">
        <div className="search_by_name w-fit rounded-lg border-2 shadow-md border-black overflow-hidden">
          <form onSubmit={(e) => e.preventDefault()} className="w-full">
            <input
              className="rounded-s p-3 border-none lg:w-96 w-40"
              type="text"
              placeholder="Search meal by name"
              style={{ outline: "none" }}
            />
            <button
              type="submit"
              className="rounded-e py-3 px-6 bg-slate-800 text-white"
            >
              search
            </button>
          </form>
        </div>
        <div className="scroll bg-black">
          <img
            className="opacity-90"
            src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default App;
