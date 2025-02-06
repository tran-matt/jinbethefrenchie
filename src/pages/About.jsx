import React from "react";
import jinbeImage from "../assets/jinbe.png"; 

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Jinbe</h1>
      <p className="text-center mb-10">
        Meet Jinbe, the adorable French Bulldog who steals hearts everywhere he
        goes!
      </p>

      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src={jinbeImage}
            alt="Jinbe the Frenchie"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Jinbe's Story</h2>
          <p className="text-gray-700 mb-4">
            Jinbe is a charming French Bulldog with a love for treats, belly
            rubs, and making new friends. Born in 2021, Jinbe quickly captured
            the hearts of everyone around him with his playful personality and
            unique quirks. Whether he's snoring away on the couch or posing for
            the camera, Jinbe knows how to keep his fans entertained.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Fun Facts About Jinbe</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Loves long walks at the park and meeting other dogs.</li>
            <li>His favorite snack is peanut butter.</li>
            <li>Can perform a “sit” command for treats in seconds!</li>
            <li>Has a signature snore that can be heard across the room.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Why Follow Jinbe?</h2>
          <p className="text-gray-700">
            Jinbe isn’t just a dog; he’s a lifestyle icon for Frenchie lovers
            everywhere. Follow Jinbe to stay updated on his daily adventures,
            learn tips for caring for French Bulldogs, and join a growing
            community of dog enthusiasts who can’t get enough of this lovable
            pup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
