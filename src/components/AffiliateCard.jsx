import React from "react";
import AffiliateCard from "../components/AffiliateCard";

const AffiliatePage = () => {
  const affiliateProducts = [
    {
      title: "Frenchie Hoodie",
      description: "Keep your Frenchie warm and stylish with this cozy hoodie.",
      image: "https://example.com/hoodie.jpg", // Replace with an actual image URL
      link: "https://affiliate-link.com/hoodie", // Replace with an actual affiliate link
    },
    {
      title: "Dog Bed",
      description: "The perfect comfortable bed for your furry friend.",
      image: "https://example.com/dogbed.jpg", // Replace with an actual image URL
      link: "https://affiliate-link.com/dogbed", // Replace with an actual affiliate link
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Shop Jinbe's Favorites</h1>
      <p className="text-center mb-10">
        Check out Jinbe's top-recommended products for Frenchie lovers!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {affiliateProducts.map((product, index) => (
          <AffiliateCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AffiliatePage;
