import React from "react";
import HeroSection from "../component/HeroSection";
import WhyChoose from "../component/WhyChoose";
import ServicesSection from "../component/ServicesSection";
import InfoSection from "../component/InfoSection";

const HomePage = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <ServicesSection />
      <WhyChoose />
      <InfoSection
        title="CadSetGo helps you to do more with less"
        text="Our technology is built to keep you ahead of industry demands and
rapid technological shifts. By enhancing ambition, unlocking
creativity, and promoting sustainable practices, we empower
professionals to design, build, and innovate with confidence.
Whether you're adapting to new challenges or pushing the
boundaries of possibility, our tools help you create more — faster,
smarter, and with a vision for the future."
        img="/hero-banner.jpg"
      />
      <InfoSection
        title="CadSetGo makes designs for the world"
        text="Delivering high-precision CAD solutions for industries shaping
        the future, bringing efficiency and technical excellence."
        img="/hero-banner.jpg"
        reverse
      />
    </div>
  );
};

export default HomePage;
