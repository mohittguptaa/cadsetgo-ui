const HeroSection = () => (
  <section className="relative bg-black text-white py-32 overflow-hidden">
    {/* Animated Grid Background */}
    <div className="absolute inset-0 z-0">
      <svg
        className="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="cyan"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated Scanning Line */}
      {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-pink-500 animate-scan"></div> */}
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          CadSetGo
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        Innovating design solutions with precision. At CadSetGo, we specialize
        in delivering top-tier CAD and engineering design services, powered by
        industry-leading tools like AutoCAD, SolidWorks, PTC Creo, Fusion 360,
        and 3ds Max. Whether you're looking for custom crane designs, product
        prototypes, or expert 3D modeling, we bring your ideas to life with
        technical excellence and creativity.
      </p>
      <button className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 hover:from-pink-500 hover:to-cyan-400 text-black rounded-2xl font-bold shadow-xl transition-all duration-300">
        Get Started
      </button>
    </div>

    {/* Floating CAD/Engineering Icons */}
    <div className="absolute bottom-10 left-10 text-cyan-400 text-6xl animate-float">
      📐
    </div>
    <div className="absolute top-20 right-16 text-pink-400 text-6xl animate-float-slow">
      ⚙️
    </div>
    <div className="absolute bottom-20 right-32 text-cyan-300 text-5xl animate-float">
      📏
    </div>
    {/* <div className="absolute top-40 left-1/4 text-pink-300 text-5xl animate-float">
      🏗️
    </div> */}
    <div className="absolute bottom-40 left-1/3 text-cyan-200 text-5xl animate-float-slow">
      🖊️
    </div>
    <div className="absolute top-4 right-1/4 text-pink-200 text-6xl animate-float">
      🧰
    </div>
    {/* <div className="absolute bottom-24 right-1/4 text-cyan-400 text-6xl animate-float-slow">
      🖥️
    </div> */}
    <div className="absolute top-16 left-16 text-pink-400 text-6xl animate-float">
      📊
    </div>
  </section>
);

export default HeroSection;
