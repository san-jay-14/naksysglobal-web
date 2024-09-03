"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                YourLogo
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 ml-10">
              <Link href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-gray-600">
                About Us
              </Link>
              <Link href="/services" className="text-gray-800 hover:text-gray-600">
                Services
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Get in Touch
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none"
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

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
              About Us
            </Link>
            <Link href="/services" className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
              Services
            </Link>
            <Link href="/contact" className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
              Contact
            </Link>
            <Link href="/contact" className="block text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
