
// import React, { useRef, useState } from "react";
// import properties from "../components/properties";
// import PropertyCard from "../components/PropertyCart";
// import { motion } from "framer-motion";
// import { ArrowRight, ChevronLeft, ChevronRight,  } from "lucide-react";
// import { Link } from "react-router-dom";

// const PropertyList = () => {
//   const containerRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);

//   const scrollToIndex = (index) => {
//     const container = containerRef.current;
//     const cardWidth = 440; // fixed card width

//     container.scrollTo({
//       left: index * cardWidth,
//       behavior: "smooth",
//     });

//     setActiveIndex(index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-28 overflow-hidden relative">

//       {/* SOFT PREMIUM GLOW */}
//       <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-300/20 blur-[150px] rounded-full" />
//       <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-purple-300/20 blur-[150px] rounded-full" />

//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">

//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
//           <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase">
//             Premium Selection
//           </p>

//           <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mt-3">
//             Discover Luxury{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//               Properties
//             </span>
//           </h1>

//           <p className="text-gray-500 mt-5 max-w-xl text-lg">
//             Handpicked homes designed for elite lifestyle, comfort, and investment value.
//           </p>
//         </motion.div>

//         <Link
//          to="/properties"
//          className="px-7 py-3 rounded-full bg-black text-white shadow-xl hover:scale-105 transition">
//           Explore All <ArrowRight className="inline w-4 h-4 ml-2" />
//         </Link>
//       </div>

//       {/* CAROUSEL */}
//       <div className="relative flex items-center justify-center">

//         {/* LEFT BUTTON */}
//         <button
//           onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
//           className="absolute left-6 z-20 bg-white shadow-xl p-3 rounded-full hover:scale-110 transition"
//         >
//           <ChevronLeft />
//         </button>

//         {/* CARDS */}
//         <div
//           ref={containerRef}
//           className="flex gap-2 mx-10 overflow-x-hidden px-10 scroll-smooth"
//         >
//           {properties.map((item, index) => {
//             const isActive = index === activeIndex;

//             return (
//               <motion.div
//                 key={item.id}
//                 animate={{
//                    scale: isActive ? 1 : 0.92,
//                 }}
//                 transition={{ duration: 0.4 }}
//                 className="min-w-[420px]  transition-all"
//               >
//                 <PropertyCard property={item} />
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* RIGHT BUTTON */}
//         <button
//           onClick={() =>
//             scrollToIndex(Math.min(activeIndex + 1, properties.length - 1))
//           }
//           className="absolute right-6 z-20 bg-white shadow-xl p-3 rounded-full hover:scale-110 transition"
//         >
//           <ChevronRight />
//         </button>
//       </div>

//       {/* DOTS */}
//       <div className="flex justify-center mt-12 gap-2">
//         {properties.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => scrollToIndex(i)}
//             className={`h-2 rounded-full transition-all ${
//               i === activeIndex
//                 ? "w-8 bg-blue-600"
//                 : "w-2 bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyList;




import React, { useRef, useState } from "react";
import properties from "../components/properties";
import PropertyCard from "../components/PropertyCart";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const containerRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const cardWidth = window.innerWidth < 768 ? 300 : 440;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 md:py-28 overflow-hidden relative">

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-300/20 blur-[120px] md:blur-[150px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-purple-300/20 blur-[120px] md:blur-[150px] rounded-full" />

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <p className="text-blue-600 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase">
            Premium Selection
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mt-3">
            Discover Luxury{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Properties
            </span>
          </h1>

          <p className="text-gray-500 mt-4 md:mt-5 max-w-xl text-sm sm:text-base md:text-lg">
            Handpicked homes designed for elite lifestyle, comfort, and investment value.
          </p>
        </motion.div>

        <Link
          to="/properties"
          className="px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-base rounded-full bg-black text-white shadow-xl hover:scale-105 transition w-fit"
        >
          Explore All <ArrowRight className="inline w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* CAROUSEL */}
      <div className="relative flex items-center justify-center">

        {/* LEFT BUTTON */}
        <button
          onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
          className="absolute left-2 sm:left-6 z-20 bg-white shadow-xl p-2 sm:p-3 rounded-full hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* CARDS */}
        <div
          ref={containerRef}
          className="flex gap-4 sm:gap-6 mx-4 sm:mx-10 overflow-x-auto scrollbar-hide px-4 sm:px-10 scroll-smooth"
        >
          {properties.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                animate={{
                  scale: isActive ? 1 : 0.95,
                }}
                transition={{ duration: 0.4 }}
                className="min-w-[280px] sm:min-w-[360px] md:min-w-[420px] transition-all"
              >
                <PropertyCard property={item} />
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() =>
            scrollToIndex(Math.min(activeIndex + 1, properties.length - 1))
          }
          className="absolute right-2 sm:right-6 z-20 bg-white shadow-xl p-2 sm:p-3 rounded-full hover:scale-110 transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-8 md:mt-12 gap-2 flex-wrap px-4">
        {properties.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex ? "w-6 sm:w-8 bg-blue-600" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;