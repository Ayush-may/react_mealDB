import React from "react";

const BigImage = () => {
  return (
    <div className="sm:w-full h-40 sm:h-40 md:h-60 lg:h-80 lg:px-40 relative">
      <div className="search_by_name sm:w-fit w-[258px] rounded-lg border-2 shadow-md border-black overflow-hidden">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-nowrap"
        >
          <input
            className="rounded-s p-3 border-none md:w-80 lg:w-96 w-40"
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
      <div className="scroll bg-black rounded-b-lg overflow-hidden shadow-md">
        <img
          className="opacity-90"
          src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=996&t=st=1714835869~exp=1714836469~hmac=907015c8df32617e12dc84c0b96373985ac3673c3b858b732affd33093ac606b"
          alt=""
        />
      </div>
    </div>
  );
};

export default BigImage;
