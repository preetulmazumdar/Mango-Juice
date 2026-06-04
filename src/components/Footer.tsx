import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 14L8 16L6 30L26 12L18 10L24 2L16 2Z" fill="currentColor" />
            </svg>
            <span className="text-xl font-bold text-white">Nano Banana</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            The future of freshness. Premium cold-pressed juices crafted with science and nature.
          </p>
        </div>

        {/* Shop */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold">Shop</h4>
          <a href="#" className="hover:text-white transition-colors">Cream Mango</a>
          <a href="#" className="hover:text-white transition-colors">Dutch Chocolate</a>
          <a href="#" className="hover:text-white transition-colors">Ruby Pomegranate</a>
          <a href="#" className="hover:text-white transition-colors">Bundles</a>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold">Support</h4>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
          <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>

        {/* Newsletter */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-3">
          <h4 className="text-white font-semibold">Stay Fresh</h4>
          <p className="text-sm">Subscribe for exclusive drops and nutrition tips.</p>
          <div className="mt-2 flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded-l-lg outline-none focus:ring-1 focus:ring-orange-500 flex-1 min-w-0 border-y border-l border-gray-700"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
        &copy; {new Date().getFullYear()} Nano Banana. All rights reserved.
      </div>
    </footer>
  );
}
