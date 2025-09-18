import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative px-6 py-10 text-gray-300 border-t bg-black/60 backdrop-blur-xl border-white/10">
      <div className="grid items-center grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-3">
        
        {/* Left: Logo + Paragraph */}
        <div className="space-y-4 text-center md:text-left">
          <img src="/logo.png" alt="Logo" className="h-12 mx-auto md:mx-0" />
          <p className="text-sm leading-relaxed text-gray-400">
            CadSetGo delivers cutting-edge CAD & engineering design solutions 
            with precision, creativity, and innovation.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col items-center">
          <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/" className="transition hover:text-cyan-400">Home</a>
            <a href="/about" className="transition hover:text-cyan-400">About</a>
            <a href="/services" className="transition hover:text-cyan-400">Services</a>
            <a href="/contact" className="transition hover:text-cyan-400">Contact</a>
          </div>
        </div>

        {/* Right: Social Media */}
        <div className="flex justify-center gap-4 md:justify-end">
          <a href="#" className="flex items-center justify-center w-10 h-10 transition border rounded-full bg-white/10 border-white/10 hover:bg-cyan-500 hover:text-black">
            <FaFacebookF />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 transition border rounded-full bg-white/10 border-white/10 hover:bg-cyan-500 hover:text-black">
            <FaTwitter />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 transition border rounded-full bg-white/10 border-white/10 hover:bg-cyan-500 hover:text-black">
            <FaLinkedinIn />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 transition border rounded-full bg-white/10 border-white/10 hover:bg-cyan-500 hover:text-black">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom small copyright */}
      <div className="pt-4 mt-10 text-xs text-center text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} CadSetGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
