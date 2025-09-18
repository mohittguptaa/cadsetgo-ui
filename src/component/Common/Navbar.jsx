import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center w-full px-6 py-4 text-white border-b bg-white/10 backdrop-blur-md border-white/10">
      {/* Logo */}
      <img src="logo.png" alt="Logo" className="object-contain h-14 w-28" />

      {/* Links */}
      <div className="flex ml-auto space-x-6 text-lg font-medium">
        <Link
          to="/"
          className="relative transition duration-300 group"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          to="/about"
          className="relative transition duration-300 group"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          to="/contact"
          className="relative transition duration-300 group"
        >
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          to="/services"
          className="relative transition duration-300 group"
        >
          Services
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
