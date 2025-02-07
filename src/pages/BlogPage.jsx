import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Initial blog posts data with an added "likes" property and ISO date strings.
const initialPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Frenchie Owners",
    excerpt:
      "Discover key advice for caring for your French Bulldog—from diet and exercise to grooming and playtime.",
    date: "2025-03-10", // ISO format for dates (YYYY-MM-DD)
    likes: 10,
  },
  {
    id: 2,
    title: "Creating the Perfect Diet for Your Frenchie",
    excerpt:
      "Learn how to craft a balanced meal plan that caters to the unique nutritional needs of French Bulldogs.",
    date: "2025-02-25",
    likes: 5,
  },
  {
    id: 3,
    title: "Grooming and Care: A Comprehensive Guide",
    excerpt:
      "Everything you need to know about keeping your French Bulldog clean, comfortable, and happy.",
    date: "2025-02-15",
    likes: 3,
  },
  // Add more blog posts as needed.
];

const BlogPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  // This object tracks which posts the user has liked in the current session.
  const [userLiked, setUserLiked] = useState({});

  // On mount, load global likes from localStorage.
  useEffect(() => {
    const storedLikes = localStorage.getItem("blogLikes");
    if (storedLikes) {
      const likesObj = JSON.parse(storedLikes);
      setPosts((prevPosts) =>
        prevPosts.map((post) => ({
          ...post,
          likes:
            likesObj[post.id] !== undefined ? likesObj[post.id] : post.likes,
        }))
      );
    }
  }, []);

  // On mount, load user-specific liked posts from sessionStorage.
  useEffect(() => {
    const storedUserLikes = sessionStorage.getItem("userLikedPosts");
    if (storedUserLikes) {
      setUserLiked(JSON.parse(storedUserLikes));
    }
  }, []);

  // Handles like/unlike toggling.
  const handleLike = (id) => {
    // Update the posts (global like count) first.
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.map((post) => {
        if (post.id === id) {
          // If user already liked this post, remove the like; otherwise, add one.
          const newLikes = userLiked[id] ? post.likes - 1 : post.likes + 1;
          return { ...post, likes: newLikes };
        }
        return post;
      });
      // Save the updated global likes to localStorage.
      const likesObj = {};
      updatedPosts.forEach((post) => {
        likesObj[post.id] = post.likes;
      });
      localStorage.setItem("blogLikes", JSON.stringify(likesObj));
      return updatedPosts;
    });

    // Update the userLiked state and store it in sessionStorage.
    setUserLiked((prev) => {
      const newUserLikes = { ...prev, [id]: !prev[id] };
      sessionStorage.setItem("userLikedPosts", JSON.stringify(newUserLikes));
      return newUserLikes;
    });
  };

  // Filter posts by the search term (checking title and excerpt).
  const filteredPosts = posts.filter((post) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowerSearch) ||
      post.excerpt.toLowerCase().includes(lowerSearch)
    );
  });

  // Sort posts based on the selected sort option.
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOption === "newest") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === "oldest") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOption === "most liked") {
      return b.likes - a.likes;
    } else if (sortOption === "least liked") {
      return a.likes - b.likes;
    }
    return 0;
  });

  return (
    <div className="bg-amber-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-stone-800">
          Jinbe's Blog
        </h1>

        {/* Search and Sort Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 p-2 border border-gray-300 rounded mb-4 sm:mb-0 text-gray-900"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full sm:w-1/4 p-2 border border-gray-300 rounded text-gray-900"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="most liked">Most Liked</option>
            <option value="least liked">Least Liked</option>
          </select>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-stone-800">
                {post.title}
              </h2>
              <p className="text-stone-600 text-sm mb-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-stone-700 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleLike(post.id)}
                  className="text-grey-700 font-bold hover:underline"
                >
                  {userLiked[post.id] ? "Unlike" : "Like"} ({post.likes})
                </button>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-amber-700 font-bold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
          {sortedPosts.length === 0 && (
            <p className="text-center col-span-full text-gray-600">
              No blog posts found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
