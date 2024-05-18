import React from "react";
import TheMealText from "../TheMealText";
import { Link, json } from "react-router-dom";
import Footer from "../Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosConfig from "../../api/axiosConfig";

const usernameValidations = {
    required: "username is required",
    pattern: {
        value: /^[A-Z][a-zA-Z]*$/,
        message:
            "Username must start with a capital letter and contain only letters.",
    },
};

const passwordValidations = {
    required: "password is required",
    minLength: {
        value: 8,
        message: "minimum character must be 8",
    },
};

const Login = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await axiosConfig.post("/api/users/loginuser", {
                data: { ...data },
            });

            if (response.status == 200) alert("User is logged in !");
        } catch (error) {
            if (!error.response) {
                alert("something went wrong");
                return;
            }
            const { status } = error.response;
            if (status == 401) {
                [
                    {
                        type: "custom",
                        name: "username",
                        message: "username is wrong",
                    },
                    {
                        type: "custom",
                        name: "password",
                        message: "password is wrong",
                    },
                ].forEach(({ name, type, message }) => {
                    setError(name, { type, message });
                });
            } else if (status == 404) {
                setError("username", {
                    type: "custom",
                    message: "username is not available",
                });
            } else if (status == 400) alert("Something went wrong");
        }
    };

    const UsernameError = () => {
        return (
            errors.username && (
                <p className="text-sm font-light text-red-500 mt-[-10px] ps-5">
                    {errors.username.message}
                </p>
            )
        );
    };

    const PasswordError = () => {
        return (
            errors.password && (
                <p className="text-sm font-light text-red-500 mt-[-10px] ps-5">
                    {errors.password.message}
                </p>
            )
        );
    };

    return (
        <>
            <div className="w-full h-full flex justify-center items-center border border-black">
                <div className="lg:min-w-[400px] w-80 md:translate-y-[-30%]">
                    <div className="text-center text-4xl">
                        <TheMealText
                            style1={"text-5xl"}
                            style2={"uppercase font-bold"}
                        />
                    </div>

                    <form
                        className="mt-10 flex flex-col gap-3"
                        onSubmit={handleSubmit(onSubmit)}
                        autoComplete="off"
                    >
                        <input
                            {...register("username", usernameValidations)}
                            autoComplete="off"
                            type="text"
                            name="username"
                            placeholder="username"
                            className="py-3 ps-5 rounded-full border w-full"
                        />
                        <UsernameError />
                        <input
                            {...register("password", passwordValidations)}
                            autoComplete="off"
                            type="password"
                            name="password"
                            placeholder="password"
                            className="py-3 ps-5 rounded-full border w-full"
                        />
                        <PasswordError />
                        <button
                            type="submit"
                            className="w-full bg-slate-800 text-white py-3 rounded-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Loading..." : "Login"}
                        </button>
                        <p className="text-sm font-light text-black md:mt-0 mt-[-5px] text-center">
                            create a new account ?
                            <Link to={"/signup"} className="text-blue-600 ms-2">
                                click here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
