import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

// Sample blog posts for the homepage preview
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Frenchie Owners",
    excerpt:
      "Discover key advice for caring for your French Bulldog—from diet and exercise to grooming and playtime.",
    date: "March 10, 2025",
  },
  {
    id: 2,
    title: "Creating the Perfect Diet for Your Frenchie",
    excerpt:
      "Learn how to craft a balanced meal plan that caters to the unique nutritional needs of French Bulldogs.",
    date: "February 25, 2025",
  },
  {
    id: 3,
    title: "Grooming and Care: A Comprehensive Guide",
    excerpt:
      "Everything you need to know about keeping your French Bulldog clean, comfortable, and happy.",
    date: "February 15, 2025",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Images for the carousel
  const carouselImages = Array.from({ length: 9 }).map(
    (_, index) => `/images/jinbe/${index + 1}.jpg`
  );

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [activeIndex]);

  const nextSlide = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );

  const prevSlide = () =>
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );

  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-10 text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-stone-800">
          Welcome to Jinbe's Homestead
        </h2>
        <p className="max-w-2xl mx-auto text-stone-700 mb-8">
          Discover the adventures, tips, and heartwarming stories of Jinbe, the
          adorable Frenchie. Whether you're a fellow Frenchie lover or looking
          for inspiration for your own pet, you've come to the right place.
        </p>
      </section>

      {/* Carousel Section */}
      <section className="py-10 bg-black">
        <h3 className="text-3xl font-bold mb-8 text-center text-white">
          Jinbe's Adventures
        </h3>
        <div className="relative w-full max-w-screen-lg mx-auto">
          {/* Carousel Wrapper */}
          <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Jinbe image ${index + 1}`}
                  className="w-full h-full object-contain bg-black"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-amber-500 scale-125" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
            aria-label="Previous slide"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 bg-black/20 rounded-full group-hover:bg-black/50">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
            aria-label="Next slide"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 bg-black/20 rounded-full group-hover:bg-black/50">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l4 4-4 4"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-10 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-stone-800">
            Latest Blog Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-stone-800">
                  {post.title}
                </h4>
                <p className="text-stone-600 text-sm mb-4">{post.date}</p>
                <p className="text-stone-700 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-amber-700 font-bold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="text-amber-800 font-semibold hover:underline"
            >
              View All Posts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
