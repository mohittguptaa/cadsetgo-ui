import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen font-sans text-white bg-black">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[50vh] ">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
        <div className="relative z-10 px-6 text-center">
          <h1 className="text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">
            Have questions or project ideas? We’re here to help you bring them to life.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="grid gap-12 px-6 py-16 md:px-20 md:grid-cols-2">
        {/* Contact Form */}
        <div className="p-8 border border-gray-700 shadow-xl bg-white/5 backdrop-blur-md rounded-2xl">
          <h2 className="mb-6 text-3xl font-semibold text-cyan-400">Get in Touch</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none bg-black/50 focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none bg-black/50 focus:border-cyan-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-700 rounded-lg outline-none bg-black/50 focus:border-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 font-semibold transition-transform rounded-lg shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-3xl font-semibold text-cyan-400">Our Office</h2>
          <p className="leading-relaxed text-gray-300">
            We are always ready to collaborate, innovate, and help you build with precision. 
            Reach out to us through any of the following:
          </p>
          <div className="space-y-4 text-gray-400">
            <p><span className="text-cyan-400">📍 Address:</span> 123 AutoCAD Street, New Delhi, India</p>
            <p><span className="text-cyan-400">📞 Phone:</span> +91 9876543210</p>
            <p><span className="text-cyan-400">✉️ Email:</span> info@autocadcompany.com</p>
          </div>
          <button className="px-6 py-3 mt-6 font-semibold transition-transform rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105">
            Get Directions
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
