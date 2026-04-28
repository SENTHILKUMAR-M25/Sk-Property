// import React from "react";
// import { motion } from "framer-motion";
// import properties from "../components/properties";
// import PropertyCard from "../components/PropertyCart";

// const PropertyPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20 px-6 md:px-12">

//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto mb-14">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase">
//             All Properties
//           </p>

//           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-3">
//             Explore Premium{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//               Listings
//             </span>
//           </h1>

//           <p className="text-gray-500 mt-4 max-w-2xl text-lg">
//             Discover carefully curated properties designed for luxury living, investment, and comfort.
//           </p>
//         </motion.div>
//       </div>

//       {/* GRID */}
//       <div className="max-w-7xl mx-auto grid gap-2 grid-cols-2  lg:grid-cols-3 ">

//         {properties.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.05 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.03 }}
//             className="flex justify-center"
//           >
//             <PropertyCard property={item} />
//           </motion.div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default PropertyPage;


import React from "react";
import { motion } from "framer-motion";
import properties from "../components/properties";
import PropertyCard from "../components/PropertyCart";

const PropertyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-12 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase">
            All Properties
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mt-3 leading-tight">
            Explore Premium{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Listings
            </span>
          </h1>

          <p className="text-gray-500 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg">
            Discover carefully curated properties designed for luxury living, investment, and comfort.
          </p>
        </motion.div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {properties.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex justify-center"
          >
            <PropertyCard property={item} />
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default PropertyPage;