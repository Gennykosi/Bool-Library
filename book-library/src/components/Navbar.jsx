import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <Link
        to="/"
        className="text-white text-xl py-2 px-4 hover:bg-gray-700 rounded mt-2"
      >
        Home
      </Link>
      <Link
        to="/search"
        className="text-white text-xl py-2 px-4 hover:bg-gray-700 rounded mt-2"
      >
        Search
      </Link>
      <Link
        to="/BookDetailsPage"
        className="text-white text-xl py-2 px-4 hover:bg-gray-700 rounded mt-2"
      >
        Book Details
      </Link>
    </div>
  );
};

export default Navbar;
