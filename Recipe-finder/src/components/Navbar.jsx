// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold underline"
      : "text-gray-700 hover:text-blue-400";

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">🍽️ Recipe Finder</h1>
      <div className="space-x-4">
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
        {/* Future Links */}
        {/* <NavLink to="/favorites" className={navLinkStyle}>Favorites</NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
