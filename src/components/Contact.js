import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        We'd love to hear from you! Whether you have questions, feedback, or just want to say hi, reach out to us.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-300 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-10 text-center text-gray-600">
        <p>
          📍 123 Foodie Lane, Culinary City, FC 56789
        </p>
        <p>📞 (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contact;
