import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center mb-10">
        Have questions or want to collaborate? Drop us a message or follow us on
        social media!
      </p>

      {submitted && (
        <p className="text-center text-green-600 mb-6">
          Thank you for your message! We'll get back to you soon.
        </p>
      )}

      <div className="max-w-lg mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full font-bold hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg font-semibold mb-4">Follow Jinbe:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://instagram.com/jinbe" // Replace with Jinbe's real Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@jinbe" // Replace with Jinbe's real TikTok link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            TikTok
          </a>
          <a
            href="mailto:jinbe@example.com" // Replace with Jinbe's real email
            className="text-blue-500 hover:text-blue-600"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
