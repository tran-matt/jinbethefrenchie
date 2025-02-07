import React from "react";
import portraitVideo from "../assets/aboutjinbe.mp4";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 bg-amber-50">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-black animate-pulse">
          About Jinbe
        </h2>
      </div>

      {/* Main Layout: Video on Left, Text Cards Stacked on Right */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Video Box on Left */}
        <div className="flex-shrink-0">
          <div className="w-[400px] h-[400px] bg-transparent flex items-center justify-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <video controls className="w-full h-full rounded-lg">
              <source src={portraitVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Cards Column on Right */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Card 1: My Story */}
          <div className="bg-[rgba(210,180,140,0.4)] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-black">My Story</h3>
            <p className="text-sm text-black">
              I was born on <span className="font-bold">11/13/2024</span> thanks to{" "}
              <span className="font-bold">Bengalsandbullies.com</span>. My loving mom,{" "}
              <span className="font-bold">Jenn</span>, and awesome dad,{" "}
              <span className="font-bold">Matt</span> gave me the best start in life.
              A huge thank you to them for taking care of me until I joined the family!
            </p>
          </div>

          {/* Card 2: What I Love */}
          <div className="bg-[rgba(210,180,140,0.4)] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-black">What I Love</h3>
            <p className="text-sm text-black">
              I’m absolutely crazy about <span className="font-semibold">treats</span>, cuddles, playful nibbles, doing my zoomies, long naps, sliding down slides, and climbing tall things!
            </p>
          </div>

          {/* Card 3: My Quirks */}
          <div className="bg-[rgba(210,180,140,0.4)] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-black">My Quirks</h3>
            <p className="text-sm text-black">
              I sometimes get a bit hangry and irritated when I don’t get enough sleep,
              but a good nap always makes it all better!
            </p>
          </div>

          {/* Card 4: Fun Fact */}
          <div className="bg-[rgba(210,180,140,0.4)] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-black">Fun Fact</h3>
            <p className="text-sm text-black">
              I was named after the One Piece character{" "}
              <span className="font-bold">Jinbe</span> because his blue fish-man vibe
              matches my blue coat! "Jinbei" means whaleshark in Japanese—I'm basically a
              mini shark who loves to nibble!
            </p>
          </div>
        </div>
      </div>

      {/* Cute Blockquote */}
      <div className="mt-12">
        <blockquote className="bg-gray-800 rounded-lg p-6 text-center border-l-4 border-gray-600">
         
          <p className="text-xl italic font-semibold text-gray-200 mb-2">
            "Dogs are not here our whole life, but they make our lives whole."
          </p>
          <p className="text-sm text-gray-200">- Roger Caras</p>
        </blockquote>
      </div>
    </div>
  );
};

export default About;
