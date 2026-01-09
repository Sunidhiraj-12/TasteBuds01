import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">TasteBuds</h2>
            <p className="mt-2 text-sm text-gray-400">
              Discover, save & cook delicious recipes from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-red-500 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">Recipes</li>
              <li className="hover:text-red-500 cursor-pointer">Favourites</li>
              <li className="hover:text-red-500 cursor-pointer">About</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 cursor-pointer transition">
                F
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 cursor-pointer transition">
                I
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 cursor-pointer transition">
                T
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} TasteBuds. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ProtectedRoute;
