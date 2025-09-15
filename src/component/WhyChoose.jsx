const WhyChoose = () => (
  <section className="relative bg-black text-white py-20 px-8">
    <div className="absolute inset-0">
      <img
        src="/hero-banner.jpg"
        alt="Why Choose"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <div className="relative max-w-5xl mx-auto text-center space-y-6 bg-gray/10 backdrop-blur-md p-10 rounded-2xl border border-white/20">
      <h2 className="text-3xl font-bold">Why Choose CadSetGo</h2>
      <p className="text-gray-300">
        Choosing CadSetGo means choosing innovation, precision, and reliability. We are more than just a design service—we are your creative and technical partner
committed to turning ideas into impactful solutions. With expertise across multiple industries, we deliver designs that combine functionality with aesthetics,
ensuring your products stand out in the market. Our team leverages the latest CAD, simulation, and prototyping tools to reduce development time, minimize
costs, and improve efficiency at every stage of the process. At CadSetGo, every project is tailored to client needs—whether it’s product design, industrial
systems, or sustainable solutions—making us the perfect choice for businesses aiming for growth and excellence.
      </p>
      <ul className="text-gray-400 list-disc list-inside text-left max-w-xl mx-auto">
        <li>End-to-end design and engineering support</li>
        <li>Expertise across diverse industries and sectors</li>
        <li>CCutting-edge use of CAD, CAE, and prototyping tools</li>
        <li>Focus on innovation, quality, and client satisfaction</li>
        <li>Flexible solutions for startups, SMEs, and enterprises</li>
      </ul>
    </div>
  </section>
);
export default WhyChoose;