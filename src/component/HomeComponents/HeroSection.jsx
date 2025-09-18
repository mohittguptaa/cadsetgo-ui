const HeroSection = () => (
  <section className="relative h-full py-32 overflow-hidden text-white bg-black">
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
    <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
      <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
        Welcome to{" "}
        <span className="text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text">
          CadSetGo
        </span>
      </h1>
      <p className="text-lg leading-relaxed text-justify text-gray-300 md:text-xl">
        Innovating design solutions with precision. At CadSetGo, we specialize
        in delivering top-tier CAD and engineering design services, powered by
        industry-leading tools like AutoCAD, SolidWorks, PTC Creo, Fusion 360,
        and 3ds Max. Whether you're looking for custom crane designs, product
        prototypes, or expert 3D modeling, we bring your ideas to life with
        technical excellence and creativity.
      </p>
      <button className="px-8 py-3 mt-8 font-bold text-black transition-all duration-300 shadow-xl bg-gradient-to-r from-cyan-400 to-pink-500 hover:from-pink-500 hover:to-cyan-400 rounded-2xl">
        Get Started
      </button>
    </div>

    {/* Floating CAD/Engineering Icons */}
    <div className="absolute text-6xl bottom-10 left-10 text-cyan-400 animate-float">
      📐
    </div>
    <div className="absolute text-6xl text-pink-400 top-20 right-16 animate-float-slow">
      ⚙️
    </div>
    <div className="absolute text-5xl bottom-20 right-32 text-cyan-300 animate-float">
      📏
    </div>
    {/* <div className="absolute text-5xl text-pink-300 top-40 left-1/4 animate-float">
      🏗️
    </div> */}
    <div className="absolute text-5xl bottom-40 left-1/3 text-cyan-200 animate-float-slow">
      🖊️
    </div>
    <div className="absolute text-6xl text-pink-200 top-4 right-1/4 animate-float">
      🧰
    </div>
    {/* <div className="absolute text-6xl bottom-24 right-1/4 text-cyan-400 animate-float-slow">
      🖥️
    </div> */}
    <div className="absolute text-6xl text-pink-400 top-16 left-16 animate-float">
      📊
    </div>
  </section>
);

export default HeroSection;
