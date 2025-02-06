import React from "react";

const BlogCard = ({ blog }) => {
  const { title, excerpt, date, image, link } = blog;

  return (
    <div className="bg-gray-100 rounded shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{date}</p>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded font-bold hover:bg-blue-600"
      >
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
