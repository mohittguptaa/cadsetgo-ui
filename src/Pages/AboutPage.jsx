import React from "react";
// import CTASection from "../components/CTASection";

const AboutPage = () => {
  return (
    <div className="min-h-screen font-sans text-white bg-black">
      {/* Hero Section */}
      <section className="relative py-48 overflow-hidden text-center">
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[200px] top-10 left-10"></div>
          <div className="absolute w-[500px] h-[500px] bg-pink-500/10 blur-[180px] bottom-0 right-10"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-6 mx-auto">
          <h1 className="mb-6 text-5xl font-extrabold md:text-7xl">
            About <span className="text-cyan-400">CadSetGo</span>
          </h1>
          <p className="text-lg text-gray-300">
            Delivering world-class CAD and engineering design solutions with
            precision, creativity, and cutting-edge tools.
          </p>
        </div>
      </section>

      {/* Director Message */}
      <section className="flex flex-col items-center gap-12 px-6 py-16 md:px-20 md:flex-row">
        <img
          src="/my-img.png" // replace with actual director image
          alt="Director"
          className="object-cover shadow-lg w-72 h-72 "
        />
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-cyan-400">Director’s Message</h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            “Our company has always believed in pushing the boundaries of design and precision. 
            With AutoCAD expertise and modern technologies, we strive to deliver 
            solutions that empower architects, engineers, and creators worldwide.”
          </p>
          <p className="mt-4 italic text-gray-400">– John Doe, Director</p>
        </div>
      </section>

      {/* Our Services */}
      <section className="relative px-6 py-20 md:px-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Our <span className="text-cyan-400">Services</span>
        </h2>
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3">
          {[
            "Aerospace Engineering",
            "Automotive Design",
            "Industrial Machinery",
            "Heavy Engineering",
            "Electrical Systems",
            "CAD/CAE Prototyping",
            "CAD/CAE Prototyping",
            "CAD/CAE Prototyping",
            "CAD/CAE Prototyping",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 transition-transform border shadow-lg bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:scale-105"
            >
              <h3 className="mb-2 text-xl font-semibold">{service}</h3>
              <p className="text-sm text-gray-400">
                Innovative solutions tailored for the {service.toLowerCase()} industry.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">
          Let’s Build the Future Together
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-gray-400">
          Ready to take your projects to the next level? Connect with us and 
          transform your vision into reality with precision and creativity.
        </p>
        <button className="px-8 py-3 mt-8 text-lg font-semibold transition-transform rounded-full shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
