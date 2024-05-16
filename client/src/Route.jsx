import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/loginPage/Login.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import App from "./App.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        element: <App />,
    },
]);

const Route = () => {
    return (
        <>
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            /> */}
            <RouterProvider router={router} />;
        </>
    );
};

export default Route;
