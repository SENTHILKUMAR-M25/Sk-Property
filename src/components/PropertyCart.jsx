import React from "react";
import { motion } from "framer-motion";
import {
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Heart,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const isCr = property.price.amount >= 10000000;
  const formattedPrice = isCr
    ? (property.price.amount / 10000000).toFixed(2) + " Cr"
    : (property.price.amount / 100000).toFixed(2) + " Lakh";

  const handleClick = () => {
    navigate(`/property/${property.slug}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative w-full max-w-95 sm:max-w-100 mx-auto h-95 sm:h-115 md:h-[50vh] min-h-100 rounded-3xl sm:rounded-4xl overflow-hidden bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] group flex flex-col"
    >
      {/* IMAGE SECTION */}
      <div className="relative p-2 h-50 sm:h-50 md:h-[33vh] shrink-0">
        <div className="relative h-full w-full rounded-[18px] sm:rounded-3xl overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* BADGES */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-2 flex-wrap">
            <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-lg shadow-sm">
              NEW
            </span>

            {property.premiumListing && (
              <span className="bg-blue-600 text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-lg shadow-sm flex items-center gap-1">
                <Zap size={10} className="fill-white" /> PREMIUM
              </span>
            )}
          </div>

          <button className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 bg-white/90 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col justify-between grow">
        <div>
          {/* PRICE */}
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            ₹{formattedPrice}
          </h3>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-2 mt-3">
            <div className="flex items-center gap-1.5 bg-gray-50 px-2 sm:px-3 py-1 rounded-full border border-gray-100">
              <BedDouble size={14} className="text-gray-400" />
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">
                {property.rooms.bedrooms} beds
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-gray-50 px-2 sm:px-3 py-1 rounded-full border border-gray-100">
              <Bath size={14} className="text-gray-400" />
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">
                {property.rooms.bathrooms} Baths
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-gray-50 px-2 sm:px-3 py-1 rounded-full border border-gray-100">
              <Maximize size={14} className="text-gray-400" />
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-700">
                {property.area.totalSqft} Sqft
              </span>
            </div>
          </div>

          {/* TITLE */}
          <div className="mt-4">
            <h4 className="text-xs sm:text-sm font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
              {property.title}
            </h4>

            <div className="flex items-center gap-1 mt-1 text-gray-400">
              <MapPin size={12} />
              <p className="text-[10px] sm:text-[11px] font-medium truncate">
                {property.location.address}, {property.location.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;