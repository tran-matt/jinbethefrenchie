import React from "react";

const products = [
  {
    id: 1,
    name: "Frenchie Harness (No-Pull)",
    image: "https://via.placeholder.com/200",
    description: "A comfy and stylish no-pull harness designed for French Bulldogs.",
    link: "https://affiliate-link.com/harness",
  },
  {
    id: 2,
    name: "Cooling Mat for Bulldogs",
    image: "https://via.placeholder.com/200",
    description: "Keeps your Frenchie cool during hot days. Great for summer!",
    link: "https://affiliate-link.com/cooling-mat",
  },
  {
    id: 3,
    name: "Interactive Puzzle Toy",
    image: "https://via.placeholder.com/200",
    description: "Mentally stimulate your pup with this engaging puzzle toy.",
    link: "https://affiliate-link.com/puzzle-toy",
  },
  {
    id: 4,
    name: "Hypoallergenic Shampoo",
    image: "https://via.placeholder.com/200",
    description: "Perfect for Frenchies with sensitive skin.",
    link: "https://affiliate-link.com/shampoo",
  },
];

const Shop = () => {
  return (
    <div className="bg-amber-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-stone-800">
          🛍️ Shop Jinbe's Favorites
        </h1>
        <p className="text-center text-stone-700 mb-10">
          These are Jinbe's top picks! Every purchase helps support our site.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-stone-800">
                {product.name}
              </h2>
              <p className="text-stone-700 mb-4">{product.description}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-700 text-white px-4 py-2 rounded font-bold hover:bg-amber-800 transition"
              >
                Buy Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
