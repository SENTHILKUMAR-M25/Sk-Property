import React from "react";
import { motion } from "framer-motion";

const ActionButton = ({ icon, onClick, label, message, setToast }) => {
  
  const handleClick = () => {
    if (onClick) onClick();

    // 🔥 custom toast instead of alert()
    if (message && setToast) {
      setToast({
        show: true,
        text: message,
      });

      setTimeout(() => {
        setToast({ show: false, text: "" });
      }, 2000);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative group w-10 h-10 flex items-center justify-center 
      rounded-xl bg-white border border-gray-200 shadow-sm 
      hover:shadow-md transition overflow-hidden"
    >
      {/* Glow */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 
      bg-linear-to-r from-blue-500 to-indigo-600 transition" />

      {/* Icon */}
      <span className="relative z-10 text-gray-600 group-hover:text-white transition">
        {icon}
      </span>

      {/* Tooltip */}
      {label && (
        <span className="absolute -bottom-8 text-[10px] bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          {label}
        </span>
      )}
    </motion.button>
  );
};

export default ActionButton;