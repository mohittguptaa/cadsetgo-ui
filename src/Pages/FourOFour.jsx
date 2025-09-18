import React from "react";
import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa";

const FourOFour = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-white bg-black">
      {/* 404 Text */}
      <div className="relative z-10 text-center">
        <h1 className="font-extrabold text-white text-8xl md:text-9xl">404</h1>
        <p className="mt-2 text-lg text-gray-400">Page Not Found</p>
      </div>

      {/* Animated Gear under text */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="mt-8"
      >
        <FaCog className="text-gray-600 opacity-40" size={160} />
      </motion.div>
    </div>
  );
};

export default FourOFour;
