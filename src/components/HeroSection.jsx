import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Jinbe's World</h1>
      <p className="text-xl mb-6">The cutest Frenchie on the internet!</p>
      <a
        href="https://instagram.com/jinbethefrenchie" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Follow on Instagram
      </a>
    </section>
  );
};

export default HeroSection;
