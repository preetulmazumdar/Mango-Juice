"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--product-gradient', currentProduct.gradient);
  }, [currentIndex, currentProduct]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="relative min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Main Orchestration with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentProduct.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-full"
        >
          {/* 1. Scrollytelling Experience */}
          <section className="relative w-full">
            <ProductTextOverlays product={currentProduct} />
            <ProductBottleScroll product={currentProduct} />
          </section>

          {/* 2. Product Details Section */}
          <section className="relative z-30 py-24 px-6 md:px-12 max-w-7xl mx-auto bg-black/20 backdrop-blur-md rounded-3xl mt-[-20vh] mb-24 shadow-2xl overflow-hidden border border-white/10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl md:text-5xl font-bold text-white">{currentProduct.detailsSection.title}</h3>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                  {currentProduct.detailsSection.description}
                </p>
                <div className="flex flex-col gap-4 mt-4">
                  {currentProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="text-orange-400" />
                      <span className="text-lg font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-3 gap-4">
                  {currentProduct.stats.map((stat, i) => (
                    <div key={i} className="bg-white/10 rounded-2xl p-6 text-center border border-white/5 backdrop-blur-md hover:bg-white/20 transition-all">
                      <div className="text-3xl font-bold text-white mb-2">{stat.val}</div>
                      <div className="text-sm font-medium text-white/60 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 rounded-2xl p-8 border border-white/5 backdrop-blur-md">
                  <h4 className="text-2xl font-bold text-white mb-4">{currentProduct.freshnessSection.title}</h4>
                  <p className="text-white/70">{currentProduct.freshnessSection.description}</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 3. Buy Now Section */}
          <section className="relative z-30 py-24 px-6 mb-32 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 rounded-[3rem] p-12 md:p-20 shadow-2xl border border-gray-800"
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Experience {currentProduct.name}</h2>
              <div className="flex items-end justify-center gap-2 mb-10">
                <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                  {currentProduct.buyNowSection.price}
                </span>
                <span className="text-xl md:text-2xl text-gray-500 font-medium pb-2">
                  {currentProduct.buyNowSection.unit}
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {currentProduct.buyNowSection.processingParams.map((param, i) => (
                  <span key={i} className="px-6 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700">
                    {param}
                  </span>
                ))}
              </div>

              <button className="w-full md:w-auto px-16 py-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-2xl font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                Add to Cart
              </button>
              
              <div className="mt-12 text-sm text-gray-500 flex flex-col gap-2">
                <p>{currentProduct.buyNowSection.deliveryPromise}</p>
                <p>{currentProduct.buyNowSection.returnPolicy}</p>
              </div>
            </motion.div>
          </section>

          {/* 4. Next Flavor Button */}
          <section className="relative z-30 w-full">
            <button 
              onClick={handleNext}
              className="w-full py-32 bg-black hover:bg-gray-900 transition-colors flex flex-col items-center justify-center gap-4 group"
              style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)' }}
            >
              <span className="text-gray-400 text-lg font-medium uppercase tracking-widest group-hover:text-orange-400 transition-colors">Continue the journey</span>
              <span className="text-5xl md:text-7xl font-black text-white group-hover:scale-105 transition-transform">
                Next Flavor
              </span>
            </button>
          </section>
        </motion.main>
      </AnimatePresence>

      {/* Navigation - Fixed Elements */}
      
      {/* Side Arrows */}
      <div className="fixed top-1/2 left-4 md:left-8 -translate-y-1/2 z-50">
        <button 
          onClick={handlePrev}
          className="p-4 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 hover:bg-white/20 transition-all hover:-translate-x-1"
        >
          <ChevronLeft size={32} />
        </button>
      </div>
      <div className="fixed top-1/2 right-4 md:right-8 -translate-y-1/2 z-50">
        <button 
          onClick={handleNext}
          className="p-4 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 hover:bg-white/20 transition-all hover:translate-x-1"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Bottom Pill Menu */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 p-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(i)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                i === currentIndex ? "bg-white text-black shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {p.name.split(" ")[1] || p.name}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
