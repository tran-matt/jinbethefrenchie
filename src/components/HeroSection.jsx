import React from "react";
import banner from "../assets/banner.png"; 
const HeroSection = () => {
  return (
    <section className="w-full">
      <img 
        src={banner} 
        alt="Jinbe The Frenchie Banner" 
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default HeroSection;
