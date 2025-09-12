import React, { useState } from 'react'
import { Link } from 'react-router'

const Navbar02 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            
            {/* Brand Name */}
            <span className="text-xl font-bold text-white">Mini-Mart</span>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-6">
              <Link
                to="/LandingPage"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </Link>
              <Link
                to="/aboutUs"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                to="/ContactUs"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="sm:hidden px-2 pb-3 space-y-1 bg-gray-900">
            <Link
              to="/LandingPage"
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Products
            </Link>
            <Link
              to="/aboutUs"
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About Us
            </Link>
            <Link
              to="/ContactUs"
              className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar02
