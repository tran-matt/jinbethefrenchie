import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51Qpw9H4STlxcNbigfoqtCwEyjA52nFlU48n3Crb6Vd02nVGCSfJXpXbJbWoGZKLxvCmz3yajrAoDUPNwQRf9nuTq00VWiz87e0");

// Example Products
const products = [
  {
    id: 1,
    name: "Frenchie Harness (No-Pull)",
    image: "https://via.placeholder.com/200",
    description: "A comfy and stylish no-pull harness designed for French Bulldogs.",
    price: 29.99,
  },
  {
    id: 2,
    name: "Cooling Mat for Bulldogs",
    image: "https://via.placeholder.com/200",
    description: "Keeps your Frenchie cool during hot days. Great for summer!",
    price: 39.99,
  },
  {
    id: 3,
    name: "Interactive Puzzle Toy",
    image: "https://via.placeholder.com/200",
    description: "Mentally stimulate your pup with this engaging puzzle toy.",
    price: 19.99,
  },
  {
    id: 4,
    name: "Hypoallergenic Shampoo",
    image: "https://via.placeholder.com/200",
    description: "Perfect for Frenchies with sensitive skin.",
    price: 15.99,
  },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Calculate Total Price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="bg-amber-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-stone-800">
          🛍️ Shop Jinbe's Favorites
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-stone-800">{product.name}</h2>
              <p className="text-stone-700 mb-4">{product.description}</p>
              <p className="text-lg font-bold mb-4 text-stone-900">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-amber-700 text-white px-4 py-2 rounded font-bold hover:bg-amber-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Shopping Cart */}
        {cart.length > 0 && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">🛒 Your Cart</h2>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <p className="text-stone-700">{item.name} - ${item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(index)} className="text-red-600 font-bold">Remove</button>
              </div>
            ))}
            <h3 className="text-xl font-bold text-stone-900 mt-4">Total: ${totalPrice}</h3>
            <button
              onClick={() => setCheckout(true)}
              className="bg-green-700 text-white px-4 py-2 rounded font-bold mt-4 hover:bg-green-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* Checkout Form */}
        {checkout && (
          <Elements stripe={stripePromise}>
            <CheckoutForm totalPrice={totalPrice} />
          </Elements>
        )}
      </div>
    </div>
  );
};

// Stripe Checkout Form Component
const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalPrice * 100 }), // Convert to cents
    });

    const { clientSecret } = await response.json();
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    if (result.error) {
      console.error(result.error.message);
      setLoading(false);
    } else {
      alert("Payment Successful!");
      window.location.reload();
    }
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-stone-800">💳 Enter Payment Details</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <CardElement className="p-4 border border-gray-300 rounded-lg" />
        <button
          type="submit"
          disabled={!stripe || loading}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition"
        >
          {loading ? "Processing..." : `Pay $${totalPrice}`}
        </button>
      </form>
    </div>
  );
};

export default Shop;
