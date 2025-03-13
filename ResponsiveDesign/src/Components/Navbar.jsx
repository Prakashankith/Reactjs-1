import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/callcenter.png";

const Navbar = () => {
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 fixed w-full">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Image-based Logo */}
        <div>
          <Link to="/">
            <img
              src={logo} // Path to your logo image
              alt="Logo"
              className="h-18 w-45" // Adjust height based on your logo size
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setShowSolutions(true)}
            onMouseLeave={() => setShowSolutions(false)}
          >
            <span className="cursor-pointer hover:text-gray-200">
              Solutions
            </span>
            {showSolutions && (
              <div className="absolute bg-white text-blue-600 mt-2 rounded-md shadow-md w-48">
                <ul>
                  <li>
                    <Link
                      to="/solutions/BackupandRecover"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      BackupandRecover
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solutions/ERP"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      ERP
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solutions/Helpdesk"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Helpdesk
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
