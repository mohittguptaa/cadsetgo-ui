import React, { useState, useEffect } from "react";
import HeroSection from "../component/HeroSection";
import WhyChoose from "../component/WhyChoose";
import ServicesSection from "../component/ServicesSection";
import InfoSection from "../component/InfoSection";
import CTASection from "../component/CTASection";
import LoadingScreen from "../component/LoadingScreen";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1.2 sec ke baad loading hat jaye
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

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
