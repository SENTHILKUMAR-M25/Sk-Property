import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-md border-b border-gray-100"
            : "bg-white/40 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-semibold text-gray-900"
          >
            <Link to="/">
           <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
           </Link>
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-1 transition ${
                    isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {/* premium underline */}
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-0.5 h-0.5 bg-gray-900"
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <Link to="/properties">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium"
            >
              List Property
            </motion.button>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-800"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 left-0 w-full bg-white z-50 shadow-2xl rounded-b-3xl"
            >
              <div className="px-6 py-8 space-y-6">

                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button onClick={() => setOpen(false)} className="text-2xl">
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 border-b text-lg font-medium transition ${
                          isActive ? "text-gray-900" : "text-gray-500"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                <Link to="/contact">
                  <button onClick={() => setOpen(false)} className="w-full mt-6 py-4 rounded-2xl bg-gray-900 text-white font-medium">
                    Contact
                  </button>
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;