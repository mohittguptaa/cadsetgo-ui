import React from "react";
import { motion } from "framer-motion";

const InfoSection = ({ title, text }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative px-6 py-24 overflow-hidden text-white bg-black md:px-20"
    >
      {/* Blueprint / CAD-grid overlay pattern */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <img
          src="/blueprint-pattern.jpeg"  // yahaan apna chosen SVG ya PNG ka path
          alt="Blueprint Grid"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Subtle floating CAD icons / components */}
      <div className="absolute text-6xl top-10 left-10 text-gray-400/20">⚙️</div>
      <div className="absolute text-6xl bottom-16 right-12 text-gray-400/20">📐</div>
      <div className="absolute top-1/2 right-1/4 text-gray-400/15 text-8xl">🧰</div>

      {/* Content card */}
      <div className="relative z-10 max-w-3xl p-12 mx-auto text-center border shadow-lg bg-white/5 backdrop-blur-md rounded-2xl border-white/10">
        <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
          CadSetGo helps you to do more with less
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Our technology is built to keep you ahead of industry demands and
rapid technological shifts. By enhancing ambition, unlocking
creativity, and promoting sustainable practices, we empower
professionals to design, build, and innovate with confidence.
Whether you're adapting to new challenges or pushing the
boundaries of possibility, our tools help you create more — faster,
smarter, and with a vision for the future.
        </p>
      </div>
    </motion.section>
  );
};

export default InfoSection;
