import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! Page Not Found</p>
        <p className="text-lg mb-8">
          It looks like the page you are trying to reach doesn’t exist.
        </p>
        <Link to="/">
          <button className="bg-white text-indigo-500 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
