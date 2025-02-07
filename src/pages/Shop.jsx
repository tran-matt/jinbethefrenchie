import React, { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price-low"); // Default sorting option

  // Define all categories upfront
  const categories = ["All", "Accessories", "Food", "Grooming", "Supplements", "Toys", "Other"];

  // Fetch products from the JSON file dynamically
  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load products.json");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  // Filter products based on category and search term
  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "popularity") return b.popularity - a.popularity;
      return 0;
    });

  // Check if no products match the current filter
  const noProductsFound = filteredProducts.length === 0;

  return (
    <div className="bg-amber-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-stone-800">
          🛍️ Shop Jinbe's Favorites
        </h1>

        {/* Search, Category Filter, and Sort */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-1/3 text-gray-800"
          />

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded-md text-gray-800 w-full md:w-56"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Sorting Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border border-gray-300 rounded-md text-gray-800 w-full md:w-56"
          >
            <option value="price-low">Sort by Price: Low to High</option>
            <option value="price-high">Sort by Price: High to Low</option>
            <option value="popularity">Sort by Popularity</option>
          </select>
        </div>

        {/* Product Grid */}
        {noProductsFound ? (
          // No Products Found Message
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold text-stone-800 mb-4">
              Sorry, no products found in the "{selectedCategory}" category.
            </h2>
            <p className="text-stone-700 mb-4">
              We're constantly updating our inventory. Please check back later!
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="bg-amber-700 text-white px-4 py-2 rounded font-bold hover:bg-amber-800 transition"
            >
              Back to All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded mb-4 aspect-[4/3] max-h-56"
                />
                <h2 className="text-xl font-semibold mb-2 text-stone-800">{product.name}</h2>
                <p className="text-stone-700 mb-4">{product.description}</p>
                <p className="text-lg font-bold mb-4 text-stone-900">${product.price}</p>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-700 text-white px-4 py-2 rounded font-bold hover:bg-amber-800 transition"
                >
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
