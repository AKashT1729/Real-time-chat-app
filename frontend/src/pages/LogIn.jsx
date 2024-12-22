import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { URL } from "../utils/Url";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${URL}/users/login`,data)
      console.log(response.data);
      
      
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("User not exists. Please try a different email or username.");
      } else {
        console.error("Error while LogIn :", error)
        alert("Failed to LogIn. Please try again.");
      }
      
    }
  };
  return (
    <div className="relative w-screen h-screen">
      {/* Left Side Welcome Text with Animation */}
      <div className="absolute left-4 md:left-20 top-1/2 transform -translate-y-1/2 text-gray-200 opacity-80 z-10 px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-2">
          Welcome Back......!!!
        </h1>
        <p className="text-sm md:text-lg animate-fade">
          We're excited to see you again. Log in to access your account and
          continue where you left off. <br /> If you don’t have an account yet,
          sign up and join our community.
        </p>
      </div>

      {/* Login Form */}
      <div className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white/30 backdrop-blur-xl p-4 md:p-10 rounded-xl shadow-2xl z-20">
        <h1 className="text-xl md:text-3xl font-extrabold text-center mb-6 text-gray-900">
          Log In
        </h1>
        <form
          className="flex flex-col space-y-4 md:space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="mt-1 block w-full px-4 md:px-5 py-2 md:py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your username"
              {...register('username',{required:'Username is required'})}
            />
            {errors.username && (
              <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-4 md:px-5 py-2 md:py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your password"
              {...register('password',{required:'Password is required'})}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 md:py-3 bg-red-800 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center mt-4 md:mt-6 text-gray-800">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-red-500 font-medium hover:underline">
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
