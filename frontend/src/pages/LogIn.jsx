import React from "react";

const LogIn = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Left Side Welcome Text with Animation */}
      <div className="absolute left-20 top-1/2 transform -translate-y-1/2 text-gray-200 opacity-80 z-10">
        <h1 className="text-5xl font-extrabold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-2">
          Welcome Back......!!!{" "}
        </h1>
        <p className="text-lg animate-fade">
          We're excited to see you again. Log in to access your account and
          continue where you left off. <br /> If you don’t have an account yet,
          sign up and join our community.
        </p>
      </div>

      {/* Login Form */}
      <div className="absolute top-1/2 right-20 w-1/3 transform -translate-y-1/2 bg-white/30 backdrop-blur-xl p-10 rounded-2xl shadow-2xl z-20">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Log In
        </h1>
        <form className="flex flex-col space-y-6">
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
              className="mt-2 block w-full px-5 py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your username"
              required
            />
          </div>
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
              className="mt-2 block w-full px-5 py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-800 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center mt-6 text-gray-800">
          Don't have an account?{" "}
          <a href="#" className="text-red-500 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
