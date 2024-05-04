import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/style.scss";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{}],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
