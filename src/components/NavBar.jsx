import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between py-2 bg-zinc-200 h-fit shadow border-b-2 border-b-slate-700">
        <div className="w-full flex justify-between items-center lg:px-60 md:px-32 px-4">
          <div className="text-3xl">
            the
            <span className="uppercase font-bold">meal</span>
          </div>
          <div className="nav_items">
            <Link to="https://www.themealdb.com/api.php">
              <button className="bg-black text-white px-4 py-1 rounded">
                API
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* This is outlet used to show children without removing this parent component/element */}
      <Outlet />
    </>
  );
};

export default NavBar;
