import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../utils/Url";

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "avatar") {
          // Handle file input separately
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });
      const response = await axios.post(
        `${URL}/users/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Registration successful!");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // Handle user already exists error
        alert("User already exists. Please try a different email or username.");
      } else {
        console.error("Error submitting the form:", error);
        alert("Failed to register. Please try again.");
      }
    }
  };
  return (
    <div className="relative w-screen h-dvh overflow-auto">
      {/* Left Side Welcome Text */}
      <div className="absolute left-5 md:left-20 top-1/2 transform -translate-y-1/2 text-gray-800 opacity-90 z-10 px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-2">
          Create Account...
        </h1>
        <p className="text-sm md:text-lg">
          Join our community! Register to start exploring, connecting, <br />
          and enjoying all the features we have to offer.
        </p>
      </div>

      {/* Register Form */}
      <div className="absolute  top-96 right-4 md:right-20 transform -translate-y-1/2 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white/30 backdrop-blur-lg p-4 md:p-8 rounded-xl shadow-2xl z-20">
        <h1 className="text-xl md:text-3xl font-extrabold text-center mb-6 text-gray-900">
          Register
        </h1>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-gray-800"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your full name"
              {...register("fullName", { required: "Enter Full Name" })}
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

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
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Choose a username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-600 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
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
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Choose a password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Password do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Avatar */}
          <div>
            <label
              htmlFor="avatar"
              className="block text-sm font-semibold text-gray-800"
            >
              Upload Avatar
            </label>
            <input
              id="avatar"
              type="file"
              accept="image/*"
              {...register("avatar", {
                required: "Avatar is required",
              })}
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            {errors.avatar && (
              <p className="text-red-600 text-sm mt-1">
                {errors.avatar.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-semibold text-gray-800"
            >
              Gender
            </label>
            <select
              id="gender"
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              {...register("gender", { required: "Gender is required" })}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-600 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-800 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-800">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500 font-medium hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
