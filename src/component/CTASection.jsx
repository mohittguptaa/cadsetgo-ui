import React from "react";
import { Link } from "react-router-dom";

const CTASection = ({
  title = "Ready to start your next project?",
  subtitle = "Let's collaborate and bring your ideas to life with precision and creativity.",
  primaryLabel = "Get Started",
  primaryLink = "/contact",
  secondaryLabel = "Learn More",
  secondaryLink = "/about",
}) => {
  return (
    <section className="relative py-20 overflow-hidden text-center text-white bg-black">
      {/* Background glow effect */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[200px] rounded-full top-20 left-1/4"></div>
        <div className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-[160px] rounded-full bottom-10 right-1/4"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 mx-auto">
        <h2 className="mb-4 text-3xl font-extrabold md:text-5xl">{title}</h2>
        <p className="mb-8 text-gray-400">{subtitle}</p>
        <div className="flex justify-center gap-6">
          <Link
            to={primaryLink}
            className="px-6 py-3 font-semibold text-black transition rounded-lg bg-cyan-500 hover:bg-cyan-400"
          >
            {primaryLabel}
          </Link>
          <Link
            to={secondaryLink}
            className="px-6 py-3 font-semibold text-white transition bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
