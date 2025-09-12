import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative bg-black text-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <span className="text-xl font-bold">Mini-Mart</span>

            {/* Desktop Links */}
            <div className="hidden sm:block ml-12">
              <div className="flex space-x-6">
                <Link
                  to="/LandingPage"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  Products
                </Link>
                <Link
                  to="/aboutUs"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  to="/ContactUs"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
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
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Products
            </Link>
            <Link
              to="/aboutUs"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
            >
              About Us
            </Link>
            <Link
              to="/ContactUs"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
