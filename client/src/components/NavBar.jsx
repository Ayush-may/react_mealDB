import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import TheMealText from "./TheMealText";
import { AuthContext } from "./authProvider/AuthProvider";

const NavBar = () => {
  const location = useLocation();
  const naviagate = useNavigate();
  const [name, setName] = useState(() =>
    localStorage.getItem("themeal_username")
  );

  // if no one is logged in
  const { isAuth, setAuth } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuth) naviagate("/");
  }, []);

  return (
    <>
      <nav className="fixed w-full z-10 flex flex-col justify-between pt-2 bg-zinc-100 h-fit shadow border-b-2 border-b-slate-700">
        <div className="w-full flex justify-between items-center lg:px-40 md:px-32 px-4">
          <TheMealText style1={"text-3xl"} style2={"uppercase font-bold"} />
          <div className="nav_items flex items-center gap-3">
            <Link to="https://www.themealdb.com/api.php">
              <button className="bg-gray-800 text-white px-4 py-1 rounded">
                API
              </button>
            </Link>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
              onClick={() => {
                // This one deletes the cookies
                document.cookie =
                  "uid =; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                setAuth(false);
              }}
            >
              Log out
            </button>
            <p className="font-bold text-lg max-md:hidden">Welcome {name} !</p>
            <div className="nav_profile_img w-10 h-10 rounded-full bg-dark border border-black overflow-hidden object-cover object-center cursor-pointer">
              <Link to={"/themeal/profile"}>
                <img
                  src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}`}
                  alt="profile"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 text-white uppercase w-full h-auto mt-2 flex sm:justify-end justify-center gap-3 lg:px-40 md:px-32 px-4">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              isActive
                ? "text-red-400  p-1"
                : "hover:outline hover:outline-1  p-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="order"
            end
            className={({ isActive }) =>
              isActive
                ? "text-red-400  p-1"
                : "hover:outline hover:outline-1  p-1"
            }
          >
            Order
          </NavLink>
          <NavLink
            to="Cart"
            end
            className={({ isActive }) =>
              isActive
                ? "text-red-400  p-1"
                : "hover:outline hover:outline-1  p-1"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="profile"
            end
            className={({ isActive }) =>
              isActive
                ? "text-red-400  p-1"
                : "hover:outline hover:outline-1  p-1"
            }
          >
            Profile
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
