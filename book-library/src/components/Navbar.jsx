import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="nav-style">
      <Link
        to="/"
        className="text-black text-xl py-2 px-4 hover:bg-gray-600 rounded mt-2"
      >
        Home
      </Link>
      <Link
        to="/search"
        className="text-black text-xl py-2 px-4 hover:bg-gray-600 rounded mt-2"
      >
        Search
      </Link>
      <Link
        to="/BookDetailsPage"
        className="text-black text-xl py-2 px-4 hover:bg-gray-600 rounded mt-2"
      >
        Book Details
      </Link>
    </div>
  );
};

export default Navbar;
