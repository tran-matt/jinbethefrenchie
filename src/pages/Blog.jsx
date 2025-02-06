import React from "react";

const Blog = () => {
  // Example blog data
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Frenchie Owners",
      excerpt:
        "Owning a French Bulldog comes with its unique challenges. Learn how to keep your Frenchie happy and healthy with these top tips!",
      date: "February 1, 2025",
    },
    {
      id: 2,
      title: "The Best Food for Your Frenchie",
      excerpt:
        "French Bulldogs have specific dietary needs. Discover the best food options to keep your furry friend thriving!",
      date: "January 25, 2025",
    },
    {
      id: 3,
      title: "How to Train Your French Bulldog",
      excerpt:
        "Training your French Bulldog can be fun and rewarding. Learn some effective techniques for obedience training.",
      date: "January 15, 2025",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Jinbe's Blog</h1>
      <p className="text-center mb-10">
        Explore helpful articles, tips, and stories for Frenchie lovers!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <a
              href={`/blog/${post.id}`}
              className="text-blue-500 font-bold hover:text-blue-600"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
