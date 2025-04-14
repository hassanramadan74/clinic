// "use client";

// import type React from "react";
// import { useState, useRef, useEffect, useCallback } from "react";
// import Image from "next/image";
// import { motion } from "motion/react";
// import { theme } from "@/lib/theme";
// import { ArrowRight } from "lucide-react";

// function ImageSlider() {
//   const [sliderPosition, setSliderPosition] = useState(50);
//   const [isDragging, setIsDragging] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleMouseDown = () => {
//     setIsDragging(true);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseMove = useCallback(
//     (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
//       if (!isDragging || !containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;

//       const newPosition = Math.max(0, Math.min(100, x));
//       setSliderPosition(newPosition);
//     },
//     [isDragging]
//   );

//   const handleTouchMove = useCallback(
//     (e: React.TouchEvent<HTMLDivElement> | TouchEvent) => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const touch = e.touches[0];
//       const x = ((touch.clientX - rect.left) / rect.width) * 100;
//       const newPosition = Math.max(0, Math.min(100, x));
//       setSliderPosition(newPosition);
//     },
//     []
//   );

//   useEffect(() => {
//     const handleMouseUpGlobal = () => {
//       setIsDragging(false);
//     };

//     const handleMouseMoveGlobal = (e: MouseEvent) => {
//       if (isDragging) {
//         handleMouseMove(e);
//       }
//     };

//     window.addEventListener("mouseup", handleMouseUpGlobal);
//     window.addEventListener("mousemove", handleMouseMoveGlobal);

//     return () => {
//       window.removeEventListener("mouseup", handleMouseUpGlobal);
//       window.removeEventListener("mousemove", handleMouseMoveGlobal);
//     };
//   }, [isDragging, handleMouseMove]);

//   return (
//     <section style={{ backgroundColor: theme.colors.background }}>
//       <div className="container py-16 px-4 mx-auto">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <motion.div
//             className="max-w-2xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.div
//               className="inline-flex items-center gap-2 mb-4"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               <span
//                 className="h-[1px] w-6"
//                 style={{ backgroundColor: theme.colors.primary }}
//               ></span>
//               <span
//                 className="text-sm font-medium uppercase tracking-wider"
//                 style={{ color: theme.colors.primary }}
//               >
//                 Transformations
//               </span>
//               <span
//                 className="h-[1px] w-6"
//                 style={{ backgroundColor: theme.colors.primary }}
//               ></span>
//             </motion.div>

//             <motion.h3
//               className="text-lg font-medium mb-3 uppercase"
//               style={{ color: theme.colors.darkMuted }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               We seek your perfection
//             </motion.h3>

//             <motion.h2
//               className="text-3xl md:text-4xl font-bold mb-6"
//               style={{ color: theme.colors.dark }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               CHECK OUT OUR INCREDIBLE BEFORE AND AFTER RESULTS
//             </motion.h2>

//             <motion.p
//               className="mb-8 text-lg"
//               style={{ color: theme.colors.darkMuted }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               See the remarkable transformations achieved by our expert
//               treatments. Slide to compare the before and after results.
//             </motion.p>

//             <motion.button
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
//               style={{ backgroundColor: theme.colors.primary }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               whileHover={{
//                 backgroundColor: theme.colors.primaryHover,
//                 scale: 1.02,
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               View All Transformations <ArrowRight size={16} />
//             </motion.button>
//           </motion.div>

//           <motion.div
//             className="w-full max-w-[800px]"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             <div
//               ref={containerRef}
//               className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg cursor-ew-resize"
//               style={{ boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)` }}
//               onMouseDown={handleMouseDown}
//               onMouseUp={handleMouseUp}
//               onMouseMove={handleMouseMove}
//               onTouchMove={handleTouchMove}
//             >
//               {/* "After" image (shown fully) */}
//               <div className="absolute inset-0 w-full h-full">
//                 <Image
//                   src="/images/BeforAfter2.jpg"
//                   alt="After"
//                   fill
//                   style={{ objectFit: "cover" }}
//                   priority
//                 />
//               </div>

//               {/* "Before" image (clipped based on slider) */}
//               <div
//                 className="absolute inset-0 h-full overflow-hidden"
//                 style={{ width: `${sliderPosition}%` }}
//               >
//                 <div className="relative h-full w-full">
//                   <Image
//                     src="/images/BeforAfter1.jpg"
//                     alt="Before"
//                     fill
//                     style={{
//                       objectFit: "cover",
//                       objectPosition: "center", // Center the image
//                     }}
//                     priority
//                   />
//                 </div>
//               </div>

//               {/* Slider control */}
//               <div
//                 className="absolute top-0 bottom-0 w-1"
//                 style={{
//                   left: `calc(${sliderPosition}% - 0.5px)`,
//                   transform: "translateX(-50%)",
//                   backgroundColor: theme.colors.primary,
//                 }}
//               >
//                 <div
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10"
//                   style={{ backgroundColor: theme.colors.primary }}
//                 >
//                   <div className="flex items-center justify-center">
//                     <div className="w-1 h-5 bg-white rounded-full"></div>
//                     <div className="w-5 h-1 bg-white rounded-full"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Labels */}
//               <motion.div
//                 className="absolute bottom-6 left-6 px-4 py-2 text-white rounded-full text-sm font-medium"
//                 style={{ backgroundColor: `${theme.colors.primary}CC` }}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.7, duration: 0.5 }}
//               >
//                 Before
//               </motion.div>

//               <motion.div
//                 className="absolute bottom-6 right-6 px-4 py-2 text-white rounded-full text-sm font-medium"
//                 style={{ backgroundColor: `${theme.colors.secondary}CC` }}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.7, duration: 0.5 }}
//               >
//                 After
//               </motion.div>
//             </div>

//             <div className="mt-4 text-center">
//               <p className="text-sm" style={{ color: theme.colors.darkMuted }}>
//                 Drag the slider to compare before and after
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ImageSlider;
