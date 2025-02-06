import React from "react";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <section className="py-10 bg-blue-50"> {/* Light blue background for subtle contrast */}
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">About Jinbe</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-800">
          Jinbe is a lovable Frenchie who enjoys long walks, treats, and making
          new friends. Follow his adventures here!
        </p>
      </section>
    </div>
  );
};

export default Home;
