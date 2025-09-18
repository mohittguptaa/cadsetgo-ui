import React from "react";
import HeroSection from "../component/HeroSection";
import WhyChoose from "../component/WhyChoose";
import ServicesSection from "../component/ServicesSection";
import InfoSection from "../component/InfoSection";
import CTASection from "../component/CTASection";

const HomePage = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <ServicesSection />
      <WhyChoose />
      <InfoSection />
      {/* <InfoSection
        title="CadSetGo makes designs for the world"
        text="Delivering high-precision CAD solutions for industries shaping
        the future, bringing efficiency and technical excellence."
        img="/hero-banner.jpg"
        reverse
      /> */}
      <CTASection/>
    </div>
  );
};

export default HomePage;
