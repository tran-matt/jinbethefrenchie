import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
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
    // Simulate form submission – replace this with your actual submission logic
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-amber-50">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        {/* Header */}
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-700 sm:text-xl">
        Have any questions or want to contact us? Let us know! We'd love to hear from you.
        </p>

        {submitted && (
          <p className="text-center text-green-600 mb-6">
            Thank you for your message! We'll get back to you soon.
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="name@example.com"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-black"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Let us know how we can help you"
              className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Leave a comment..."
              className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-amber-500 focus:border-amber-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-amber-700 sm:w-fit hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Cards */}
        <div className="mt-12">
          <h3 className="text-center text-lg font-semibold text-black mb-4">
            Follow Jinbe:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/jinbe"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[rgba(139,69,19,0.8)] p-4 rounded-lg shadow hover:bg-[rgba(139,69,19,1)] transition duration-300 text-white font-semibold"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@jinbe"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[rgba(139,69,19,0.8)] p-4 rounded-lg shadow hover:bg-[rgba(139,69,19,1)] transition duration-300 text-white font-semibold"
            >
              TikTok
            </a>
            <a
              href="mailto:jinbe@example.com"
              className="block bg-[rgba(139,69,19,0.8)] p-4 rounded-lg shadow hover:bg-[rgba(139,69,19,1)] transition duration-300 text-white font-semibold"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
