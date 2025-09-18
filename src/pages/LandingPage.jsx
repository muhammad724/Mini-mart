import React from "react";
import { Link } from "react-router"; 
import "../App.css"

const LandingPage = () => {
  return (
 <div
  className="relative h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center"
>

      
      <div className="absolute inset-0 bg-black/50"></div>

      <main className="relative z-10 text-center px-6">
       
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg animate-fadeDown">
          Welcome to Mini Mart
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-gray-200 animate-fadeUp">
          Your neighborhood convenience store with premium quality products.  
          Open 24/7 for all your essentials.
        </p>

        <div className="mt-10 animate-zoomIn">
          <Link
            to="/products"
            className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-lg transition-all duration-300"
          >
            Explore Products
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
