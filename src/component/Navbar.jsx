import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 text-white px-6 py-4 flex items-center">
      {/* Logo */}
      <img src="logo.png" alt="Logo" className="h-14 w-28 object-contain" />

      {/* Links */}
      <div className="ml-auto flex space-x-6 text-lg font-medium">
        <a
          href="/"
          className="relative group transition duration-300"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </a>
        <a
          href="/about"
          className="relative group transition duration-300"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </a>
        <a
          href="/contact"
          className="relative group transition duration-300"
        >
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
