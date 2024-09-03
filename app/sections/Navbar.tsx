"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 shadow-md mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
              YourLogo
            </Link>
            <div className="hidden md:flex space-x-8 ml-10">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/contact" className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors">
                Get in Touch
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none transition-transform transform hover:scale-110"
              >
                {isOpen ? (
                  <span className="text-2xl">×</span>
                ) : (
                  <span className="text-2xl">≡</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link href="/" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors">
            Home
          </Link>
          <Link href="/about" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors">
            About Us
          </Link>
          <Link href="/services" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors">
            Services
          </Link>
          <Link href="/contact" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors">
            Contact
          </Link>
          <Link href="/contact" className="block text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
