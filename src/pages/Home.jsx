import React from "react";
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

// Placeholder Instagram images
const instaImages = [
  {
    id: 1,
    src: "https://via.placeholder.com/300?text=Insta+1",
    alt: "Instagram image 1",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/300?text=Insta+2",
    alt: "Instagram image 2",
  },
  {
    id: 3,
    src: "https://via.placeholder.com/300?text=Insta+3",
    alt: "Instagram image 3",
  },
  {
    id: 4,
    src: "https://via.placeholder.com/300?text=Insta+4",
    alt: "Instagram image 4",
  },
];

const Home = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-10 text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-stone-800">
          Welcome to Jinbe's Homestead
        </h2>
        <p className="max-w-2xl mx-auto text-stone-700 mb-8">
          Discover the adventures, tips, and heartwarming stories of Jinbe, the adorable Frenchie. Whether you're a fellow Frenchie lover or looking for inspiration for your own pet, you've come to the right place.
        </p>
      </section>

      {/* Blog Preview Section */}
      <section className="py-10 bg-amber-100">
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
                <Link to={`/blog/${post.id}`} className="text-amber-700 font-bold hover:underline">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog" className="text-amber-800 font-semibold hover:underline">
              View All Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-10 text-center">
        <h3 className="text-3xl font-bold mb-8 text-stone-800">From Instagram</h3>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instaImages.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
