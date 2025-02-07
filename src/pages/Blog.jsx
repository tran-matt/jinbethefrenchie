import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
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

  return (
    <div className="bg-amber-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-stone-800">
          Jinbe's Blog
        </h1>
        <p className="text-center mb-10 text-stone-700">
          Explore helpful articles, tips, and stories for Frenchie lovers!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-stone-800">
                {post.title}
              </h2>
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
      </div>
    </div>
  );
};

export default Blog;
