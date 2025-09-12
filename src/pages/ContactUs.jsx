import React from 'react'
import Navbar from '../component/Navbar'

const ContactUs = () => {
    return (
      <>
      <Navbar/>
      <section className="bg-white text-slate-900 px-6 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-600">
            Get in Touch
          </h2>
          <p className="text-slate-600 max-w-md">
            Have questions, feedback, or just want to say hello? We’d love to
            hear from you! Reach out to us and we’ll get back to you as soon as
            possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              📍
              <span className="text-slate-700">
                123 Market Street, City Center, Pakistan
              </span>
            </div>
            <div className="flex items-center gap-3">
              📞
              <a
                href="tel:+9203001234567"
                className="text-slate-700 hover:text-emerald-600"
              >
                +92 300 1234567
              </a>
            </div>
            <div className="flex items-center gap-3">
              📧
              <a
                href="mailto:support@minimart.com"
                className="text-slate-700 hover:text-emerald-600"
                >
                support@minimart.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 rounded-2xl shadow-lg p-6 sm:p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-slate-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
                </>
  );
};

export default ContactUs;
