import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [alert, setAlert] = useState({
    show: false,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlert({
        show: true,
        message: "❌ Please fill all required fields"
      });

      setTimeout(() => setAlert({ show: false, message: "" }), 3000);
      return;
    }

    setAlert({
      show: true,
      message: "✅ Message sent successfully! We will contact you soon."
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

    setTimeout(() => {
      setAlert({ show: false, message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen relative bg-[#FAFAFA] overflow-hidden">

      {/* ALERT TOAST */}
      {alert.show && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-6 right-6 z-50 bg-white border border-gray-200 shadow-xl px-6 py-4 rounded-xl text-sm font-medium"
        >
          {alert.message}
        </motion.div>
      )}

      {/* Background Orbs */}
      <div className="absolute w-125 h-125 bg-blue-200/30 blur-[120px] rounded-full -top-37.5 -left-37.5" />
      <div className="absolute w-125 h-125 bg-purple-200/30 blur-[120px] rounded-full -bottom-37.5 -right-37.5" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="relative z-10 px-6 py-24">

        {/* HERO */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.p className="text-xs tracking-[0.4em] text-gray-400 uppercase">
            VS PROPERTY VISION
          </motion.p>

          <motion.h1 className="text-5xl md:text-7xl font-bold text-gray-900 mt-4 leading-tight">
            Let’s Build
            <span className="block bg-linear-to-r from-gray-900 via-gray-600 to-gray-900 text-transparent bg-clip-text">
              Your Dream Space
            </span>
          </motion.h1>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Premium real estate consultation for luxury homes, investments, and commercial spaces.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-6">
            {[
              { icon: Phone, title: "Call Us", value: "+91 98765 43210" },
              { icon: Mail, title: "Email", value: "vs1606@gmail.com" },
              { icon: MapPin, title: "Location", value: "Chennai, Tamil Nadu" },
              { icon: Clock, title: "Working Hours", value: "Mon - Sat (9AM - 7PM)" }
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="p-px rounded-2xl bg-linear-to-r from-gray-200 via-white to-gray-200">
                  <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50">
                      <Icon size={20} className="text-gray-700" />
                    </div>

                    <div>
                      <p className="text-gray-400 text-sm">{item.title}</p>
                      <p className="text-gray-900 font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FORM */}
          <div className="p-px rounded-3xl bg-linear-to-r from-blue-300 via-white to-purple-300">
            <div className="bg-white rounded-3xl p-10 shadow-xl">

              <h2 className="text-2xl font-semibold mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-gray-400"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-gray-400"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-gray-400"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your requirement..."
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-gray-400"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
                >
                  Send Message <Send size={18} />
                </button>

              </form>

            </div>
          </div>

        </div>

        {/* FOOTER TEXT */}
        <div className="text-center mt-20 text-gray-400 text-sm">
          Trusted by 500+ premium property buyers & investors
        </div>

      </div>
    </div>
  );
};

export default ContactPage;