import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { icon: FaFacebookF, link: "#" },
    { icon: FaInstagram, link: "#" },
    { icon: FaLinkedinIn, link: "#" },
  ];

  const links = ["Home", "Properties", "Services", "About", "Contact"];

  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-112.5 h-112.5 bg-blue-100 blur-[130px] rounded-full -top-45 -left-45 opacity-40" />
      <div className="absolute w-112.5 h-112.5 bg-purple-100 blur-[130px] rounded-full -bottom-45 -right-45 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              SK <span className="font-light text-gray-500">Property Vision</span>
            </h2>

            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Premium real estate platform for luxury homes, commercial spaces,
              and high-value investments across Chennai.
            </p>

            <div className="mt-6 text-xs text-gray-400 italic">
              “Luxury is not a price, it’s an experience.”
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-500 text-sm">
              {links.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-gray-900 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-blue-500" /> +91 98765 43210
              </p>

              <p className="flex items-center gap-2">
                <Mail size={16} className="text-blue-500" /> sk2510@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" /> Chennai, Tamil Nadu
              </p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              {socials.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={i}
                    href={item.link}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 flex items-center justify-center rounded-xl
                    bg-white border border-gray-200 shadow-sm
                    hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500
                    hover:text-white transition"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            <p className="text-xs text-gray-400 mt-6">
              Stay connected for premium property updates.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-gray-100" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

          <p>© 2026 SK Property Vision. All rights reserved.</p>

          <div className="flex gap-6">
            <p className="hover:text-gray-900 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-gray-900 cursor-pointer">Terms</p>
            <p className="hover:text-gray-900 cursor-pointer">Sitemap</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;