import { motion } from "framer-motion";
import {
  FaRocket,
  FaCar,
  FaCogs,
  FaIndustry,
  FaWind,
  FaLaptopCode,
  FaDraftingCompass,
} from "react-icons/fa";

const services = [
  { name: "Aerospace and Defence", icon: <FaRocket /> },
  { name: "Automotive", icon: <FaCar /> },
  { name: "Electromechanical and Consumer Goods", icon: <FaCogs /> },
  { name: "Heavy Engineering", icon: <FaIndustry /> },
  { name: "Industrial Machinery", icon: <FaIndustry /> },
  { name: "Power and Energy", icon: <FaWind /> },
  { name: "IETM / IETP Services", icon: <FaLaptopCode /> },
  { name: "CAD / CAE Infrastructure", icon: <FaDraftingCompass /> },
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] top-0 left-0 rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[150px] bottom-0 right-0 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
          CAD / CAE{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Engineering Services
          </span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg 
                         hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-5xl mb-4 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300 flex justify-center">
                {service.icon}
              </div>
              <p className="text-center font-semibold">{service.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
