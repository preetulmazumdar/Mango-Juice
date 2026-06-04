"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
  product: Product;
}

export default function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate opacities for the 4 sections
  // Section 1: visible 0-0.2
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  // Section 2: visible 0.25-0.5
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  // Section 3: visible 0.5-0.75
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  // Section 4: visible 0.75-1.0
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.8, 1, 1], [0, 1, 1, 1]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-20">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center text-center p-8">
        
        {/* Section 1 */}
        <motion.div style={{ opacity: opacity1 }} className="absolute flex flex-col items-center justify-center w-full max-w-4xl px-4 text-white drop-shadow-xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">{product.section1.title}</h1>
          <p className="text-2xl md:text-4xl font-light">{product.section1.subtitle}</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div style={{ opacity: opacity2 }} className="absolute flex flex-col items-center justify-center w-full max-w-4xl px-4 text-white drop-shadow-xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{product.section2.title}</h2>
          <p className="text-xl md:text-3xl font-light">{product.section2.subtitle}</p>
        </motion.div>

        {/* Section 3 */}
        <motion.div style={{ opacity: opacity3 }} className="absolute flex flex-col items-center justify-center w-full max-w-4xl px-4 text-white drop-shadow-xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{product.section3.title}</h2>
          <p className="text-xl md:text-3xl font-light">{product.section3.subtitle}</p>
        </motion.div>

        {/* Section 4 */}
        <motion.div style={{ opacity: opacity4 }} className="absolute flex flex-col items-center justify-center w-full max-w-4xl px-4 text-white drop-shadow-xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{product.section4.title}</h2>
          <p className="text-xl md:text-3xl font-light">{product.section4.subtitle}</p>
        </motion.div>

      </div>
    </div>
  );
}
