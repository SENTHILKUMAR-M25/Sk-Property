// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import properties from "../components/properties"; // Ensure this contains your detailed JSON
// import { motion, AnimatePresence } from "framer-motion";
// import {
//     BedDouble,
//     Bath,
//     Maximize,
//     MapPin,
//     ShieldCheck,
//     Star,
//     Heart,
//     Share2,
//     Printer,
//     Calendar,
//     Warehouse,
//     ChevronLeft,
//     ChevronRight,
//     Phone,
//     Mail,
//     Send
// } from "lucide-react";
// import ActionButton from "../components/ActionButton";

// const PropertyDetailPage = () => {
//     const [toast, setToast] = useState({
//         show: false,
//         text: ""
//     });
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         message: ""
//     });
//     const { slug } = useParams();
//     const property = properties.find((p) => p.slug === slug);

//     const [activeImg, setActiveImg] = useState(0);
//     const [tab, setTab] = useState("overview");
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveImg((prev) =>
//                 prev === property.images.length - 1 ? 0 : prev + 1
//             );
//         }, 4000); // auto slide every 4s

//         return () => clearInterval(interval);
//     }, [property.images.length]);
//     if (!property) {
//         return (
//             <div className="h-screen flex flex-col items-center justify-center gap-4">
//                 <span className="text-6xl">🚫</span>
//                 <h2 className="text-2xl font-bold text-slate-800">Property not found</h2>
//             </div>
//         );
//     }
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const priceFormatted = new Intl.NumberFormat('en-IN', {
//         style: 'currency',
//         currency: 'INR',
//         maximumFractionDigits: 0,
//     }).format(property.price.amount);

// const handlesubmit = (e) => {
//     e.preventDefault();

//     // ✅ simple validation
//     if (!formData.name || !formData.email || !formData.phone || !formData.message) {
//         setToast({
//             show: true,
//             type: "error",
//             text: "⚠️ Please fill all fields!"
//         });

//         setTimeout(() => {
//             setToast({ show: false, text: "", type: "" });
//         }, 3000);

//         return;
//     }

//     // ✅ success toast
//     setToast({
//         show: true,
//         type: "success",
//         text: "✅ Your request has been submitted successfully!"
//     });

//     // reset form
//     setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         message: ""
//     });

//     setTimeout(() => {
//         setToast({ show: false, text: "", type: "" });
//     }, 3000);
// };
//     // return (
//     //     <div className="bg-slate-50 mb-15 relative top-1 min-h-screen">


//     //         <div className="max-w-7xl mx-auto px-6 py-8">
//     //             <div className="grid lg:grid-cols-3 gap-10">

//     //                 {/* LEFT CONTENT */}
//     //                 <div className="lg:col-span-2 space-y-2">

//     //                     <div className="relative group ">

//     //                         {/* MAIN IMAGE WRAPPER */}
//     //                         <div className="relative h-[520px] rounded-[44px] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.4)]">

//     //                             {/* IMAGE */}
//     //                             <AnimatePresence mode="wait">
//     //                                 <motion.img
//     //                                     key={activeImg}
//     //                                     src={property.images[activeImg]}
//     //                                     initial={{ opacity: 0, scale: 1.1 }}
//     //                                     animate={{ opacity: 1, scale: 1 }}
//     //                                     exit={{ opacity: 0, scale: 1.05 }}
//     //                                     transition={{ duration: 0.6 }}
//     //                                     className="w-full h-full object-cover"
//     //                                 />
//     //                             </AnimatePresence>

//     //                             {/* DARK PREMIUM OVERLAY */}
//     //                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

//     //                             {/* FAVORITE BUTTON */}


//     //                             {/* NAV LEFT */}
//     //                             <button
//     //                                 onClick={() =>
//     //                                     setActiveImg((prev) =>
//     //                                         prev === 0 ? property.images.length - 1 : prev - 1
//     //                                     )
//     //                                 }
//     //                                 className="absolute left-5 top-1/2 -translate-y-1/2 
//     //   bg-white/10 backdrop-blur-xl border border-white/20 
//     //   p-3 rounded-full text-white 
//     //   opacity-0 group-hover:opacity-100 
//     //   hover:bg-white hover:text-black transition-all"
//     //                             >
//     //                                 <ChevronLeft size={22} />
//     //                             </button>

//     //                             {/* NAV RIGHT */}
//     //                             <button
//     //                                 onClick={() =>
//     //                                     setActiveImg((prev) =>
//     //                                         prev === property.images.length - 1 ? 0 : prev + 1
//     //                                     )
//     //                                 }
//     //                                 className="absolute right-5 top-1/2 -translate-y-1/2 
//     //   bg-white/10 backdrop-blur-xl border border-white/20 
//     //   p-3 rounded-full text-white 
//     //   opacity-0 group-hover:opacity-100 
//     //   hover:bg-white hover:text-black transition-all"
//     //                             >
//     //                                 <ChevronRight size={22} />
//     //                             </button>

//     //                             {/* IMAGE COUNTER */}
//     //                             <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
//     //                                 <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-white text-xs font-bold">
//     //                                     {activeImg + 1} / {property.images.length}
//     //                                 </div>
//     //                             </div>
//     //                         </div>

//     //                         {/* DOT INDICATOR (AUTO PROGRESS STYLE) */}
//     //                         <div className="flex justify-center gap-2 mt-5">
//     //                             {property.images.map((_, i) => (
//     //                                 <button
//     //                                     key={i}
//     //                                     onClick={() => setActiveImg(i)}
//     //                                     className={`transition-all rounded-full ${i === activeImg
//     //                                         ? "w-8 h-2 bg-blue-600"
//     //                                         : "w-2 h-2 bg-gray-300"
//     //                                         }`}
//     //                                 />
//     //                             ))}
//     //                         </div>

//     //                         {/* THUMBNAILS (glass strip) */}
//     //                         <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
//     //                             {property.images.map((img, i) => (
//     //                                 <motion.div
//     //                                     key={i}
//     //                                     whileHover={{ scale: 1.08 }}
//     //                                     onClick={() => setActiveImg(i)}
//     //                                     className={`min-w-[110px] h-20 rounded-2xl overflow-hidden cursor-pointer border transition-all ${activeImg === i
//     //                                         ? "border-blue-500 ring-2 ring-blue-100"
//     //                                         : "border-white/30 opacity-70"
//     //                                         }`}
//     //                                 >
//     //                                     <img src={img} className="w-full h-full object-cover" />
//     //                                 </motion.div>
//     //                             ))}
//     //                         </div>
//     //                     </div>
//     //                     {/* HEADER SECTION */}
//     //                     <div className="bg-white border-b sticky top-18 z-40">
//     //                         <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
//     //                             <div>
//     //                                 <h1 className="text-2xl font-extrabold text-slate-900 leading-tight">
//     //                                     {property.title}
//     //                                 </h1>
//     //                                 <div className="flex items-center gap-2 text-slate-500 mt-1">
//     //                                     <MapPin size={14} className="text-blue-600" />
//     //                                     <p className="text-xs font-medium uppercase tracking-wider">{property.location.address}, {property.location.city}</p>
//     //                                 </div>
//     //                             </div>
//     //                             <div className="flex gap-2">
//     //                                 <ActionButton icon={<Heart size={18} />} />
//     //                                 <ActionButton icon={<Share2 size={18} />} />
//     //                                 <ActionButton icon={<Printer size={18} />} />
//     //                             </div>
//     //                         </div>
//     //                     </div>
//     //                     {/* QUICK STATS BAR */}
//     //                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//     //                         <StatBox icon={<BedDouble className="text-blue-600" />} title="Bedrooms" value={property.rooms.bedrooms} />
//     //                         <StatBox icon={<Bath className="text-blue-600" />} title="Bathrooms" value={property.rooms.bathrooms} />
//     //                         <StatBox icon={<Warehouse className="text-blue-600" />} title="Garage" value={property.parking.car || "2"} />
//     //                         <StatBox icon={<Calendar className="text-blue-600" />} title="Year Built" value={property.ageOfProperty === "2 Years" ? "2024" : "2022"} />
//     //                     </div>

//     //                     {/* TABBED CONTENT */}
//     //                     <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100">
//     //                         <div className="flex gap-8 border-b mb-8">
//     //                             {["overview"].map((t) => (
//     //                                 <button
//     //                                     key={t}
//     //                                     onClick={() => setTab(t)}
//     //                                     className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${tab === t ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
//     //                                         }`}
//     //                                 >
//     //                                     {t}
//     //                                     {tab === t && (
//     //                                         <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />
//     //                                     )}
//     //                                 </button>
//     //                             ))}
//     //                         </div>

//     //                         <div className="prose prose-slate max-w-none">
//     //                             {tab === "overview" && (
//     //                                 <div className="space-y-6">
//     //                                     <h3 className="text-xl font-bold text-slate-900">Description</h3>
//     //                                     <p className="text-slate-600 leading-relaxed text-lg">{property.description}</p>
                                        // <div className="pt-6 border-t">
                                        //     <h3 className="text-lg font-bold mb-4">Key Features</h3>
                                        //     <div className="grid grid-cols-2 gap-4">
                                        //         {property.amenities.slice(0, 6).map((item, idx) => (
                                        //             <div key={idx} className="flex items-center gap-3 text-slate-600">
                                        //                 <div className="w-2 h-2 rounded-full bg-blue-600" />
                                        //                 <span className="text-sm font-medium">{item}</span>
                                        //             </div>
                                        //         ))}
                                        //     </div>
                                        // </div>
//     //                                 </div>
//     //                             )}
//     //                             {/* Add logic for other tabs similarly */}
//     //                         </div>
//     //                     </div>
//     //                 </div>

//     //                 {/* RIGHT SIDEBAR */}
//     //                 <div className="space-y-8">

//     //                     {/* PRICING & ACTION CARD */}
//     //                     <div className="bg-white rounded-[40px] p-8 shadow-2xl shadow-blue-900/5 border border-slate-100 sticky top-28">
//     //                         <div className="flex flex-col gap-1 mb-8">
//     //                             <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Listing Price</span>
//     //                             <div className="flex items-baseline gap-2">
//     //                                 <h2 className="text-4xl font-black text-slate-900">{priceFormatted}</h2>
//     //                                 {property.premiumListing && <span className="text-green-500 font-bold text-sm">Negotiable</span>}
//     //                             </div>
//     //                         </div>

//     //                         {/* AGENT MINI PROFILE */}


//     //                         {/* LEAD FORM */}
//     //                         {/* LEAD FORM */}
//     //                         <form onSubmit={handlesubmit} className="space-y-4">

//     //                             <Input
//     //                                 name="name"
//     //                                 value={formData.name}
//     //                                 onChange={handleChange}
//     //                                 placeholder="Full Name"
//     //                             />

//     //                             <Input
//     //                                 name="email"
//     //                                 value={formData.email}
//     //                                 onChange={handleChange}
//     //                                 placeholder="Email Address"
//     //                                 icon={<Mail size={16} />}
//     //                             />

//     //                             <Input
//     //                                 name="phone"
//     //                                 value={formData.phone}
//     //                                 onChange={handleChange}
//     //                                 placeholder="Phone Number"
//     //                                 icon={<Phone size={16} />}
//     //                             />

//     //                             <textarea
//     //                                 name="message"
//     //                                 value={formData.message}
//     //                                 onChange={handleChange}
//     //                                 placeholder="I am interested in this property..."
//     //                                 className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:ring-2 ring-blue-100 outline-none h-24"
//     //                             />

//     //                             <button
//     //                                 type="submit"
//     //                                 className="w-full bg-gradient-to-tr from-blue-600 to-indigo-700 text-white py-4 rounded-2xl font-black text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
//     //                             >
//     //                                 <Send size={18} /> Request Information
//     //                             </button>
//     //                         </form>

//     //                         <div className="flex items-center justify-center gap-6 mt-6">
//     //                             <a href="#" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">
//     //                                 <Phone size={14} /> WhatsApp
//     //                             </a>
//     //                             <div className="w-[1px] h-4 bg-slate-200" />
//     //                             <a href="#" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">
//     //                                 Tour Property
//     //                             </a>
//     //                         </div>
//     //                     </div>
//     //                 </div>
//     //                 <AnimatePresence>
//     //                     {toast.show && (
//     //                         <motion.div
//     //                             initial={{ opacity: 0, y: 30, scale: 0.9 }}
//     //                             animate={{ opacity: 1, y: 0, scale: 1 }}
//     //                             exit={{ opacity: 0, y: 20, scale: 0.9 }}
//     //                             transition={{ duration: 0.3 }}
//     //                             className="fixed top-30 left-1/2 -translate-x-1/2 
//     //   bg-gradient-to-r from-black to-gray-800 text-white 
//     //   px-6 py-3 rounded-xl shadow-2xl z-50 text-sm font-medium"
//     //                         >
//     //                             {toast.text}
//     //                         </motion.div>
//     //                     )}
//     //                 </AnimatePresence>
//     //             </div>
//     //         </div>
//     //     </div>
//     // );

// return (
//     <div className="bg-slate-50 mb-15 relative top-1 min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

//                 {/* LEFT CONTENT */}
//                 <div className="lg:col-span-2 space-y-2">

//                     <div className="relative group ">

//                         {/* IMAGE */}
//                         <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-[44px] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.4)]">

//                             <AnimatePresence mode="wait">
//                                 <motion.img
//                                     key={activeImg}
//                                     src={property.images[activeImg]}
//                                     initial={{ opacity: 0, scale: 1.1 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     exit={{ opacity: 0, scale: 1.05 }}
//                                     transition={{ duration: 0.6 }}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </AnimatePresence>

//                             <button
//                                 onClick={() =>
//                                     setActiveImg((prev) =>
//                                         prev === 0 ? property.images.length - 1 : prev - 1
//                                     )
//                                 }
//                                 className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2"
//                             >
//                                 <ChevronLeft />
//                             </button>

//                             <button
//                                 onClick={() =>
//                                     setActiveImg((prev) =>
//                                         prev === property.images.length - 1 ? 0 : prev + 1
//                                     )
//                                 }
//                                 className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2"
//                             >
//                                 <ChevronRight />
//                             </button>

//                             <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2">
//                                 <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-3 sm:px-4 py-2 rounded-full text-white text-[10px] sm:text-xs font-bold">
//                                     {activeImg + 1} / {property.images.length}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* DOTS */}
//                         <div className="flex justify-center gap-2 mt-3 sm:mt-5">
//                             {property.images.map((_, i) => (
//                                 <button
//                                     key={i}
//                                     onClick={() => setActiveImg(i)}
//                                     className={`transition-all rounded-full ${i === activeImg
//                                             ? "w-6 sm:w-8 h-2 bg-blue-600"
//                                             : "w-2 h-2 bg-gray-300"
//                                         }`}
//                                 />
//                             ))}
//                         </div>

//                         {/* HEADER */}
//                         <div className="bg-white border-b sticky top-18 z-40">
//                             <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-3 sm:gap-4">
//                                 <div>
//                                     <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 leading-tight">
//                                         {property.title}
//                                     </h1>
//                                     <div className="flex items-center gap-2 text-slate-500 mt-1">
//                                         <MapPin size={14} className="text-blue-600" />
//                                         <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">
//                                             {property.location.address}, {property.location.city}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* STATS */}
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
//                             <StatBox icon={<BedDouble className="text-blue-600" />} title="Bedrooms" value={property.rooms.bedrooms} />
//                             <StatBox icon={<Bath className="text-blue-600" />} title="Bathrooms" value={property.rooms.bathrooms} />
//                             <StatBox icon={<Warehouse className="text-blue-600" />} title="Garage" value={property.parking.car || "2"} />
//                             <StatBox icon={<Calendar className="text-blue-600" />} title="Year Built" value={property.ageOfProperty === "2 Years" ? "2024" : "2022"} />
//                         </div>

//                         {/* TABS */}
//                         <div className="bg-white rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-sm border border-slate-100">
//                             <div className="flex gap-4 sm:gap-8 border-b mb-6 sm:mb-8">
//                                 {["overview"].map((t) => (
//                                     <button
//                                         key={t}
//                                         onClick={() => setTab(t)}
//                                         className={`pb-3 sm:pb-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all relative ${tab === t ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
//                                             }`}
//                                     >
//                                         {t}
//                                     </button>
//                                 ))}
//                             </div>

//                             <div className="prose prose-slate max-w-none">
//                                 {tab === "overview" && (
//                                     <div className="space-y-4 sm:space-y-6">
//                                         <h3 className="text-lg sm:text-xl font-bold text-slate-900">Description</h3>
//                                         <p className="text-slate-600 leading-relaxed text-sm sm:text-lg">
//                                             {property.description}
//                                         </p>
//                                     </div>
//                                 )}
//                                  <div className="pt-6 border-t">
//                                             <h3 className="text-lg font-bold mb-4">Key Features</h3>
//                                             <div className="grid grid-cols-2 gap-4">
//                                                 {property.amenities.slice(0, 6).map((item, idx) => (
//                                                     <div key={idx} className="flex items-center gap-3 text-slate-600">
//                                                         <div className="w-2 h-2 rounded-full bg-blue-600" />
//                                                         <span className="text-sm font-medium">{item}</span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT SIDEBAR */}
//                 <div className="space-y-6 lg:space-y-8">

//                     <div className="bg-white h-fit rounded-[40px] p-6 sm:p-8 shadow-xl sticky lg:top-28">

//                         <h2 className="text-2xl sm:text-3xl font-black mb-6">
//                             {priceFormatted}
//                         </h2>

//                         <form onSubmit={handlesubmit} className="space-y-3 sm:space-y-4">

//                             <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />

//                             <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" icon={<Mail size={16} />} />

//                             <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" icon={<Phone size={16} />} />

//                             <textarea
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 placeholder="Message"
//                                 className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-3 sm:p-4 text-sm h-20 sm:h-24"
//                             />

//                             <button
//                                 type="submit"
//                                 className="w-full bg-gradient-to-tr from-blue-600 to-indigo-700 text-white py-3 sm:py-4 rounded-2xl font-black text-sm shadow-xl flex items-center justify-center gap-2"
//                             >
//                                 <Send size={18} /> Request Information
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* TOAST */}
//                 <AnimatePresence>
//                     {toast.show && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 30, scale: 0.9 }}
//                             animate={{ opacity: 1, y: 0, scale: 1 }}
//                             exit={{ opacity: 0, y: 20, scale: 0.9 }}
//                             className="fixed top-20 sm:top-30 left-1/2 -translate-x-1/2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm"
//                         >
//                             {toast.text}
//                         </motion.div>
//                     )}
//                 </AnimatePresence>

//             </div>
//         </div>
//     </div>
// );
// };

// // Helper Components


// const StatBox = ({ icon, title, value }) => (
//     <div className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4">
//         <div className="p-3 bg-blue-50 rounded-2xl">
//             {icon}
//         </div>
//         <div>
//             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{title}</p>
//             <p className="text-lg font-black text-slate-900 mt-1">{value}</p>
//         </div>
//     </div>
// );

// const Input = ({ name, value, onChange, placeholder, icon }) => (
//     <div className="relative">
//         <input
//             name={name}
//             value={value}
//             onChange={onChange}
//             placeholder={placeholder}
//             className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 text-sm focus:ring-2 ring-blue-100 outline-none font-medium"
//         />
//         {icon && (
//             <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300">
//                 {icon}
//             </div>
//         )}
//     </div>
// );

// export default PropertyDetailPage;






import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import properties from "../components/properties";
import { motion, AnimatePresence } from "framer-motion";
import {
    BedDouble,
    Bath,
    MapPin,
    Heart,
    Share2,
    Printer,
    Calendar,
    Warehouse,
    ChevronLeft,
    ChevronRight,
    Phone,
    Mail,
    Send
} from "lucide-react";
import ActionButton from "../components/ActionButton";

const PropertyDetailPage = () => {
    const [toast, setToast] = useState({ show: false, text: "" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const { slug } = useParams();
    const property = properties.find((p) => p.slug === slug);

    const [activeImg, setActiveImg] = useState(0);
    const [tab, setTab] = useState("overview");

    useEffect(() => {
        if (!property) return;

        const interval = setInterval(() => {
            setActiveImg((prev) =>
                prev === property.images.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [property]);

    if (!property) {
        return (
            <div className="h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
                <span className="text-6xl">🚫</span>
                <h2 className="text-2xl font-bold text-slate-800">
                    Property not found
                </h2>
            </div>
        );
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const priceFormatted = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(property.price.amount);

    const handlesubmit = (e) => {
        e.preventDefault();

        setToast({
            show: true,
            text: "✅ Your request has been submitted successfully!"
        });

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });

        setTimeout(() => {
            setToast({ show: false, text: "" });
        }, 3000);
    };

    return (
        <div className="bg-slate-50 mb-15 relative top-1 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 space-y-2">

                        {/* IMAGE SECTION */}
                        <div className="relative group">

                            <div className="relative h-[300px] sm:h-[420px] lg:h-[520px] rounded-[30px] sm:rounded-[44px] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.4)]">

                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImg}
                                        src={property.images[activeImg]}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>

                                <button
                                    onClick={() =>
                                        setActiveImg((prev) =>
                                            prev === 0 ? property.images.length - 1 : prev - 1
                                        )
                                    }
                                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2"
                                >
                                    <ChevronLeft />
                                </button>

                                <button
                                    onClick={() =>
                                        setActiveImg((prev) =>
                                            prev === property.images.length - 1 ? 0 : prev + 1
                                        )
                                    }
                                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2"
                                >
                                    <ChevronRight />
                                </button>

                                <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-3 sm:px-4 py-2 rounded-full text-white text-[10px] sm:text-xs font-bold">
                                        {activeImg + 1} / {property.images.length}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center gap-2 mt-4 sm:mt-5 flex-wrap">
                                {property.images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImg(i)}
                                        className={`transition-all rounded-full ${i === activeImg
                                            ? "w-7 sm:w-8 h-2 bg-blue-600"
                                            : "w-2 h-2 bg-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-3 mt-5 sm:mt-6 overflow-x-auto pb-2">
                                {property.images.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.08 }}
                                        onClick={() => setActiveImg(i)}
                                        className={`min-w-[90px] sm:min-w-[110px] h-16 sm:h-20 rounded-2xl overflow-hidden cursor-pointer border transition-all ${activeImg === i
                                            ? "border-blue-500 ring-2 ring-blue-100"
                                            : "border-white/30 opacity-70"
                                            }`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* HEADER */}
                        <div className="bg-white border-b sticky top-16 sm:top-18 z-40">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                                <div>
                                    <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                                        {property.title}
                                    </h1>
                                    <div className="flex items-center gap-2 text-slate-500 mt-1">
                                        <MapPin size={14} className="text-blue-600" />
                                        <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                                            {property.location.address}, {property.location.city}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    <ActionButton icon={<Heart size={18} />} />
                                    <ActionButton icon={<Share2 size={18} />} />
                                    <ActionButton icon={<Printer size={18} />} />
                                </div>
                            </div>
                        </div>

                        {/* STATS */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                            <StatBox icon={<BedDouble className="text-blue-600" />} title="Bedrooms" value={property.rooms.bedrooms} />
                            <StatBox icon={<Bath className="text-blue-600" />} title="Bathrooms" value={property.rooms.bathrooms} />
                            <StatBox icon={<Warehouse className="text-blue-600" />} title="Garage" value={property.parking.car || "2"} />
                            <StatBox icon={<Calendar className="text-blue-600" />} title="Year Built" value={property.ageOfProperty === "2 Years" ? "2024" : "2022"} />
                        </div>

                        {/* TABS */}
                        <div className="bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 shadow-sm border border-slate-100">
                            <div className="flex gap-6 sm:gap-8 border-b mb-6 sm:mb-8 flex-wrap">
                                {["overview"].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setTab(t)}
                                        className={`pb-3 sm:pb-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all relative ${tab === t ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>

                            <div className="prose prose-slate max-w-none">
                                {tab === "overview" && (
                                    <div className="space-y-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">Description</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm sm:text-lg">{property.description}</p>
                                    </div>
                                )}
                                <div className="pt-6 border-t">
                                            <h3 className="text-lg font-bold mb-4">Key Features</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {property.amenities.slice(0, 6).map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 text-slate-600">
                                                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                                                        <span className="text-sm font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="bg-white h-fit rounded-[30px] sm:rounded-[40px] p-5 sm:p-8 shadow-xl">

                        <h2 className="text-2xl sm:text-3xl font-black mb-6">
                            {priceFormatted}
                        </h2>

                        <form onSubmit={handlesubmit} className="space-y-3 sm:space-y-4">

                            <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
                            <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" icon={<Mail size={16} />} />
                            <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" icon={<Phone size={16} />} />

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="I am interested in this property..."
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-3 sm:p-4 text-sm h-20 sm:h-24"
                            />

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-tr from-blue-600 to-indigo-700 text-white py-3 sm:py-4 rounded-2xl font-black text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2"
                            >
                                <Send size={18} /> Request Information
                            </button>
                        </form>
                    </div>

                    {/* TOAST */}
                    <AnimatePresence>
                        {toast.show && (
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                className="fixed bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm"
                            >
                                {toast.text}
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
};

// helper components unchanged
const StatBox = ({ icon, title, value }) => (
    <div className="bg-white p-4 rounded-2xl border border-slate-100">
        <div>{icon}</div>
        <p className="text-xs">{title}</p>
        <p className="font-bold text-sm sm:text-base">{value}</p>
    </div>
);

const Input = ({ name, value, onChange, placeholder, icon }) => (
    <div className="relative">
        <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 sm:py-4 px-4 sm:px-5 text-sm"
        />
        {icon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                {icon}
            </div>
        )}
    </div>
);

export default PropertyDetailPage;