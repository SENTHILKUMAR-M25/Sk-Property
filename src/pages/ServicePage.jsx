import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  KeyRound,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Buying",
    desc: "Find your dream home with verified listings, expert guidance, and smooth negotiation support.",
  },
  {
    icon: Building2,
    title: "Property Selling",
    desc: "Sell your property faster with premium marketing, staging, and buyer network access.",
  },
  {
    icon: KeyRound,
    title: "Rental Management",
    desc: "End-to-end rental solutions including tenant verification and maintenance handling.",
  },
  {
    icon: ShieldCheck,
    title: "Legal Assistance",
    desc: "RERA verification, documentation support, and safe transaction handling.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Get insights on high ROI properties and market growth opportunities.",
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen relative bg-white overflow-hidden">

      {/* soft background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-100 rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 py-24 px-6">

        {/* HERO */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm tracking-[0.3em] text-gray-400 uppercase"
          >
            Premium Real Estate Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight"
          >
            Luxury Services for
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text">
              Modern Real Estate
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto"
          >
            A seamless experience for buying, selling, renting, and investing in premium properties.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300"
              >

                {/* hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-50 via-white to-purple-50" />

                <div className="relative z-10">

                  {/* ICON */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:shadow-md transition">
                    <Icon className="text-gray-700" size={24} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </div>
  );
};

export default ServicePage;