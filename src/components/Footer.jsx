import React from "react";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://instagram.com/jinbethefrenchie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-400 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://tiktok.com/@jinbethefrenchie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-400 transition"
          >
            <FaTiktok size={24} />
          </a>
          <a
            href="mailto:jinbethefrenchie@gmail.com"
            className="text-white hover:text-amber-400 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        {/* Copyright */}
        <div className="text-sm text-gray-300">
          <p>&copy; 2025 JinbeTheFrenchie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
