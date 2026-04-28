import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="w-full bg-white min-h-screen pt-28 pb-20 px-6 md:px-16 overflow-hidden">

      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-blue-600 font-semibold tracking-widest uppercase">
          About Us
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Building Trust in Real Estate Experience
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          We help people buy, sell, and rent properties with transparency,
          verified listings, and premium service.
        </p>
      </motion.div>

      
      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Who We Are
          </h2>

          <p className="text-gray-500 leading-relaxed">
            We are a modern real estate platform focused on delivering a
            seamless property experience. From luxury villas to affordable homes,
            we ensure every listing is verified and trusted.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Our mission is to simplify real estate transactions using technology,
            transparency, and expert guidance.
          </p>

          <button className="px-8 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:shadow-2xl transition">
            Explore Properties
          </button>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { number: "500+", label: "Properties" },
            { number: "200+", label: "Agents" },
            { number: "10+", label: "Years Experience" },
            { number: "100%", label: "Trust Score" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {item.number}
              </h3>
              <p className="text-gray-500 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

     
    </div>
  );
};

export default AboutPage;