const InfoSection = ({ title, text, img, reverse }) => (
  <section
    className={`relative py-20 px-6 flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } items-center gap-12`}
  >
    {/* Background blobs */}
    <div className="absolute -z-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full top-20 left-10 animate-pulse"></div>
    <div className="absolute -z-10 w-[400px] h-[400px] bg-pink-500/10 blur-[150px] rounded-full bottom-10 right-10 animate-pulse"></div>

    {/* Text content */}
    <div className="flex-1 space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg 
      transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20">
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{text}</p>
    </div>

    {/* Image */}
    <div className="flex-1">
      <img
        src={img}
        alt={title}
        className="rounded-2xl shadow-xl border border-white/10 transform transition-all duration-300 hover:scale-105"
      />
    </div>
  </section>
);

export default InfoSection;
