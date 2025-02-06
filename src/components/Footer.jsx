import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-md font-bold mb-2 text-white">Jinbe The Frenchie</h2>
        <div className="flex justify-center space-x-6 mb-2">
          <a
            href="https://instagram.com/jinbethefrenchie" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@jinbethefrenchie" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            TikTok
          </a>
          <a
            href="mailto:jinbethefrenchie@gmail.com" 
            className="text-white hover:text-gray-300 transition"
          >
            Email
          </a>
        </div>
        <div className="text-white-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Jinbe The Frenchie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
