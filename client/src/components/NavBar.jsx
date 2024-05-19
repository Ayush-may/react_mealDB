import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import TheMealText from "./TheMealText";
import axiosConfig from "../api/axiosConfig";

const NavBar = () => {
 return (
  <>
   <nav className="fixed w-full z-10 flex flex-col justify-between pt-2 bg-zinc-100 h-fit shadow border-b-2 border-b-slate-700">
    <div className="w-full flex justify-between items-center lg:px-40 md:px-32 px-4">
     <TheMealText style1={"text-3xl"} style2={"uppercase font-bold"} />
     <div className="nav_items flex items-center gap-3">
      <Link to="https://www.themealdb.com/api.php">
       <button className="bg-gray-800 text-white px-4 py-1 rounded">API</button>
      </Link>
      <div className="nav_profile_img w-10 h-10 rounded-full bg-dark border border-black overflow-hidden object-cover object-center cursor-pointer">
       <img
        src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Ayush sharma"
        alt="profile"
       />
      </div>
     </div>
    </div>
    <div className="bg-slate-900 text-white uppercase w-full h-auto mt-2 flex sm:justify-end justify-center gap-3 lg:px-40 md:px-32 px-4">
     <NavLink
      to=""
      end
      className={({ isActive }) =>
       isActive ? "text-red-400  p-1" : "hover:outline hover:outline-1  p-1"
      }
     >
      Home
     </NavLink>
     <NavLink
      to="profile"
      end
      className={({ isActive }) =>
       isActive ? "text-red-400  p-1" : "hover:outline hover:outline-1  p-1"
      }
     >
      Profile
     </NavLink>
     <NavLink
      to="order"
      end
      className={({ isActive }) =>
       isActive ? "text-red-400  p-1" : "hover:outline hover:outline-1  p-1"
      }
     >
      Order
     </NavLink>
     <NavLink
      to="Cart"
      end
      className={({ isActive }) =>
       isActive ? "text-red-400  p-1" : "hover:outline hover:outline-1  p-1"
      }
     >
      Cart
     </NavLink>
    </div>
   </nav>
  </>
 );
};

export default NavBar;
