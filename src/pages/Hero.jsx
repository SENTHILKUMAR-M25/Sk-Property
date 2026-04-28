
import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/properties");
    }
  return (
    <header className="w-full mt-16 min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-16 overflow-hidden relative">

      {/* SEO: hidden semantic heading for crawler clarity */}
      <h1 className="sr-only">
        Find Luxury Properties, Apartments, Villas and Commercial Spaces in Chennai
      </h1>

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-75 sm:w-125 h-75 sm:h-125 bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-37.5 -right-37.5 w-75 sm:w-125 h-75 sm:h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10">

        {/* LEFT SIDE */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center lg:text-left"
        >

          {/* SEO Friendly Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Find Your <span className="text-blue-600">Dream Property</span> with Confidence
          </h2>

          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Buy, Sell, and Rent premium properties with trusted agents, verified listings, and best market prices.
          </p>

          {/* SEARCH BOX */}
          <form
            className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3"
            aria-label="Property search form"
          >

            <label className="sr-only">Location</label>
            <input
              type="text"
              placeholder="Location (e.g. Chennai)"
              className="flex-1 px-4 py-3 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-300"
            />

            <label className="sr-only">Type</label>
            <select className="px-4 py-3 rounded-xl bg-gray-50 outline-none">
              <option>Buy</option>
              <option>Rent</option>
              <option>Sale</option>
            </select>

            <label className="sr-only">Budget</label>
            <input
              type="text"
              placeholder="Budget"
              className="px-2 py-3 rounded-xl focus:ring-2 focus:ring-blue-300 bg-gray-50 outline-none"
            />

            <button
            onClick={handleSearch}
              type="submit"
              className="px-4 py-3  rounded-xl text-white font-medium bg-linear-to-r from-blue-500 to-indigo-600 shadow-lg hover:scale-105 transition"
            >
              <Search size={18} className="inline  rounded-full" />
            </button>
          </form>

          {/* CTA */}
          <motion.a
            href="/properties"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-4 px-6 sm:px-8 py-3 rounded-xl bg-gray-900 text-white shadow-lg hover:shadow-2xl transition"
          >
            Explore Properties
          </motion.a>
        </motion.section>

        {/* RIGHT SIDE */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury modern house for sale"
            loading="lazy"
            className="rounded-3xl shadow-2xl w-full max-w-[500px] md:max-w-[600px] object-cover"
          />

          {/* Floating Cards (hidden on small screens for clean UI) */}
          <div className="hidden sm:block">
            <div className="absolute top-10 left-0 bg-white/80 backdrop-blur-xl shadow-lg px-4 py-2 rounded-xl">
              <p className="text-sm font-semibold">500+ Verified Properties</p>
            </div>

            <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-xl shadow-lg px-4 py-2 rounded-xl">
              <p className="text-sm font-semibold">Trusted Agents</p>
            </div>

            <div className="absolute top-1/2 right-0 bg-white/80 backdrop-blur-xl shadow-lg px-4 py-2 rounded-xl">
              <p className="text-sm font-semibold">Best Market Price</p>
            </div>
          </div>

        </motion.section>

      </div>
    </header>
  );
};

export default HeroSection;