import HeroSection from "../component/HomeComponents/HeroSection";
import WhyChoose from "../component/HomeComponents/WhyChoose";
import ServicesSection from "../component/HomeComponents/ServicesSection";
import InfoSection from "../component/HomeComponents/InfoSection";
import CTASection from "../component/Common/CTASection";

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
