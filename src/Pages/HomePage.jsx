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
      <CTASection />
    </div>
  );
};

export default HomePage;
