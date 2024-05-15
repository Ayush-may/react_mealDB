import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/style.scss";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/loginPage/Login.jsx";
import SignUp from "./components/signup/SignUp.jsx";

const router = createBrowserRouter([
 {
  path: "/",
  element: <Login />,
 },
 {
  path: "/signup",
  element: <SignUp />,
 },
 {
  path: "themeal/:username",
  element: <App />,
  children: [{}],
 },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);
