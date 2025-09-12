import Navbar from "../component/Navbar";
import React from "react";
import bgimage from "../assets/kk.jpg"
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-slate-50 text-slate-900 px-6 py-16 lg:py-24 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium w-max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7h18M5 7v13a1 1 0 001 1h12a1 1 0 001-1V7M9 7V4a3 3 0 016 0v3"
              />
            </svg>
            Local & Trusted
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Welcome to <span className="text-emerald-600">Mini Mart</span> —
            Your neighborhood convenience store
          </h1>

          <p className="text-slate-600 max-w-xl">
            Mini Mart brings together quality, affordability, and friendly
            service so you can get what you need — fast. From daily groceries
            and fresh produce to household essentials and quick snacks, we stock
            everything to make life a little easier.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-white shadow-sm ring-1 ring-slate-200">
                ✅
              </div>
              <span className="text-slate-700 font-medium">Quality Products</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-white shadow-sm ring-1 ring-slate-200">
                💰
              </div>
              <span className="text-slate-700 font-medium">Affordable Prices</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-white shadow-sm ring-1 ring-slate-200">
                😊
              </div>
              <span className="text-slate-700 font-medium">Friendly Service</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-white shadow-sm ring-1 ring-slate-200">
                🏪
              </div>
              <span className="text-slate-700 font-medium">One-Stop Shop</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={bgimage}
            alt="Mini Mart Store"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
              </>
  );
};

export default AboutUs;