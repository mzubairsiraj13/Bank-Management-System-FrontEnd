import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>

        <p className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page Not Found
        </p>
        <p className="text-md text-gray-600 mt-2">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
