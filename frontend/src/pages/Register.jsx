import React from "react";

const Register = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Left Side Welcome Text with Animation */}
      <div className="absolute left-20 top-1/2 transform -translate-y-1/2 text-gray-200 opacity-80 z-10">
        <h1 className="text-5xl font-extrabold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-2">
          Create Account.............
        </h1>
        <p className="text-lg animate-fade">
          Join our community! Register to start exploring, connecting, <br /> and enjoying all the features we have to offer.
        </p>
      </div>

      {/* Register Form */}
      <div className="absolute h-fit top-1/2 right-28 w-1/3 transform -translate-y-1/2 bg-white/30 backdrop-blur-xl p-10 rounded-2xl shadow-2xl z-20">
        <h1 className="text-2xl font-extrabold text-center mb-6 text-gray-900">
          Register
        </h1>
        <form className="flex flex-col space-y-2">
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
              className="mt-2 block w-full px-5 py-1 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
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
              className="mt-2 block w-full px-5 py-1 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Choose a username"
              required
            />
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
              className="mt-2 block w-full px-5 py-1 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
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
              className="mt-2 block w-full px-5 py-1 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Choose a password"
              required
            />
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
              className="mt-2 block w-full px-5 py-1 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Confirm your password"
              required
            />
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
              className="mt-2 block w-full px-5 py-1 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
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
              className="mt-2 block w-full px-5 py-1 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-800 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-6 text-gray-800">
          Already have an account?{" "}
          <a href="#" className="text-red-500 font-medium hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
