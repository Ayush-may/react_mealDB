import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/loginPage/Login.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar.jsx";
import AuthProvider from "./components/authProvider/AuthProvider.jsx";
import UserProfile from "./components/profile/UserProfile.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/cart/Cart.jsx";
import Order from "./components/order/Order.jsx";

const router = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/themeal",
    element: (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const Route = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};

export default Route;
