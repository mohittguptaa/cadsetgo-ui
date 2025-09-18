import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "SPM Design",
    desc: "Customized Special Purpose Machines engineered for precision, efficiency, and higher productivity.",
  },
  {
    title: "Mechanical - Industrial Design",
    desc: "AutoCAD 2D drawings & 3D models that transform ideas into accurate, manufacturable designs.",
  },
  {
    title: "New Product Development (NPD)",
    desc: "From concept to production, we deliver innovative and market-ready product solutions.",
  },
  {
    title: "Medical Equipment Design",
    desc: "Ergonomic, safe, and efficient healthcare tools designed to meet strict industry standards.",
  },
  {
    title: "Prototyping & Simulation",
    desc: "3D animation, structural, thermal & CFD simulations for cost-effective, reliable designs.",
  },
  {
    title: "Tool & Die Compounds",
    desc: "Precision-driven tool, jig, fixture, mold, and die designs for scalable manufacturing.",
  },
  {
    title: "Interior & Furniture Systems",
    desc: "Modern, ergonomic, and aesthetic interiors & furniture tailored for homes, offices & industry.",
  },
  {
    title: "Sustainable / Green Design",
    desc: "Eco-friendly product designs with sustainable materials & energy-efficient practices.",
  },
  {
    title: "Robotics & Automation",
    desc: "Custom robotic systems & automation prototypes combining mechanical & electronic engineering.",
  },
  {
    title: "Assemblies & DWG Formats",
    desc: "Precise SolidWorks 3D assemblies & DWG drawings for collaboration & manufacturing.",
  },
  {
    title: "3D Printing Support",
    desc: "Optimized designs, ready-to-print STL models, and functional prototypes for additive manufacturing.",
  },
  {
    title: "Reverse Engineering Design",
    desc: "Convert physical parts into accurate CAD models, modernize legacy designs, and optimize performance.",
  },
  {
    title: "Technical Documentation",
    desc: "Detailed 2D drawings, BOMs, GD&T, and assembly docs to streamline manufacturing & assembly.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen text-white bg-black">
      {/* Hero */}
      <section className="relative text-center py-28">
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] top-0 left-0"></div>
          <div className="absolute w-[500px] h-[500px] bg-pink-500/10 blur-[200px] bottom-0 right-0"></div>
        </div>
        <div className="relative z-10">
          <h1 className="mb-6 text-5xl font-extrabold md:text-7xl">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Designs beyond limits — we blend precision, creativity, and innovation to craft
            engineering solutions for every industry.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-6 py-20 md:px-16">
        <div className="grid gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg overflow-hidden hover:scale-[1.04] hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {/* Accent Gradient Border */}
              <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-pink-500/20 group-hover:opacity-100"></div>

              <div className="relative z-10 p-8">
                <h3 className="mb-3 text-2xl font-bold text-cyan-300">{service.title}</h3>
                <p className="leading-relaxed text-gray-300">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden text-center py-28">
        {/* Glow background */}
        <div className="absolute inset-0">
          <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 blur-[250px] top-10 left-1/4"></div>
          <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[220px] bottom-0 right-1/4"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to <span className="text-cyan-400">Engineer</span> Your Future?
          </h2>
          <p className="mb-10 text-gray-400">
            Let’s collaborate on groundbreaking CAD solutions that redefine design, precision, and innovation. 
            Partner with us today.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              to="/contact"
              className="px-8 py-3 font-semibold text-black transition-transform rounded-lg shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 font-semibold text-white transition border rounded-lg bg-white/10 border-white/20 hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
