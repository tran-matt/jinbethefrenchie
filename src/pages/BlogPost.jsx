import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Replace with actual fetching logic
  const blogPost = {
    title: "Sample Blog Post",
    content:
      "This is the content of the blog post. Replace this with dynamic data fetching!",
    date: "February 1, 2025",
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
      <p className="text-gray-600 text-sm mb-4">{blogPost.date}</p>
      <div className="text-gray-700">{blogPost.content}</div>
    </div>
  );
};

export default BlogPost;
