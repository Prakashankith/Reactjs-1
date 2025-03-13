import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
      <p className="mt-4 text-lg">
        Wed love to hear from you! Please reach out using the form below or
        through our contact details.
      </p>

      {/* Contact Form */}
      <div className="mt-10 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-600">Send us a message</h2>
        <form className="mt-6">
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Message"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>{" "}
      </div>

      {/* Contact Info */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-600">Our Contact Info</h2>
        <p className="mt-4 text-lg">Email: contact@yourcompany.com</p>
        <p className="mt-2 text-lg">Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contact;
