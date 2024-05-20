import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/loginPage/Login.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar.jsx";
import AuthProvider from "./components/authProvider/AuthProvider.jsx";

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
   </>
  ),
  children: [
   {
    path: "",
    element: <App />,
   },
   {
    path: "profile",
    element: <h1>This is profile</h1>,
   },
   {
    path: "order",
    element: <h1>This is order</h1>,
   },
   {
    path: "cart",
    element: <h1>This is cart</h1>,
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
