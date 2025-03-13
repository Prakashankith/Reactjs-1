import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul>
            <li className="mb-2">
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul>
            <li className="mb-2">1234 Street Name, City, State</li>
            <li className="mb-2">Email: info@website.com</li>
            <li className="mb-2">Phone: +1 234 567 890</li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>

          {/* Newsletter Sign-up */}
          <h3 className="text-xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="p-2 rounded-l-lg text-black"
              placeholder="Your Email"
              required
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="text-center text-sm mt-8">
        <p>© 2025 My Website. All Rights Reserved.</p>
        <p>
          <a href="/terms" className="hover:text-gray-400">
            Terms of Service
          </a>{" "}
          |
          <a href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
